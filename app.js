// AI Engineering Roadmap - Main Application
(function() {
  'use strict';

  // State
  const state = {
    currentView: 'dashboard',
    currentMonth: null,
    currentSection: null,
    currentQuiz: null,
    quizIndex: 0,
    quizAnswers: [],
    progress: loadProgress()
  };

  // DOM Elements
  const $header = document.getElementById('header');
  const $headerTitle = document.getElementById('header-title');
  const $backBtn = document.getElementById('back-btn');
  const $progressBtn = document.getElementById('progress-btn');
  const $dashboardView = document.getElementById('dashboard-view');
  const $monthView = document.getElementById('month-view');
  const $topicView = document.getElementById('topic-view');
  const $quizView = document.getElementById('quiz-view');
  const $monthsGrid = document.getElementById('months-grid');
  const $progressModal = document.getElementById('progress-modal');

  // Initialize
  function init() {
    renderDashboard();
    bindEvents();
    updateOverallProgress();
  }

  // Event binding
  function bindEvents() {
    $backBtn.addEventListener('click', goBack);
    $progressBtn.addEventListener('click', showProgressModal);
    document.getElementById('close-progress').addEventListener('click', hideProgressModal);
    $progressModal.addEventListener('click', (e) => {
      if (e.target === $progressModal) hideProgressModal();
    });
  }

  // Progress persistence
  function loadProgress() {
    try {
      const saved = localStorage.getItem('ai-eng-progress');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem('ai-eng-progress', JSON.stringify(state.progress));
    } catch (e) {
      console.error('Failed to save progress:', e);
    }
  }

  function isSectionCompleted(monthId, sectionId) {
    return state.progress[monthId]?.[sectionId] === true;
  }

  function markSectionCompleted(monthId, sectionId) {
    if (!state.progress[monthId]) {
      state.progress[monthId] = {};
    }
    state.progress[monthId][sectionId] = true;
    saveProgress();
    updateOverallProgress();
  }

  function isSectionUnlocked(monthIndex, sectionIndex) {
    const month = CURRICULUM.months[monthIndex];

    // First section of first month is always unlocked
    if (monthIndex === 0 && sectionIndex === 0) return true;

    // First section of other months - check if previous month is complete
    if (sectionIndex === 0 && monthIndex > 0) {
      const prevMonth = CURRICULUM.months[monthIndex - 1];
      return prevMonth.sections.every(s => isSectionCompleted(prevMonth.id, s.id));
    }

    // Other sections - check if previous section in same month is complete
    const prevSection = month.sections[sectionIndex - 1];
    return isSectionCompleted(month.id, prevSection.id);
  }

  function isMonthUnlocked(monthIndex) {
    if (monthIndex === 0) return true;
    const prevMonth = CURRICULUM.months[monthIndex - 1];
    return prevMonth.sections.every(s => isSectionCompleted(prevMonth.id, s.id));
  }

  function getMonthProgress(monthId) {
    const month = CURRICULUM.months.find(m => m.id === monthId);
    if (!month) return 0;
    const completed = month.sections.filter(s => isSectionCompleted(monthId, s.id)).length;
    return Math.round((completed / month.sections.length) * 100);
  }

  function getOverallProgress() {
    let total = 0;
    let completed = 0;
    CURRICULUM.months.forEach(month => {
      total += month.sections.length;
      completed += month.sections.filter(s => isSectionCompleted(month.id, s.id)).length;
    });
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  }

  function updateOverallProgress() {
    const progress = getOverallProgress();
    const circumference = 2 * Math.PI * 52; // r=52
    const offset = circumference - (progress / 100) * circumference;

    const ring = document.querySelector('.progress-ring-fill');
    const text = document.querySelector('.progress-text');

    if (ring) ring.style.strokeDashoffset = offset;
    if (text) text.textContent = `${progress}%`;
  }

  // Navigation
  function showView(viewName) {
    [$dashboardView, $monthView, $topicView, $quizView].forEach(v => v.classList.remove('active'));

    switch(viewName) {
      case 'dashboard':
        $dashboardView.classList.add('active');
        $headerTitle.textContent = 'AI Engineering';
        $backBtn.classList.add('hidden');
        break;
      case 'month':
        $monthView.classList.add('active');
        $backBtn.classList.remove('hidden');
        break;
      case 'topic':
        $topicView.classList.add('active');
        $backBtn.classList.remove('hidden');
        break;
      case 'quiz':
        $quizView.classList.add('active');
        $backBtn.classList.remove('hidden');
        break;
    }

    state.currentView = viewName;
    window.scrollTo(0, 0);
  }

  function goBack() {
    switch(state.currentView) {
      case 'month':
        showView('dashboard');
        renderDashboard();
        break;
      case 'topic':
        showView('month');
        renderMonth(state.currentMonth);
        break;
      case 'quiz':
        showView('topic');
        renderTopic(state.currentMonth, state.currentSection);
        break;
    }
  }

  // Render functions
  function renderDashboard() {
    $monthsGrid.innerHTML = CURRICULUM.months.map((month, idx) => {
      const unlocked = isMonthUnlocked(idx);
      const progress = getMonthProgress(month.id);
      const completed = progress === 100;

      let statusClass = '';
      if (completed) statusClass = 'completed';
      else if (!unlocked) statusClass = 'locked';

      return `
        <div class="month-card ${statusClass}" data-month-index="${idx}">
          <div class="month-number">Month ${month.number}</div>
          <div class="month-title">${month.title}</div>
          <div class="month-topics">${month.sections.length} topics</div>
          <div class="month-progress">
            <div class="month-progress-fill" style="width: ${progress}%"></div>
          </div>
        </div>
      `;
    }).join('');

    // Bind month card clicks
    document.querySelectorAll('.month-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.dataset.monthIndex);
        if (isMonthUnlocked(idx)) {
          state.currentMonth = CURRICULUM.months[idx];
          renderMonth(state.currentMonth);
          showView('month');
        }
      });
    });

    updateOverallProgress();
  }

  function renderMonth(month) {
    const monthIndex = CURRICULUM.months.indexOf(month);

    $headerTitle.textContent = `Month ${month.number}`;

    const $monthHeader = document.getElementById('month-header');
    $monthHeader.innerHTML = `
      <h2>${month.title}</h2>
      <p>${month.goal}</p>
    `;

    const $sectionsList = document.getElementById('sections-list');
    $sectionsList.innerHTML = month.sections.map((section, idx) => {
      const completed = isSectionCompleted(month.id, section.id);
      const unlocked = isSectionUnlocked(monthIndex, idx);

      let statusClass = '';
      let statusIcon = '→';
      if (completed) {
        statusClass = 'completed';
        statusIcon = '✓';
      } else if (!unlocked) {
        statusClass = 'locked';
        statusIcon = '🔒';
      }

      return `
        <div class="section-card ${statusClass}" data-section-index="${idx}">
          <div class="section-icon">${section.icon}</div>
          <div class="section-info">
            <h3>${section.title}</h3>
            <p>${section.summary}</p>
          </div>
          <div class="section-status">${statusIcon}</div>
        </div>
      `;
    }).join('');

    // Bind section card clicks
    document.querySelectorAll('.section-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.dataset.sectionIndex);
        const monthIndex = CURRICULUM.months.indexOf(month);
        if (isSectionUnlocked(monthIndex, idx)) {
          state.currentSection = month.sections[idx];
          renderTopic(month, state.currentSection);
          showView('topic');
        }
      });
    });
  }

  function renderTopic(month, section) {
    $headerTitle.textContent = section.title;

    const completed = isSectionCompleted(month.id, section.id);
    const hasQuiz = section.quiz && section.quiz.length > 0;

    const $topicContent = document.getElementById('topic-content');
    $topicContent.innerHTML = `
      ${section.content}
      ${hasQuiz && !completed ? `
        <button class="start-quiz-btn" id="start-quiz-btn">
          Take Quiz to Unlock Next Section
        </button>
      ` : ''}
      ${completed ? `
        <div class="focus-box" style="margin-top: 30px; border-left-color: var(--success);">
          <h4 style="color: var(--success);">✓ Section Completed</h4>
          <p>You've passed the quiz for this section. The next section is now unlocked.</p>
        </div>
      ` : ''}
    `;

    // Bind quiz button
    const quizBtn = document.getElementById('start-quiz-btn');
    if (quizBtn) {
      quizBtn.addEventListener('click', () => {
        startQuiz(month, section);
      });
    }
  }

  function startQuiz(month, section) {
    state.currentQuiz = section.quiz;
    state.quizIndex = 0;
    state.quizAnswers = [];

    $headerTitle.textContent = 'Quiz';
    renderQuizQuestion();
    showView('quiz');
  }

  function renderQuizQuestion() {
    const quiz = state.currentQuiz;
    const idx = state.quizIndex;
    const question = quiz[idx];
    const answered = state.quizAnswers[idx] !== undefined;

    const $quizContent = document.getElementById('quiz-content');
    $quizContent.innerHTML = `
      <div class="quiz-header">
        <h2>${state.currentSection.title}</h2>
        <div class="quiz-progress">Question ${idx + 1} of ${quiz.length}</div>
      </div>

      <div class="quiz-question">
        <h3>${question.question}</h3>
        <div class="quiz-options">
          ${question.options.map((opt, i) => {
            let optClass = 'quiz-option';
            if (answered) {
              if (i === question.correct) optClass += ' correct';
              else if (i === state.quizAnswers[idx] && i !== question.correct) optClass += ' incorrect';
            } else if (state.quizAnswers[idx] === i) {
              optClass += ' selected';
            }
            return `
              <button class="${optClass}" data-option="${i}" ${answered ? 'disabled' : ''}>
                ${opt}
              </button>
            `;
          }).join('')}
        </div>

        ${answered ? `
          <div class="quiz-feedback ${state.quizAnswers[idx] === question.correct ? 'correct' : 'incorrect'}">
            ${state.quizAnswers[idx] === question.correct ? '✓ Correct!' : '✗ Incorrect'} ${question.explanation}
          </div>
        ` : ''}
      </div>

      <div class="quiz-nav">
        ${answered ? `
          ${idx < quiz.length - 1 ? `
            <button class="btn-primary" id="next-question">Next Question</button>
          ` : `
            <button class="btn-primary" id="finish-quiz">See Results</button>
          `}
        ` : ''}
      </div>
    `;

    // Bind option clicks
    if (!answered) {
      document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => {
          const optionIdx = parseInt(btn.dataset.option);
          state.quizAnswers[idx] = optionIdx;
          renderQuizQuestion();
        });
      });
    }

    // Bind next/finish
    const nextBtn = document.getElementById('next-question');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        state.quizIndex++;
        renderQuizQuestion();
      });
    }

    const finishBtn = document.getElementById('finish-quiz');
    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        renderQuizResults();
      });
    }
  }

  function renderQuizResults() {
    const quiz = state.currentQuiz;
    const correct = state.quizAnswers.filter((ans, idx) => ans === quiz[idx].correct).length;
    const total = quiz.length;
    const score = Math.round((correct / total) * 100);
    const passed = score >= 70; // 70% to pass

    const $quizContent = document.getElementById('quiz-content');
    $quizContent.innerHTML = `
      <div class="quiz-results">
        <h2>${passed ? 'Congratulations!' : 'Keep Learning'}</h2>
        <div class="quiz-score ${passed ? 'passed' : 'failed'}">${score}%</div>
        <p class="quiz-message">
          ${passed
            ? 'You passed! The next section is now unlocked.'
            : 'You need 70% to pass. Review the material and try again.'}
        </p>
        <p style="color: var(--text-muted); margin-bottom: 20px;">
          ${correct} of ${total} questions correct
        </p>
        <div class="quiz-nav">
          ${!passed ? `
            <button class="btn-secondary" id="retry-quiz">Try Again</button>
          ` : ''}
          <button class="btn-primary" id="continue-btn">
            ${passed ? 'Continue' : 'Review Material'}
          </button>
        </div>
      </div>
    `;

    if (passed) {
      markSectionCompleted(state.currentMonth.id, state.currentSection.id);
    }

    // Bind buttons
    const retryBtn = document.getElementById('retry-quiz');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        startQuiz(state.currentMonth, state.currentSection);
      });
    }

    const continueBtn = document.getElementById('continue-btn');
    continueBtn.addEventListener('click', () => {
      if (passed) {
        // Go to next section or month
        const monthIndex = CURRICULUM.months.indexOf(state.currentMonth);
        const sectionIndex = state.currentMonth.sections.indexOf(state.currentSection);

        if (sectionIndex < state.currentMonth.sections.length - 1) {
          // Next section in same month
          state.currentSection = state.currentMonth.sections[sectionIndex + 1];
          renderTopic(state.currentMonth, state.currentSection);
          showView('topic');
        } else if (monthIndex < CURRICULUM.months.length - 1) {
          // Next month
          state.currentMonth = CURRICULUM.months[monthIndex + 1];
          renderMonth(state.currentMonth);
          showView('month');
        } else {
          // Course complete!
          showView('dashboard');
          renderDashboard();
        }
      } else {
        // Back to topic to review
        renderTopic(state.currentMonth, state.currentSection);
        showView('topic');
      }
    });
  }

  function showProgressModal() {
    const $details = document.getElementById('progress-details');
    $details.innerHTML = CURRICULUM.months.map(month => {
      const progress = getMonthProgress(month.id);
      const completed = month.sections.filter(s => isSectionCompleted(month.id, s.id)).length;
      const total = month.sections.length;

      return `
        <div class="progress-month">
          <span class="progress-month-name">${month.icon} Month ${month.number}</span>
          <span class="progress-month-status">${completed}/${total} (${progress}%)</span>
        </div>
      `;
    }).join('');

    $progressModal.classList.remove('hidden');
  }

  function hideProgressModal() {
    $progressModal.classList.add('hidden');
  }

  // Start the app
  init();
})();
