// AI Engineering Roadmap - Full Curriculum Data
const CURRICULUM = {
  title: "AI Engineering Roadmap",
  subtitle: "6 months from zero to hireable",
  months: [
    {
      id: "month-1",
      number: 1,
      title: "Coding Fundamentals",
      goal: "Build the technical foundation. Write code, use the terminal, talk to APIs, and build a simple web backend.",
      icon: "🐍",
      sections: [
        {
          id: "python-basics",
          title: "Python Basics",
          icon: "🐍",
          summary: "Variables, loops, functions, classes",
          content: `
            <h2>Python Basics</h2>
            <p>Python is the language of AI engineering. It's readable, has the best ML libraries, and is what every AI company uses.</p>
            <p>You don't need to be an expert. You need to be dangerous enough to read code, write scripts, and debug errors without getting stuck for hours.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Free Course</span>
              <a href="https://www.codecademy.com/learn/learn-python-3" target="_blank">Codecademy: Learn Python 3</a>
              <p>Interactive browser-based learning. No setup required. The best starting point if you've never coded before.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Free Course</span>
              <a href="https://www.learnpython.org/" target="_blank">LearnPython.org Interactive Tutorial</a>
              <p>Hands-on exercises covering fundamentals through advanced topics like decorators and generators.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Official Docs</span>
              <a href="https://docs.python.org/3/tutorial/" target="_blank">Python Official Tutorial</a>
              <p>Comprehensive reference from the source. Keep it bookmarked.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Variables, data types, control flow (if/else, loops), functions, classes, list comprehensions, error handling with try/except, and working with files.</p>
            </div>

            <div class="medical-box">
              <h4>Medical AI Example</h4>
              <p>A Python script that calculates GFR from creatinine, age, and sex. Or one that parses a CSV of vital signs and flags abnormal values. These are real tasks you'd automate in a clinical setting.</p>
            </div>
          `,
          quiz: [
            {
              question: "What is the correct way to define a function in Python?",
              options: ["function myFunc():", "def myFunc():", "fn myFunc():", "func myFunc():"],
              correct: 1,
              explanation: "Python uses 'def' to define functions, followed by the function name and parentheses."
            },
            {
              question: "Which data structure would you use to store key-value pairs?",
              options: ["List", "Tuple", "Dictionary", "Set"],
              correct: 2,
              explanation: "Dictionaries store key-value pairs and are fundamental for working with JSON data in AI applications."
            },
            {
              question: "What does 'try/except' do in Python?",
              options: ["Loops through items", "Handles errors gracefully", "Defines a class", "Imports modules"],
              correct: 1,
              explanation: "try/except blocks catch and handle errors without crashing your program - critical for robust AI apps."
            }
          ]
        },
        {
          id: "git-version-control",
          title: "Git & Version Control",
          icon: "📦",
          summary: "Track changes, collaborate, push code",
          content: `
            <h2>Git & Version Control</h2>
            <p>Git is how real software gets built. Every AI company uses it. If you can't use Git, you can't collaborate.</p>
            <p>Don't overthink it. Learn the basics: clone, commit, push, pull, branch. That covers 95% of what you'll do daily.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Interactive</span>
              <a href="https://learngitbranching.js.org/" target="_blank">Learn Git Branching</a>
              <p>Visual, interactive game that teaches branching and merging. The best way to build intuition.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Free Course</span>
              <a href="https://www.codecademy.com/learn/learn-git" target="_blank">Codecademy: Learn Git</a>
              <p>Hands-on Git fundamentals with guided exercises.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Reference</span>
              <a href="https://docs.github.com/en/get-started" target="_blank">GitHub Docs: Getting Started</a>
              <p>Official GitHub documentation. Covers repositories, pull requests, and collaboration.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>git init, clone, add, commit, push, pull, branch, merge, and resolving basic conflicts. Know how to create a .gitignore file.</p>
            </div>

            <div class="practice-box">
              <h4>Practice Project</h4>
              <p>Create a GitHub account. Make a repository. Push your Python practice code to it. This is your portfolio starting point.</p>
            </div>
          `,
          quiz: [
            {
              question: "What command saves your changes locally before pushing?",
              options: ["git push", "git save", "git commit", "git upload"],
              correct: 2,
              explanation: "git commit saves changes to your local repository. git push then sends them to the remote."
            },
            {
              question: "What file tells Git which files to ignore?",
              options: [".gitconfig", ".gitignore", ".gitskip", "ignore.txt"],
              correct: 1,
              explanation: ".gitignore lists files and patterns that Git should not track - essential for API keys and large data files."
            }
          ]
        },
        {
          id: "cli-terminal",
          title: "CLI & Terminal",
          icon: "💻",
          summary: "Navigate, run scripts, manage files",
          content: `
            <h2>CLI & Terminal</h2>
            <p>The command line is where real work happens. GUIs are fine for browsing, but you can't automate clicks. You can automate commands.</p>
            <p>AI engineering involves running scripts, managing servers, debugging deployments. All of that happens in the terminal.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Free Course</span>
              <a href="https://www.codecademy.com/learn/learn-the-command-line" target="_blank">Codecademy: Learn the Command Line</a>
              <p>Interactive course covering navigation, manipulation, redirection, and environment setup.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Free Tutorial</span>
              <a href="https://ubuntu.com/tutorials/command-line-for-beginners" target="_blank">Ubuntu: Command Line for Beginners</a>
              <p>Practical tutorial for Linux/Mac terminal basics.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>cd, ls, mkdir, rm, cp, mv, cat, grep, pipes (|), environment variables, running Python scripts from terminal, and using pip to install packages.</p>
            </div>
          `,
          quiz: [
            {
              question: "What command lists files in the current directory?",
              options: ["dir", "list", "ls", "show"],
              correct: 2,
              explanation: "ls lists directory contents. Use 'ls -la' to see hidden files and details."
            },
            {
              question: "How do you install a Python package from the command line?",
              options: ["python install package", "pip install package", "npm install package", "apt install package"],
              correct: 1,
              explanation: "pip is Python's package manager. 'pip install openai' installs the OpenAI library, for example."
            }
          ]
        },
        {
          id: "apis-http",
          title: "APIs & HTTP",
          icon: "🌐",
          summary: "Talk to external services, handle JSON",
          content: `
            <h2>APIs & HTTP</h2>
            <p>Every LLM is accessed through an API. You send a request with your prompt, you get a response with the completion. That's it.</p>
            <p>Understanding HTTP requests and JSON is non-negotiable. This is how your code talks to the world.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Free Course</span>
              <a href="https://www.codecademy.com/learn/learn-apis" target="_blank">Codecademy: Learn APIs</a>
              <p>Covers REST, requests, responses, and authentication patterns.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Documentation</span>
              <a href="https://requests.readthedocs.io/en/latest/" target="_blank">Python Requests Library</a>
              <p>The standard library for making HTTP requests in Python. Simple, elegant, essential.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Free Guide</span>
              <a href="https://realpython.com/api-integration-in-python/" target="_blank">Real Python: API Integration</a>
              <p>Practical guide to consuming APIs with Python, including authentication and error handling.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>GET vs POST requests, JSON parsing, authentication (API keys, Bearer tokens), status codes (200, 400, 401, 500), and error handling for network failures.</p>
            </div>

            <div class="medical-box">
              <h4>Medical AI Example</h4>
              <p>Building a script that calls an LLM API to summarize a discharge summary. Or one that queries a drug interaction API. Real clinical workflows are API calls chained together.</p>
            </div>
          `,
          quiz: [
            {
              question: "What HTTP method is typically used to send data to create a new resource?",
              options: ["GET", "POST", "DELETE", "FETCH"],
              correct: 1,
              explanation: "POST sends data to create resources. GET retrieves data. This is fundamental for all API work."
            },
            {
              question: "What does a 401 status code mean?",
              options: ["Success", "Not found", "Unauthorized", "Server error"],
              correct: 2,
              explanation: "401 means your API key is wrong or missing. You'll see this a lot when debugging LLM API calls."
            },
            {
              question: "What format do most modern APIs use for data exchange?",
              options: ["XML", "JSON", "CSV", "HTML"],
              correct: 1,
              explanation: "JSON is the standard. Every LLM API returns JSON. Learn to parse it fluently."
            }
          ]
        },
        {
          id: "sql-databases",
          title: "SQL & Databases",
          icon: "🗃️",
          summary: "Store, query, and retrieve data",
          content: `
            <h2>SQL & Databases</h2>
            <p>AI apps need data. Logs, user conversations, embeddings, document metadata - all of it lives in databases.</p>
            <p>You don't need to be a DBA. You need to write basic queries, design simple schemas, and not corrupt your data.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Interactive</span>
              <a href="https://sqlbolt.com/" target="_blank">SQLBolt</a>
              <p>Interactive SQL lessons with hands-on exercises. The fastest way to learn SQL basics.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Free Course</span>
              <a href="https://www.codecademy.com/learn/learn-sql" target="_blank">Codecademy: Learn SQL</a>
              <p>Comprehensive SQL fundamentals with guided practice.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Documentation</span>
              <a href="https://www.sqlalchemy.org/docs/" target="_blank">SQLAlchemy Docs</a>
              <p>Python's standard ORM. Learn to use it with FastAPI for real applications.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>SELECT, INSERT, UPDATE, DELETE, JOINs, WHERE clauses, indexes, and connecting to SQLite or PostgreSQL from Python.</p>
            </div>
          `,
          quiz: [
            {
              question: "What SQL clause filters which rows are returned?",
              options: ["SELECT", "FROM", "WHERE", "ORDER BY"],
              correct: 2,
              explanation: "WHERE filters rows based on conditions. Essential for querying specific data."
            },
            {
              question: "What type of JOIN returns only matching rows from both tables?",
              options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "OUTER JOIN"],
              correct: 2,
              explanation: "INNER JOIN returns only rows that have matches in both tables."
            }
          ]
        },
        {
          id: "fastapi-basics",
          title: "FastAPI",
          icon: "⚡",
          summary: "Build web APIs in Python",
          content: `
            <h2>FastAPI</h2>
            <p>FastAPI is the modern Python web framework. It's fast, has automatic docs, handles async natively, and is what most AI apps are built on.</p>
            <p>By the end of this section, you should be able to build a simple API that accepts a request and returns a response.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Official Docs</span>
              <a href="https://fastapi.tiangolo.com/tutorial/" target="_blank">FastAPI Tutorial</a>
              <p>The official tutorial is excellent. Work through it start to finish.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Free Course</span>
              <a href="https://www.youtube.com/watch?v=0RS9W8MtZe4" target="_blank">freeCodeCamp: FastAPI Course</a>
              <p>19-hour comprehensive course covering everything from basics to deployment.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Defining routes, handling request/response bodies with Pydantic, query parameters, path parameters, async endpoints, and automatic OpenAPI docs.</p>
            </div>

            <div class="practice-box">
              <h4>Month 1 Capstone Project</h4>
              <p>Build a simple REST API that stores and retrieves notes. It should have endpoints to create a note (POST), get all notes (GET), and get a single note by ID. Store data in SQLite. Deploy it somewhere free (Railway, Render, or fly.io).</p>
            </div>

            <div class="milestone-box">
              <h4>Month 1 Milestone</h4>
              <ul>
                <li>Write Python scripts that parse data and call APIs</li>
                <li>Use Git to version control your code</li>
                <li>Navigate the terminal and run scripts from command line</li>
                <li>Make HTTP requests and parse JSON responses</li>
                <li>Query a database with basic SQL</li>
                <li>Build a simple FastAPI backend</li>
              </ul>
            </div>
          `,
          quiz: [
            {
              question: "What decorator defines a GET endpoint in FastAPI?",
              options: ["@app.route('/path')", "@app.get('/path')", "@get('/path')", "@endpoint('/path')"],
              correct: 1,
              explanation: "FastAPI uses @app.get(), @app.post(), etc. to define HTTP method-specific routes."
            },
            {
              question: "What library does FastAPI use for data validation?",
              options: ["Marshmallow", "Cerberus", "Pydantic", "Voluptuous"],
              correct: 2,
              explanation: "Pydantic is FastAPI's foundation for request/response validation. You'll use it constantly."
            },
            {
              question: "What does FastAPI generate automatically at /docs?",
              options: ["Error logs", "Database schema", "Interactive API documentation", "Test results"],
              correct: 2,
              explanation: "FastAPI auto-generates Swagger/OpenAPI docs. This is huge for testing and sharing your API."
            }
          ]
        }
      ]
    },
    {
      id: "month-2",
      number: 2,
      title: "LLM App Development",
      goal: "Master LLM APIs. Write prompts that work, get structured data out, handle tools, stream responses, and build reliable apps.",
      icon: "🤖",
      sections: [
        {
          id: "llm-apis",
          title: "LLM APIs",
          icon: "🔌",
          summary: "OpenAI, Anthropic, and others",
          content: `
            <h2>LLM APIs</h2>
            <p>The OpenAI and Anthropic APIs are where AI engineering begins. Every technique you'll learn builds on these foundational skills.</p>
            <p>You're not just making API calls - you're learning to control powerful language models programmatically.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Official Docs</span>
              <a href="https://platform.openai.com/docs/quickstart" target="_blank">OpenAI Quickstart</a>
              <p>Get your API key and make your first call. Start here.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Official Docs</span>
              <a href="https://docs.anthropic.com/en/docs/quickstart" target="_blank">Anthropic Quickstart</a>
              <p>Claude API setup. Similar patterns to OpenAI but with some key differences.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Free Course</span>
              <a href="https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" target="_blank">DeepLearning.AI: Prompt Engineering for Developers</a>
              <p>Andrew Ng's course on prompt engineering fundamentals.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Authentication, making chat completion requests, understanding the messages array format, model selection (GPT-4 vs GPT-3.5, Claude Sonnet vs Haiku), and reading the response object.</p>
            </div>

            <div class="medical-box">
              <h4>Medical AI Example</h4>
              <p>A script that takes a patient's chief complaint and generates a differential diagnosis list. Or one that summarizes a clinical note into SOAP format. Real clinical decision support starts here.</p>
            </div>
          `,
          quiz: [
            {
              question: "What format does the OpenAI chat API expect for conversation history?",
              options: ["Plain text string", "Array of message objects with role and content", "JSON with 'prompt' key", "Base64 encoded"],
              correct: 1,
              explanation: "Chat APIs use an array of {role, content} objects. Roles are 'system', 'user', and 'assistant'."
            },
            {
              question: "What's the primary difference between GPT-4 and GPT-3.5?",
              options: ["Speed only", "Cost only", "Reasoning capability and cost", "Language support"],
              correct: 2,
              explanation: "GPT-4 is smarter but more expensive. Choose based on task complexity and budget."
            }
          ]
        },
        {
          id: "prompting",
          title: "Prompting Techniques",
          icon: "✍️",
          summary: "System prompts, few-shot, chain-of-thought",
          content: `
            <h2>Prompting Techniques</h2>
            <p>Prompting is the core skill of AI engineering. The same model can be useless or exceptional depending entirely on how you prompt it.</p>
            <p>This isn't about clever tricks. It's about clear communication with a probabilistic system.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Official Guide</span>
              <a href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" target="_blank">Anthropic: Prompt Engineering Guide</a>
              <p>The most comprehensive guide to prompting. Read it multiple times.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Official Guide</span>
              <a href="https://platform.openai.com/docs/guides/prompt-engineering" target="_blank">OpenAI: Prompt Engineering Guide</a>
              <p>OpenAI's official best practices for effective prompts.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Free Resource</span>
              <a href="https://www.promptingguide.ai/" target="_blank">Prompting Guide</a>
              <p>Community-maintained guide with examples of every technique.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>System prompts for persona/behavior, few-shot examples for consistency, chain-of-thought for reasoning tasks, clear formatting instructions, and iterating on prompts based on failures.</p>
            </div>

            <div class="practice-box">
              <h4>Practice</h4>
              <p>Take one task (e.g., "summarize an article") and write 5 different prompts for it. Compare the outputs. Notice what makes some better than others.</p>
            </div>
          `,
          quiz: [
            {
              question: "What is the purpose of a system prompt?",
              options: ["To fix errors", "To set the model's persona and behavior rules", "To increase speed", "To reduce cost"],
              correct: 1,
              explanation: "System prompts define how the model should behave - its role, constraints, and output format."
            },
            {
              question: "What is 'few-shot prompting'?",
              options: ["Using fewer tokens", "Providing examples of desired input/output pairs", "Making fewer API calls", "Using a smaller model"],
              correct: 1,
              explanation: "Few-shot prompting shows the model examples of what you want. It's powerful for format consistency."
            },
            {
              question: "When should you use chain-of-thought prompting?",
              options: ["For simple lookups", "For tasks requiring multi-step reasoning", "For faster responses", "For shorter outputs"],
              correct: 1,
              explanation: "Chain-of-thought ('think step by step') improves accuracy on reasoning tasks by making the model show its work."
            }
          ]
        },
        {
          id: "structured-outputs",
          title: "Structured Outputs",
          icon: "📋",
          summary: "JSON mode, Pydantic, Instructor",
          content: `
            <h2>Structured Outputs</h2>
            <p>Real applications need structured data, not prose. You need JSON that matches a schema, not "Here's a summary..."</p>
            <p>Instructor + Pydantic is the gold standard for getting reliable structured output from any LLM.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Library</span>
              <a href="https://python.useinstructor.com/" target="_blank">Instructor Library</a>
              <p>The best library for structured LLM outputs. Uses Pydantic for validation with automatic retries.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Official Docs</span>
              <a href="https://platform.openai.com/docs/guides/structured-outputs" target="_blank">OpenAI: Structured Outputs</a>
              <p>Native JSON mode in the API. Guarantees valid JSON matching your schema.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Documentation</span>
              <a href="https://docs.pydantic.dev/latest/" target="_blank">Pydantic Docs</a>
              <p>Data validation library that powers structured outputs. Learn it well.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Defining Pydantic models for your output schema, using Instructor for guaranteed JSON, handling validation errors, and designing schemas that are easy for the model to fill.</p>
            </div>

            <div class="medical-box">
              <h4>Medical AI Example</h4>
              <p>Extract structured data from a clinical note: {chief_complaint: str, vitals: {bp: str, hr: int, temp: float}, assessment: str, plan: list[str]}. This is how you build EMR integrations.</p>
            </div>
          `,
          quiz: [
            {
              question: "What library combines Pydantic with LLMs for reliable structured output?",
              options: ["Langchain", "Instructor", "Transformers", "FastAPI"],
              correct: 1,
              explanation: "Instructor wraps LLM calls with Pydantic validation and automatic retries for failed parsing."
            },
            {
              question: "Why use structured outputs instead of parsing free text?",
              options: ["It's faster", "It's cheaper", "It guarantees a consistent, parseable format", "It uses fewer tokens"],
              correct: 2,
              explanation: "Structured outputs ensure your code can reliably process the response without brittle text parsing."
            }
          ]
        },
        {
          id: "tool-calling",
          title: "Tool Calling",
          icon: "🔧",
          summary: "Let the model call your functions",
          content: `
            <h2>Tool Calling (Function Calling)</h2>
            <p>Tool calling is what makes LLMs actually useful. Instead of just generating text, the model can decide to call your functions - search a database, call an API, run a calculation.</p>
            <p>This is the foundation of agents, but you don't need agents to use tools effectively.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Official Docs</span>
              <a href="https://platform.openai.com/docs/guides/function-calling" target="_blank">OpenAI: Function Calling</a>
              <p>The complete guide to defining and handling tool calls.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Official Docs</span>
              <a href="https://docs.anthropic.com/en/docs/build-with-claude/tool-use" target="_blank">Anthropic: Tool Use</a>
              <p>Claude's approach to tools. Similar concepts, different implementation details.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Defining tool schemas (name, description, parameters), handling tool call responses, executing the function and returning results, and multi-turn conversations with tool use.</p>
            </div>

            <div class="medical-box">
              <h4>Medical AI Example</h4>
              <p>A clinical assistant that can: lookup_drug_interactions(drug1, drug2), calculate_gfr(creatinine, age, sex), search_guidelines(topic). The model decides when to call each based on the conversation.</p>
            </div>
          `,
          quiz: [
            {
              question: "What does the model return when it wants to use a tool?",
              options: ["The tool's output directly", "A tool call object with name and arguments", "An error message", "A URL to the tool"],
              correct: 1,
              explanation: "The model returns a tool call with the function name and arguments. Your code executes it and returns the result."
            },
            {
              question: "Why are good tool descriptions important?",
              options: ["For documentation only", "The model uses them to decide when to call each tool", "They reduce cost", "They're required by the API"],
              correct: 1,
              explanation: "The model reads your tool descriptions to understand when and how to use each tool. Vague descriptions = wrong tool choices."
            }
          ]
        },
        {
          id: "streaming",
          title: "Streaming Responses",
          icon: "🌊",
          summary: "Real-time token delivery",
          content: `
            <h2>Streaming Responses</h2>
            <p>LLM calls are slow. Streaming shows tokens as they're generated instead of waiting for the complete response.</p>
            <p>This is table stakes for any user-facing AI application. Nobody wants to stare at a spinner for 10 seconds.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Official Docs</span>
              <a href="https://platform.openai.com/docs/api-reference/streaming" target="_blank">OpenAI: Streaming</a>
              <p>How to enable and handle streaming responses.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Tutorial</span>
              <a href="https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb" target="_blank">OpenAI Cookbook: Streaming</a>
              <p>Practical examples of streaming with different frameworks.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Enabling streaming in API calls, handling Server-Sent Events (SSE), building a FastAPI streaming endpoint, and displaying streaming output in a frontend.</p>
            </div>
          `,
          quiz: [
            {
              question: "What's the main benefit of streaming LLM responses?",
              options: ["Reduces cost", "Faster total generation", "Better perceived latency - users see output immediately", "More accurate responses"],
              correct: 2,
              explanation: "Streaming doesn't make generation faster, but users see the first token in ~200ms instead of waiting 5-10 seconds."
            }
          ]
        },
        {
          id: "conversation-state",
          title: "Conversation State",
          icon: "💬",
          summary: "Managing multi-turn context",
          content: `
            <h2>Conversation State</h2>
            <p>LLMs are stateless. Every API call is independent. To have a "conversation," you must send the full history every time.</p>
            <p>Managing this history - what to keep, what to summarize, what to drop - is critical for any chat application.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Official Docs</span>
              <a href="https://platform.openai.com/docs/guides/conversation-state" target="_blank">OpenAI: Managing Conversation State</a>
              <p>Official patterns for handling multi-turn conversations.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>The messages array structure, storing conversation history (in-memory, database, Redis), context window limits and what happens when you exceed them, summarization strategies for long conversations.</p>
            </div>
          `,
          quiz: [
            {
              question: "Why do you need to send conversation history with each API call?",
              options: ["For billing", "LLMs are stateless - they don't remember previous calls", "To reduce latency", "For security"],
              correct: 1,
              explanation: "Each API call is independent. The model has no memory of previous calls unless you include that context."
            },
            {
              question: "What happens when conversation history exceeds the context window?",
              options: ["The API automatically summarizes", "The request fails or oldest messages are truncated", "Cost increases exponentially", "The model switches to a larger version"],
              correct: 1,
              explanation: "You must manage context size. Either truncate old messages or summarize them to stay within limits."
            }
          ]
        },
        {
          id: "cost-management",
          title: "Cost Management",
          icon: "💰",
          summary: "Tokens, pricing, optimization",
          content: `
            <h2>Cost Management</h2>
            <p>LLM APIs charge per token. A careless prompt can cost 100x what a thoughtful one does.</p>
            <p>Understanding token economics is essential for building sustainable applications.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Official</span>
              <a href="https://openai.com/pricing" target="_blank">OpenAI Pricing</a>
              <p>Current pricing for all OpenAI models.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Tool</span>
              <a href="https://github.com/openai/tiktoken" target="_blank">Tiktoken</a>
              <p>Count tokens before sending requests. Essential for cost estimation.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Input vs output token costs, using tiktoken to count tokens, choosing the right model for each task (don't use GPT-4 for everything), caching to avoid repeated calls, and setting spending limits.</p>
            </div>
          `,
          quiz: [
            {
              question: "Which typically costs more per token?",
              options: ["Input tokens", "Output tokens", "They cost the same", "Neither - it's per request"],
              correct: 1,
              explanation: "Output tokens are usually 2-4x more expensive than input tokens. Keep outputs concise."
            }
          ]
        },
        {
          id: "error-handling",
          title: "Failure Handling",
          icon: "🛡️",
          summary: "Retries, fallbacks, graceful degradation",
          content: `
            <h2>Failure Handling</h2>
            <p>LLM APIs fail. Rate limits, timeouts, malformed responses, unexpected outputs. Your app needs to handle all of it.</p>
            <p>The difference between a demo and a product is how it behaves when things go wrong.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Library</span>
              <a href="https://github.com/jd/tenacity" target="_blank">Tenacity</a>
              <p>Retry library with exponential backoff. One decorator and your retries are handled.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Guide</span>
              <a href="https://platform.openai.com/docs/guides/rate-limits" target="_blank">OpenAI: Rate Limits</a>
              <p>Understanding and handling rate limit errors.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Rate limit errors (429) and exponential backoff, timeout handling, validating model output before using it, fallback strategies (retry with different model, return cached response), and never crashing because of unexpected output.</p>
            </div>
          `,
          quiz: [
            {
              question: "What HTTP status code indicates rate limiting?",
              options: ["400", "401", "429", "500"],
              correct: 2,
              explanation: "429 means 'Too Many Requests'. Implement exponential backoff when you see it."
            },
            {
              question: "What's the best strategy when an LLM API call fails?",
              options: ["Crash immediately", "Retry once then give up", "Exponential backoff with fallback options", "Ignore the error"],
              correct: 2,
              explanation: "Exponential backoff (wait longer between retries) plus fallbacks (cheaper model, cached response) is the robust approach."
            }
          ]
        },
        {
          id: "prompt-injection",
          title: "Prompt Injection",
          icon: "🔐",
          summary: "Security awareness for LLM apps",
          content: `
            <h2>Prompt Injection Awareness</h2>
            <p>Prompt injection is the #1 security risk in LLM applications.</p>
            <p>It happens when untrusted user input is combined with system instructions, allowing a user to alter, override, or inject new behavior into the prompt.</p>
            <p>You don't need to be a security expert, but you need to know this exists before you ship anything.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Security</span>
              <a href="https://genai.owasp.org/llmrisk/llm01-prompt-injection/" target="_blank">OWASP Top 10 for LLM Apps: Prompt Injection</a>
              <p>The authoritative classification of injection attacks.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Cheat Sheet</span>
              <a href="https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html" target="_blank">OWASP: Prompt Injection Prevention</a>
              <p>Practical defensive patterns: input validation, privilege control, output validation.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Guide</span>
              <a href="https://www.evidentlyai.com/llm-guide/prompt-injection-llm" target="_blank">Evidently AI: What is Prompt Injection</a>
              <p>Developer-focused explainer on attack types and mitigation.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>The difference between direct and indirect injection, why system prompts aren't truly "secure", principle of least privilege for tool access, and never trusting unvalidated LLM output to make consequential decisions automatically.</p>
            </div>

            <div class="milestone-box">
              <h4>Month 2 Milestone</h4>
              <ul>
                <li>Write prompts that produce consistent, reliable outputs</li>
                <li>Get structured JSON data using Pydantic + Instructor</li>
                <li>Wire up tool calling so a model can call your functions</li>
                <li>Stream responses through a FastAPI endpoint</li>
                <li>Manage multi-turn conversation history properly</li>
                <li>Estimate token cost before sending a request</li>
                <li>Handle API errors without crashing</li>
                <li>Explain prompt injection and apply basic defenses</li>
              </ul>
            </div>
          `,
          quiz: [
            {
              question: "What is prompt injection?",
              options: ["A way to speed up prompts", "When user input manipulates the model's behavior by overriding instructions", "A caching technique", "A type of API authentication"],
              correct: 1,
              explanation: "Prompt injection is when malicious input tricks the model into ignoring its instructions or doing something unintended."
            },
            {
              question: "What's the best defense against prompt injection?",
              options: ["Longer system prompts", "Multiple layers: input validation, output validation, least privilege", "Using a newer model", "Encryption"],
              correct: 1,
              explanation: "Defense in depth: validate inputs, validate outputs, limit what the model can actually do (tools, permissions)."
            }
          ]
        }
      ]
    },
    {
      id: "month-3",
      number: 3,
      title: "RAG (Retrieval)",
      goal: "Build systems that let LLMs answer questions from your documents, not just from training data.",
      icon: "📚",
      sections: [
        {
          id: "embeddings",
          title: "Embeddings",
          icon: "🧮",
          summary: "Text to vectors for semantic search",
          content: `
            <h2>Embeddings</h2>
            <p>Before you can build a RAG system, you need to understand what embeddings actually are - they're the foundation everything else is built on.</p>
            <p>A text embedding is a piece of text projected into a high-dimensional vector space. Similar text ends up close together - which is what makes semantic search possible.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Best Intro</span>
              <a href="https://stackoverflow.blog/2023/11/09/an-intuitive-introduction-to-text-embeddings/" target="_blank">Stack Overflow: Intuitive Introduction to Embeddings</a>
              <p>The best beginner explanation, focused on building intuition rather than math.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Free Course</span>
              <a href="https://developers.google.com/machine-learning/crash-course/embeddings" target="_blank">Google ML Crash Course: Embeddings</a>
              <p>Why dense vectors solve problems that one-hot encoding can't.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Hands-On</span>
              <a href="https://huggingface.co/blog/getting-started-with-embeddings" target="_blank">HuggingFace: Getting Started With Embeddings</a>
              <p>Generate embeddings using sentence-transformers and build semantic search.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Official Docs</span>
              <a href="https://platform.openai.com/docs/guides/embeddings" target="_blank">OpenAI Embeddings Guide</a>
              <p>Reference for text-embedding-3-small and text-embedding-3-large.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>What a vector is conceptually, why similar text produces similar vectors, how cosine similarity works, the difference between embedding models (OpenAI vs HuggingFace), and what embedding dimension means.</p>
            </div>

            <div class="practice-box">
              <h4>Practice</h4>
              <p>Take 20 sentences on related topics, embed them using OpenAI or sentence-transformers, and write a simple nearest-neighbor search that returns the 3 most similar to a query. This is the heart of RAG in miniature.</p>
            </div>

            <div class="medical-box">
              <h4>Medical AI Example</h4>
              <p>Embed clinical guidelines, then find the most relevant sections when a user asks "What's the first-line treatment for community-acquired pneumonia?" This is how you build evidence-based clinical decision support.</p>
            </div>
          `,
          quiz: [
            {
              question: "What is a text embedding?",
              options: ["A compressed version of text", "Text converted to a vector of numbers where similar text has similar vectors", "An encrypted version of text", "A summary of text"],
              correct: 1,
              explanation: "Embeddings map text to vectors where semantic similarity = vector proximity. This enables semantic search."
            },
            {
              question: "What similarity metric is most commonly used for comparing embeddings?",
              options: ["Euclidean distance", "Manhattan distance", "Cosine similarity", "Hamming distance"],
              correct: 2,
              explanation: "Cosine similarity measures the angle between vectors, making it robust to vector magnitude differences."
            }
          ]
        },
        {
          id: "chunking",
          title: "Chunking",
          icon: "✂️",
          summary: "Breaking documents for embedding",
          content: `
            <h2>Chunking</h2>
            <p>Your documents are too large to embed as a whole. Chunking is breaking them into smaller pieces before embedding.</p>
            <p>How you chunk directly affects retrieval quality. Even a perfect search fails if it searches over poorly prepared data.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Best Guide</span>
              <a href="https://weaviate.io/blog/chunking-strategies-for-rag" target="_blank">Weaviate: Chunking Strategies for RAG</a>
              <p>Fixed-size, recursive, and semantic chunking with guidance on when to use each.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Deep Dive</span>
              <a href="https://unstructured.io/blog/chunking-for-rag-best-practices" target="_blank">Unstructured: Chunking Best Practices</a>
              <p>Technical deep-dive on chunk sizes, overlap, and embedding context windows.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Official Docs</span>
              <a href="https://python.langchain.com/docs/concepts/text_splitters/" target="_blank">LangChain Text Splitters</a>
              <p>Practical reference for RecursiveCharacterTextSplitter and others.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Fixed-size chunking with overlap as baseline, recursive chunking for structured docs, semantic chunking for better boundaries. Trade-off: too large = poor retrieval precision, too small = lost context.</p>
            </div>

            <div class="practice-box">
              <h4>Beginner Tip</h4>
              <p>Start with RecursiveCharacterTextSplitter with chunk_size=500 and chunk_overlap=50. This is the sensible default for most documents.</p>
            </div>
          `,
          quiz: [
            {
              question: "Why do we use chunk overlap?",
              options: ["To increase storage", "To avoid losing context at chunk boundaries", "To make embedding faster", "To reduce costs"],
              correct: 1,
              explanation: "Overlap ensures important information at the edge of one chunk appears in the next one too."
            },
            {
              question: "What's the trade-off with chunk size?",
              options: ["Bigger = faster, smaller = slower", "Bigger = cheaper, smaller = expensive", "Bigger = less precise retrieval, smaller = less context", "No trade-off exists"],
              correct: 2,
              explanation: "Large chunks have more context but are harder to retrieve precisely. Small chunks retrieve precisely but may miss context."
            }
          ]
        },
        {
          id: "vector-databases",
          title: "Vector Databases",
          icon: "🗄️",
          summary: "Store and search embeddings",
          content: `
            <h2>Vector Databases</h2>
            <p>Once you have embeddings, you need somewhere to store and search them efficiently.</p>
            <p>Use Chroma for prototyping, Pinecone for managed scale, Qdrant for self-hosting, pgvector if you're already on PostgreSQL.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Prototyping</span>
              <a href="https://docs.trychroma.com/" target="_blank">Chroma Docs</a>
              <p>Perfect for development. Runs in-memory or locally with no infrastructure.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Learning</span>
              <a href="https://www.pinecone.io/learn/" target="_blank">Pinecone Learning Center</a>
              <p>Excellent free tutorials on vector search concepts.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Production</span>
              <a href="https://qdrant.tech/documentation/" target="_blank">Qdrant Documentation</a>
              <p>Best open-source option for production with advanced filtering.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">PostgreSQL</span>
              <a href="https://github.com/pgvector/pgvector" target="_blank">pgvector</a>
              <p>Add vector search to your existing PostgreSQL database.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Creating a collection, inserting embeddings with metadata, querying by similarity with top_k, and filtering by metadata. You don't need to understand HNSW or IVF indexing - just how to use them.</p>
            </div>

            <div class="practice-box">
              <h4>Practice Project</h4>
              <p>Index 50-100 pages from public documentation into Chroma with metadata (source URL, section title). Write a query function that retrieves the 5 most relevant chunks for any question.</p>
            </div>
          `,
          quiz: [
            {
              question: "Which vector database is best for quick local prototyping?",
              options: ["Pinecone", "Chroma", "pgvector", "Weaviate"],
              correct: 1,
              explanation: "Chroma runs in-memory with no setup. Perfect for development and testing."
            },
            {
              question: "What does 'top_k' mean in vector search?",
              options: ["The number of tokens to use", "Return the k most similar results", "The embedding dimension", "The chunk size"],
              correct: 1,
              explanation: "top_k specifies how many of the most similar results to return from your search."
            }
          ]
        },
        {
          id: "metadata-filtering",
          title: "Metadata Filtering",
          icon: "🏷️",
          summary: "Constrain search by attributes",
          content: `
            <h2>Metadata Filtering</h2>
            <p>Raw similarity search alone isn't enough. Metadata filtering lets you constrain retrieval by date, source, category, or any attribute you store alongside each chunk.</p>
            <p>This is what makes the difference between a demo and a production system.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Guide</span>
              <a href="https://docs.pinecone.io/guides/data/filter-with-metadata" target="_blank">Pinecone: Metadata Filtering Guide</a>
              <p>Clear explanation with code examples.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Official Docs</span>
              <a href="https://docs.llamaindex.ai/en/stable/module_guides/querying/node_postprocessors/node_postprocessors/" target="_blank">LlamaIndex: Metadata Filters</a>
              <p>How to apply filters at query time.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Tag every chunk with relevant metadata at ingestion (source, page, section, date, category). Use those fields to filter at query time. This lets users ask "only show results from Q4 2025 reports."</p>
            </div>

            <div class="medical-box">
              <h4>Medical AI Example</h4>
              <p>Filter clinical guidelines by specialty, publication year, or evidence grade. "Show me only cardiology guidelines from 2024 with Grade A evidence."</p>
            </div>
          `,
          quiz: [
            {
              question: "When should you add metadata to chunks?",
              options: ["At query time", "At ingestion time", "After retrieval", "It's added automatically"],
              correct: 1,
              explanation: "Add metadata when you ingest documents. You can't filter by data you didn't store."
            }
          ]
        },
        {
          id: "reranking",
          title: "Reranking",
          icon: "🔄",
          summary: "Improve retrieval with a second pass",
          content: `
            <h2>Reranking</h2>
            <p>Reranking adds a semantic boost to search quality. After first-stage retrieval returns candidates, a reranker re-scores them based on true contextual relevance.</p>
            <p>The pattern: embed and search (fast, approximate) → rerank top-k (slower, more accurate).</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Best Start</span>
              <a href="https://docs.cohere.com/docs/reranking-with-cohere" target="_blank">Cohere Reranking Docs</a>
              <p>The full workflow including semi-structured data. One line of code to add to any pipeline.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Integration</span>
              <a href="https://python.langchain.com/docs/integrations/retrievers/cohere-reranker/" target="_blank">LangChain: Cohere Reranker</a>
              <p>Wire Cohere reranking into a LangChain retriever.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>The retrieve-then-rerank pattern, bi-encoder (embedding search) vs cross-encoder (reranking), and the latency/quality trade-off of reranking top-20 vs top-5.</p>
            </div>
          `,
          quiz: [
            {
              question: "What's the two-stage retrieval pattern?",
              options: ["Embed twice", "Search then rerank", "Chunk then embed", "Filter then search"],
              correct: 1,
              explanation: "Fast embedding search gets candidates, then a slower reranker scores them for true relevance."
            }
          ]
        },
        {
          id: "retrieval-quality",
          title: "Retrieval Quality Issues",
          icon: "🔍",
          summary: "Debugging common failures",
          content: `
            <h2>Retrieval Quality Issues</h2>
            <p>Most RAG failures aren't model failures - they're retrieval failures. Understanding how retrieval goes wrong is essential for debugging.</p>

            <h3>Common Issues</h3>
            <ul>
              <li><strong>Semantic drift:</strong> Query embedding doesn't match relevant chunk. Fix: query rewriting or HyDE.</li>
              <li><strong>Chunk boundary problems:</strong> Info split across chunks. Fix: increase overlap or semantic chunking.</li>
              <li><strong>Missing metadata context:</strong> Similar chunks from wrong document. Fix: metadata filtering.</li>
              <li><strong>Top-k too small:</strong> Right chunk exists but not retrieved. Fix: increase top_k and rerank.</li>
            </ul>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Guide</span>
              <a href="https://python.langchain.com/docs/how_to/#query-analysis" target="_blank">LangChain: Query Transformations</a>
              <p>Query rewriting, step-back prompting, and HyDE.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Tutorial</span>
              <a href="https://www.pinecone.io/learn/retrieval-augmented-generation/#retrieval-quality" target="_blank">Pinecone: Improving Retrieval Quality</a>
              <p>Practical walkthrough of failure modes with fixes.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>When retrieval fails, diagnose systematically: Are the right chunks in your database? Are they being retrieved? Are they ranked highly enough? Is the context reaching the model?</p>
            </div>
          `,
          quiz: [
            {
              question: "Your RAG system returns irrelevant results even though the answer is in your documents. What's the FIRST thing to check?",
              options: ["Change the LLM", "Check if chunks contain the answer and are being retrieved", "Add more documents", "Increase temperature"],
              correct: 1,
              explanation: "Diagnose retrieval first: verify chunks exist, check if they're retrieved, check their ranking."
            }
          ]
        },
        {
          id: "hallucination-reduction",
          title: "Hallucination Reduction",
          icon: "🎯",
          summary: "Ground responses in retrieved facts",
          content: `
            <h2>Hallucination Reduction</h2>
            <p>RAG dramatically reduces hallucinations by anchoring responses to retrieved facts. But retrieval failures, bad chunks, and conflicting info can still cause issues.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Guide</span>
              <a href="https://www.getzep.com/ai-agents/reducing-llm-hallucinations/" target="_blank">Zep: Reducing LLM Hallucinations</a>
              <p>Prompt grounding, chain-of-thought for facts, output verification.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Overview</span>
              <a href="https://www.voiceflow.com/blog/prevent-llm-hallucinations" target="_blank">Voiceflow: 5 Ways to Reduce Hallucinations</a>
              <p>RAG + chain-of-thought + guardrails together outperform any single approach.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Prompt the model to answer only from provided context (and say "I don't know" when appropriate), add confidence thresholds, and always validate retrieval quality before blaming the LLM.</p>
            </div>
          `,
          quiz: [
            {
              question: "What's the most effective way to reduce hallucinations in RAG?",
              options: ["Use a bigger model", "Combine good retrieval + grounding prompts + output validation", "Add more documents", "Increase temperature"],
              correct: 1,
              explanation: "Multiple layers work best: quality retrieval, prompts that constrain to context, and validation of outputs."
            }
          ]
        },
        {
          id: "citations",
          title: "Citations & Grounding",
          icon: "📝",
          summary: "Show where answers come from",
          content: `
            <h2>Citations & Grounding</h2>
            <p>A grounded RAG system tells you where the answer came from. This is critical for trust and debugging.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Official</span>
              <a href="https://docs.anthropic.com/en/docs/build-with-claude/citations" target="_blank">Anthropic: Giving Claude Sources</a>
              <p>How to prompt Claude for cited responses.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Guide</span>
              <a href="https://python.langchain.com/docs/how_to/qa_sources/" target="_blank">LangChain: RAG with Sources</a>
              <p>Return source documents alongside answers.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Pass chunk metadata (source, page, URL) into context, instruct the model to cite sources, and surface those sources in your UI.</p>
            </div>

            <div class="medical-box">
              <h4>Medical AI Example</h4>
              <p>Clinical answers must cite their sources: "Based on the 2024 AHA Guidelines (Section 4.2), the recommended first-line treatment is..." This is non-negotiable for clinical decision support.</p>
            </div>
          `,
          quiz: [
            {
              question: "Why are citations important in RAG systems?",
              options: ["They reduce costs", "They allow users to verify answers and build trust", "They make responses longer", "They're required by law"],
              correct: 1,
              explanation: "Citations let users verify information and understand where it came from - critical for trust and debugging."
            }
          ]
        },
        {
          id: "rag-frameworks",
          title: "RAG Frameworks",
          icon: "🏗️",
          summary: "LlamaIndex vs LangChain",
          content: `
            <h2>RAG Frameworks: LlamaIndex vs LangChain</h2>
            <p>You don't need to build RAG from scratch. Two frameworks dominate:</p>
            <p><strong>LlamaIndex:</strong> Optimized for search and indexing. Build a working prototype in an afternoon.</p>
            <p><strong>LangChain:</strong> Shines for orchestration - multi-agent workflows, tool calling, complex chains.</p>
            <p>For Month 3, start with LlamaIndex. Move to LangChain for Month 4's agents work.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">LlamaIndex</span>
              <a href="https://developers.llamaindex.ai/python/framework/understanding/rag/" target="_blank">LlamaIndex: Introduction to RAG</a>
              <p>The five stages: loading, indexing, storing, querying, evaluating.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Quickstart</span>
              <a href="https://developers.llamaindex.ai/python/framework/getting_started/starter_example/" target="_blank">LlamaIndex Starter Tutorial</a>
              <p>Build a working RAG system in under 30 lines.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">LangChain</span>
              <a href="https://docs.langchain.com/oss/python/langchain/rag" target="_blank">LangChain: Build a RAG Agent</a>
              <p>From 40-line minimal to full pipeline with reranking.</p>
            </div>

            <div class="practice-box">
              <h4>Practice Project</h4>
              <p>Build a "chat with your docs" app. Ingest 10-20 PDFs, build a FastAPI endpoint that retrieves top 5 chunks with reranking, returns a cited answer. This is a real portfolio piece.</p>
            </div>

            <div class="milestone-box">
              <h4>Month 3 Milestone</h4>
              <ul>
                <li>Explain what embeddings are and why similar text = similar vectors</li>
                <li>Chunk documents intelligently with appropriate strategies</li>
                <li>Store and query embeddings in a vector database</li>
                <li>Add reranking to improve retrieval quality</li>
                <li>Debug common retrieval failures systematically</li>
                <li>Build end-to-end RAG with LlamaIndex or LangChain</li>
              </ul>
            </div>
          `,
          quiz: [
            {
              question: "When should you use LlamaIndex vs LangChain?",
              options: ["LlamaIndex for agents, LangChain for RAG", "LlamaIndex for RAG/search, LangChain for complex orchestration", "They're identical", "LangChain is deprecated"],
              correct: 1,
              explanation: "LlamaIndex excels at search/RAG. LangChain excels at multi-agent orchestration and complex workflows."
            }
          ]
        }
      ]
    },
    {
      id: "month-4",
      number: 4,
      title: "Agents & Evals",
      goal: "Build AI systems that take actions autonomously, wire multi-step workflows, and measure if they're working.",
      icon: "🤖",
      sections: [
        {
          id: "agent-loops",
          title: "Agent Loops",
          icon: "🔁",
          summary: "The perceive-plan-act-observe cycle",
          content: `
            <h2>Agent Loops</h2>
            <p>An agent is not magic - it's a surprisingly simple pattern. Goal-driven systems that cycle through: observe → reason → act.</p>
            <p>The "thinking" happens in the prompt, the "branching" is tool selection, the "doing" is function execution. Everything else is plumbing.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Must Read</span>
              <a href="https://www.anthropic.com/research/building-effective-agents" target="_blank">Anthropic: Building Effective Agents</a>
              <p>The single best piece on agents in production. Read before writing any agent code.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Official PDF</span>
              <a href="https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf" target="_blank">OpenAI: Practical Guide to Building Agents</a>
              <p>Patterns, guardrails, and safety in production.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Comprehensive</span>
              <a href="https://www.freecodecamp.org/news/the-open-source-llm-agent-handbook/" target="_blank">freeCodeCamp: LLM Agent Handbook</a>
              <p>Agent loop, LangGraph, CrewAI, planning, memory, tool use.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Free Course</span>
              <a href="https://academy.langchain.com/courses/intro-to-langgraph" target="_blank">LangChain Academy: Intro to LangGraph</a>
              <p>The most widely used agent orchestration framework.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>The perceive → plan → act → observe cycle, how the loop terminates, what happens when a tool fails, and why agents are just while loops with an LLM making branching decisions.</p>
            </div>

            <div class="practice-box">
              <h4>Critical Practice</h4>
              <p>Build an agent from scratch without any framework - just the raw API. Give it 3 tools, a goal, and a loop. This is the most valuable thing you can do to understand what frameworks abstract.</p>
            </div>

            <div class="medical-box">
              <h4>Medical AI Example</h4>
              <p>A triage agent that: asks clarifying questions, looks up protocols, calculates scores (HEART, Wells), and recommends disposition. Each step is a tool call in the agent loop.</p>
            </div>
          `,
          quiz: [
            {
              question: "What is an agent loop fundamentally?",
              options: ["A neural network architecture", "A while loop where an LLM decides what action to take next", "A database query pattern", "A type of embedding"],
              correct: 1,
              explanation: "Agents are just loops: observe state → LLM decides next action → execute → repeat until goal reached."
            },
            {
              question: "What's the first thing you should read before building agents?",
              options: ["LangChain docs", "Anthropic's 'Building Effective Agents'", "Wikipedia on AI", "Python tutorials"],
              correct: 1,
              explanation: "Anthropic's guide is the authoritative resource on production agent patterns."
            }
          ]
        },
        {
          id: "tool-selection",
          title: "Tool Selection",
          icon: "🛠️",
          summary: "Writing descriptions the model understands",
          content: `
            <h2>Tool Selection</h2>
            <p>Writing good tools is half the job. Tool descriptions are the user manual for the LLM. If the manual is vague, the LLM will misuse the tool.</p>
            <p>Be painfully, relentlessly explicit.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">OpenAI</span>
              <a href="https://platform.openai.com/docs/guides/function-calling/best-practices" target="_blank">OpenAI: Function Calling Best Practices</a>
              <p>Naming conventions and parameter documentation patterns.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Anthropic</span>
              <a href="https://docs.anthropic.com/en/docs/build-with-claude/tool-use/implement-tool-use#best-practices-for-tool-definitions" target="_blank">Anthropic: Tool Use Best Practices</a>
              <p>When to let the model choose vs forcing a specific tool.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Self-explanatory verb names, descriptions that explain WHEN to call (not just what it does), minimal well-typed parameters, and designing tools with the LLM as the caller.</p>
            </div>

            <div class="practice-box">
              <h4>Beginner Tip</h4>
              <p>Test every tool description by asking: "If I had only this JSON schema, would I know exactly when and how to call this?" If not, it needs more work.</p>
            </div>
          `,
          quiz: [
            {
              question: "What makes a good tool description?",
              options: ["Keep it short", "Explain WHEN to use it, not just what it does", "Use technical jargon", "Make it ambiguous for flexibility"],
              correct: 1,
              explanation: "The model needs to know when to choose this tool over others. Explain the use case clearly."
            }
          ]
        },
        {
          id: "state-management",
          title: "State Management",
          icon: "📊",
          summary: "Managing agent memory with LangGraph",
          content: `
            <h2>State Management</h2>
            <p>In LangGraph, state is a shared memory object that flows through the graph. It stores messages, variables, intermediate results, and decision history.</p>
            <p>Understanding state is key to agents that handle multi-turn tasks and recover from failures.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Reference</span>
              <a href="https://langchain-ai.github.io/langgraph/concepts/low_level/#state" target="_blank">LangGraph: State Management</a>
              <p>State schemas, reducers, flow through nodes and edges.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Tutorial</span>
              <a href="https://www.datacamp.com/tutorial/langgraph-agents" target="_blank">DataCamp: LangGraph Agents</a>
              <p>Fundamentals with hands-on code, building to persistent memory.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Deep Dive</span>
              <a href="https://realpython.com/langgraph-python/" target="_blank">Real Python: LangGraph in Python</a>
              <p>Complete stateful agent with conditional edges.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>TypedDict state schemas, reducers for merging parallel updates, in-memory vs persisted checkpointing, and human-in-the-loop by inspecting/modifying state mid-execution.</p>
            </div>
          `,
          quiz: [
            {
              question: "What is LangGraph state?",
              options: ["A database", "A shared memory object that flows through the agent graph", "A prompt template", "An API endpoint"],
              correct: 1,
              explanation: "State carries all context through the graph: messages, variables, decisions, intermediate results."
            }
          ]
        },
        {
          id: "agent-failures",
          title: "Retries & Failures",
          icon: "🔧",
          summary: "Handling errors in agent loops",
          content: `
            <h2>Retries and Failure Handling in Agents</h2>
            <p>Agents fail differently than regular LLM calls. A bad tool call mid-loop can corrupt state, cause infinite loops, or silently produce wrong answers.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Official</span>
              <a href="https://langchain-ai.github.io/langgraph/how-tos/autofill-tool-errors/" target="_blank">LangGraph: Error Handling and Retries</a>
              <p>Automatic error handling at the tool node level.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Guide</span>
              <a href="https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf" target="_blank">OpenAI Guide: Guardrails Section</a>
              <p>Layered defense: LLM checks, regex filters, moderation APIs.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Maximum iteration limits (prevent infinite loops), per-tool retry with backoff, catching exceptions without crashing, and knowing when to surface failures vs retry silently.</p>
            </div>
          `,
          quiz: [
            {
              question: "What's the most critical guardrail for agent loops?",
              options: ["Faster models", "Maximum iteration limits to prevent infinite loops", "More tools", "Longer prompts"],
              correct: 1,
              explanation: "Without iteration limits, a confused agent can loop forever, burning money and never completing."
            }
          ]
        },
        {
          id: "when-not-agents",
          title: "When NOT to Use Agents",
          icon: "🚫",
          summary: "Knowing when simpler is better",
          content: `
            <h2>When NOT to Use Agents</h2>
            <p>This is one of the most important and overlooked skills. Agents are exciting but also slow, expensive, unpredictable, and hard to debug.</p>
            <p>Knowing when to reach for something simpler is a sign of good judgment.</p>

            <h3>The Decision Framework</h3>
            <ul>
              <li><strong>Single LLM call:</strong> Task can be solved in one prompt with the right context</li>
              <li><strong>Workflow:</strong> Steps are fixed and predictable</li>
              <li><strong>Agent:</strong> Number of steps is genuinely unpredictable and requires dynamic decisions</li>
            </ul>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Authoritative</span>
              <a href="https://www.anthropic.com/research/building-effective-agents" target="_blank">Anthropic: When to Use Agents</a>
              <p>The most authoritative answer, from the team that builds the models.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Practical</span>
              <a href="https://simonwillison.net/2025/Sep/30/designing-agentic-loops/" target="_blank">Simon Willison: Designing Agentic Loops</a>
              <p>Senior engineer's take on when agent complexity is justified.</p>
            </div>

            <div class="focus-box">
              <h4>What to Memorize</h4>
              <p>A chain of 3 fixed LLM calls will always be faster, cheaper, and more debuggable than an agent that could make 3 calls. Reserve agents for genuinely open-ended tasks.</p>
            </div>
          `,
          quiz: [
            {
              question: "When should you use an agent instead of a workflow?",
              options: ["Always - agents are better", "When the number of steps is genuinely unpredictable", "When you want faster responses", "When you want cheaper responses"],
              correct: 1,
              explanation: "Agents add complexity. Use them only when you truly can't predict the steps needed."
            }
          ]
        },
        {
          id: "multi-step-workflows",
          title: "Multi-Step Workflows",
          icon: "⛓️",
          summary: "Chains, routing, parallelization",
          content: `
            <h2>Multi-Step Workflows</h2>
            <p>Between "single prompt" and "full agent" is a vast productive middle ground: workflows.</p>
            <p>Workflows are ideal when tasks decompose into fixed subtasks - trading latency for higher accuracy by making each call an easier, focused task.</p>

            <h3>Common Patterns</h3>
            <ul>
              <li><strong>Prompt chaining:</strong> Output of one call → input to next</li>
              <li><strong>Routing:</strong> Classify input → send to specialized handlers</li>
              <li><strong>Parallelization:</strong> Run multiple calls simultaneously, aggregate</li>
              <li><strong>Orchestrator-subagent:</strong> One LLM plans, others execute</li>
            </ul>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Patterns</span>
              <a href="https://www.anthropic.com/research/building-effective-agents#workflow-patterns" target="_blank">Anthropic: Workflow Patterns</a>
              <p>All main patterns with diagrams and code.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Multi-Agent</span>
              <a href="https://langchain-ai.github.io/langgraph/concepts/multi_agent/" target="_blank">LangGraph: Multi-Agent Networks</a>
              <p>Supervisor and handoff patterns.</p>
            </div>

            <div class="practice-box">
              <h4>Practice Project</h4>
              <p>Build a 3-step content pipeline: (1) Extract key facts from article, (2) Generate tweet + LinkedIn + summary in parallel, (3) Score all three and pick best. No agent required - pure workflow.</p>
            </div>
          `,
          quiz: [
            {
              question: "What's the advantage of workflows over agents?",
              options: ["More flexible", "Faster, cheaper, more debuggable for fixed-step tasks", "More intelligent", "Easier to build"],
              correct: 1,
              explanation: "When steps are predictable, workflows are faster, cheaper, and much easier to debug than agents."
            }
          ]
        },
        {
          id: "evaluation-harnesses",
          title: "Evaluation Harnesses",
          icon: "📏",
          summary: "Testing AI systems systematically",
          content: `
            <h2>Evaluation Harnesses</h2>
            <p>Evals are how you know if your AI system is actually working - not just on examples you tested by hand, but systematically across hundreds of inputs.</p>
            <p>Every prompt change without running evals is a gamble.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Framework</span>
              <a href="https://deepeval.com/docs/getting-started" target="_blank">DeepEval</a>
              <p>Open-source eval framework with 50+ metrics including hallucination and faithfulness.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">CLI</span>
              <a href="https://github.com/promptfoo/promptfoo" target="_blank">Promptfoo</a>
              <p>Test and evaluate with automated suites. Side-by-side prompt comparison.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Tracing</span>
              <a href="https://smith.langchain.com/" target="_blank">LangSmith</a>
              <p>Tracing, debugging, and evaluation for LangChain apps.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">RAG Evals</span>
              <a href="https://docs.ragas.io/" target="_blank">Ragas</a>
              <p>Specialized for RAG: faithfulness, relevancy, precision, recall.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Build a golden test set (20-50 inputs with expected outputs), write eval functions (string match, JSON validation, LLM-as-judge), and run evals automatically on every prompt change.</p>
            </div>

            <div class="focus-box">
              <h4>Critical Mindset</h4>
              <p>Evals are not optional polish. Every prompt change without evals is gambling. Engineers who ship reliable AI run evals constantly.</p>
            </div>
          `,
          quiz: [
            {
              question: "When should you run evals?",
              options: ["Before launch only", "Every time you change a prompt or swap a model", "Monthly", "When users complain"],
              correct: 1,
              explanation: "Run evals on every change. What looks like an improvement in one example might break ten others."
            }
          ]
        },
        {
          id: "task-success-metrics",
          title: "Task Success Metrics",
          icon: "🎯",
          summary: "Measuring if agents accomplish goals",
          content: `
            <h2>Task Success Metrics</h2>
            <p>Beyond automated evals, you need metrics that tell you whether your agent is accomplishing its actual goal.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Essential Read</span>
              <a href="https://hamel.dev/blog/posts/evals/" target="_blank">Hamel Husain: Your AI Product Needs Evals</a>
              <p>Practical guide to eval pipelines for production AI, from someone who's done it at scale.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Framework</span>
              <a href="https://github.com/openai/evals" target="_blank">OpenAI Evals Framework</a>
              <p>OpenAI's evaluation framework with community-contributed patterns.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Process metrics (did it call the right tool?) vs outcome metrics (did the task succeed?), define success criteria before building, use LLM-as-judge for outputs that resist exact matching.</p>
            </div>

            <div class="practice-box">
              <h4>Practice Project</h4>
              <p>Take your RAG pipeline from Month 3 and build an eval harness. Create 30 Q&A pairs, score each for relevance, faithfulness, completeness. Change one thing (chunk size, model, top-k) and re-run to measure impact.</p>
            </div>

            <div class="milestone-box">
              <h4>Month 4 Milestone</h4>
              <ul>
                <li>Explain agent loops and implement one from scratch</li>
                <li>Write tool descriptions that get selected correctly</li>
                <li>Manage agent state with LangGraph</li>
                <li>Handle failures inside agent loops</li>
                <li>Decide when to use agent vs workflow vs single prompt</li>
                <li>Build multi-step workflows that chain, route, parallelize</li>
                <li>Write automated evals that catch regressions</li>
                <li>Define and measure task success metrics</li>
              </ul>
            </div>
          `,
          quiz: [
            {
              question: "What's the difference between process metrics and outcome metrics?",
              options: ["No difference", "Process = did steps happen correctly, Outcome = did the task succeed", "Process = speed, Outcome = cost", "They're the same thing"],
              correct: 1,
              explanation: "Process metrics track correct behavior (right tools called). Outcome metrics track actual success (goal achieved)."
            }
          ]
        }
      ]
    },
    {
      id: "month-5",
      number: 5,
      title: "Production & Deploy",
      goal: "Take everything you've built and make it production-ready. Handle real users, real traffic, real failures.",
      icon: "🚀",
      sections: [
        {
          id: "fastapi-production",
          title: "FastAPI Production",
          icon: "⚡",
          summary: "Workers, middleware, health checks",
          content: `
            <h2>FastAPI Production Patterns</h2>
            <p>You know how to build FastAPI apps. Now make them survive production traffic.</p>
            <p>A single uvicorn process with --reload is fine for dev. In production it becomes the bottleneck the moment real traffic arrives.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Official</span>
              <a href="https://fastapi.tiangolo.com/deployment/" target="_blank">FastAPI Deployment Docs</a>
              <p>Uvicorn workers, Gunicorn, Docker. Start here.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Comprehensive</span>
              <a href="https://craftyourstartup.com/cys-docs/fastapi-production-deployment/" target="_blank">CYS: FastAPI Production Deployment</a>
              <p>Gunicorn config, Nginx reverse proxy, health checks, rate limiting.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Best Practices</span>
              <a href="https://fastlaunchapi.dev/blog/fastapi-best-practices-production-2026" target="_blank">FastLaunchAPI: Production Best Practices</a>
              <p>Async database pooling, Redis caching, JWT auth, background tasks.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Gunicorn with Uvicorn workers (not bare Uvicorn), health check endpoints, CORS middleware, async database sessions, background tasks for non-blocking work.</p>
            </div>
          `,
          quiz: [
            {
              question: "Why use Gunicorn with Uvicorn workers instead of bare Uvicorn?",
              options: ["It's cheaper", "Gunicorn manages multiple worker processes for better throughput", "It's required by Python", "For better logging"],
              correct: 1,
              explanation: "Gunicorn handles process management and restarts. Each worker is a Uvicorn instance handling requests."
            }
          ]
        },
        {
          id: "docker",
          title: "Docker",
          icon: "🐳",
          summary: "Containerize your AI apps",
          content: `
            <h2>Docker</h2>
            <p>Docker is how you stop saying "it works on my machine" and ship consistent deployments.</p>
            <p>For AI apps, Docker solves dependency conflicts, ensures consistent environments, and makes scaling straightforward.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Official</span>
              <a href="https://docs.docker.com/get-started/" target="_blank">Docker Getting Started</a>
              <p>Images, containers, Dockerfiles, Docker Compose.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">AI Specific</span>
              <a href="https://www.freecodecamp.org/news/build-and-deploy-multi-agent-ai-with-python-and-docker/" target="_blank">freeCodeCamp: Multi-Agent AI with Docker</a>
              <p>End-to-end multi-agent pipeline with Docker Compose.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">LLM Apps</span>
              <a href="https://www.datacamp.com/tutorial/deploy-llm-applications-using-docker" target="_blank">DataCamp: Deploy LLM Apps with Docker</a>
              <p>Step-by-step for LLM apps with RAG.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Writing a Dockerfile for Python/FastAPI, multi-stage builds for small images, Docker Compose for multi-service setups, environment variables for secrets, .dockerignore for security.</p>
            </div>

            <div class="practice-box">
              <h4>Practice Project</h4>
              <p>Containerize your RAG app. Create a docker-compose.yml that runs FastAPI + vector database + Redis. Deploy so that 'docker compose up' starts everything.</p>
            </div>
          `,
          quiz: [
            {
              question: "What's the main benefit of Docker for AI apps?",
              options: ["Makes code faster", "Consistent environments and dependency management", "Reduces API costs", "Improves model accuracy"],
              correct: 1,
              explanation: "Docker ensures your app runs the same way everywhere - dev, staging, production."
            }
          ]
        },
        {
          id: "background-jobs",
          title: "Background Jobs",
          icon: "⏳",
          summary: "Async processing with Celery",
          content: `
            <h2>Background Jobs and Queues</h2>
            <p>LLM calls are slow. If a user waits 30 seconds for a response, they'll leave.</p>
            <p>Background jobs accept the request immediately, process async, and notify when done.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Standard</span>
              <a href="https://docs.celeryq.dev/en/stable/getting-started/introduction.html" target="_blank">Celery Getting Started</a>
              <p>The standard Python task queue. Setup, tasks, workers.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Lightweight</span>
              <a href="https://fastapi.tiangolo.com/tutorial/background-tasks/" target="_blank">FastAPI Background Tasks</a>
              <p>Built-in lightweight background tasks for simple cases.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>When to use FastAPI BackgroundTasks vs Celery, Redis as message broker, task failure handling and retries, returning job status to users.</p>
            </div>
          `,
          quiz: [
            {
              question: "When should you use Celery instead of FastAPI's built-in BackgroundTasks?",
              options: ["Always", "For complex, long-running tasks that need retries and monitoring", "Never - FastAPI is always better", "Only for database operations"],
              correct: 1,
              explanation: "FastAPI BackgroundTasks is for quick fire-and-forget. Celery handles complex jobs with retries, scheduling, and monitoring."
            }
          ]
        },
        {
          id: "auth-security",
          title: "Auth & Security",
          icon: "🔒",
          summary: "API keys, JWT, rate limits",
          content: `
            <h2>Auth and API Key Security</h2>
            <p>If your AI app has an API, it needs authentication. Without it, anyone can burn through your LLM credits.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Official</span>
              <a href="https://fastapi.tiangolo.com/tutorial/security/" target="_blank">FastAPI Security Docs</a>
              <p>OAuth2, JWT, API keys, dependency-based auth.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Security</span>
              <a href="https://owasp.org/API-Security/" target="_blank">OWASP API Security Top 10</a>
              <p>Authoritative list of API security risks.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Best Practices</span>
              <a href="https://auth0.com/docs/get-started/authentication-and-authorization" target="_blank">Auth0: API Auth Best Practices</a>
              <p>Practical auth implementation guide.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>JWT for user auth, API keys for service-to-service, rate limiting per user/key, never storing secrets in code (use env vars), authentication (who are you) vs authorization (what can you do).</p>
            </div>
          `,
          quiz: [
            {
              question: "What's the difference between authentication and authorization?",
              options: ["They're the same", "Authentication = who are you, Authorization = what can you do", "Authentication is for APIs, authorization is for users", "Authentication is newer"],
              correct: 1,
              explanation: "Authentication verifies identity. Authorization determines permissions. Both are needed."
            }
          ]
        },
        {
          id: "logging-observability",
          title: "Logging & Observability",
          icon: "📊",
          summary: "Trace LLM calls with Langfuse",
          content: `
            <h2>Logging and Observability</h2>
            <p>In production, if you can't see what's happening, you can't fix what's broken.</p>
            <p>LLM apps have a unique challenge: the model can return 200 OK and still produce useless output. Traditional monitoring doesn't catch this.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">LLM Observability</span>
              <a href="https://langfuse.com/docs/observability/overview" target="_blank">Langfuse</a>
              <p>Open-source LLM observability. Traces every request, token usage, latency, tool calls.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">LangChain</span>
              <a href="https://smith.langchain.com/" target="_blank">LangSmith</a>
              <p>One environment variable to set up. Tracing, debugging, monitoring.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Logging</span>
              <a href="https://www.structlog.org/" target="_blank">Python Structlog</a>
              <p>Structured JSON logging. Far better than print() for production.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Trace every LLM call (prompt, output, tokens, latency, cost), structured JSON logging, dashboards for request volume and error rates, alerting when things break or costs spike.</p>
            </div>
          `,
          quiz: [
            {
              question: "Why do LLM apps need specialized observability beyond standard monitoring?",
              options: ["They don't", "LLMs can return 200 OK but produce useless or hallucinated output", "LLMs are faster", "For compliance only"],
              correct: 1,
              explanation: "HTTP success doesn't mean useful output. You need to trace prompts, responses, and quality metrics."
            }
          ]
        },
        {
          id: "prompt-management",
          title: "Prompt Management",
          icon: "📝",
          summary: "Version control for prompts",
          content: `
            <h2>Prompt and Version Management</h2>
            <p>In production, prompts are code. They need version control, testing, and rollback ability.</p>
            <p>Changing a prompt without tracking what you changed is how you break things and can't figure out why.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Management</span>
              <a href="https://langfuse.com/docs/prompts" target="_blank">Langfuse Prompt Management</a>
              <p>Centralized versioning with playground. Deploy prompt changes without redeploying your app.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Best Practices</span>
              <a href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" target="_blank">Anthropic: Prompt Management</a>
              <p>Organizing, iterating, and managing prompts at scale.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Store prompts outside application code, version every change, A/B test variants in production, have a rollback strategy for when new prompts perform worse.</p>
            </div>
          `,
          quiz: [
            {
              question: "Why should prompts be stored outside application code?",
              options: ["To save space", "So you can update prompts without redeploying the entire app", "They shouldn't be", "For security"],
              correct: 1,
              explanation: "Separating prompts from code lets you iterate quickly and rollback bad changes without full deploys."
            }
          ]
        },
        {
          id: "cost-monitoring",
          title: "Cost Monitoring",
          icon: "💸",
          summary: "Track and limit spending",
          content: `
            <h2>Cost Monitoring and Rate Limits</h2>
            <p>LLM APIs charge per token. Without controls, a traffic spike or prompt bug can burn hundreds of dollars in minutes.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">OpenAI</span>
              <a href="https://platform.openai.com/usage" target="_blank">OpenAI Usage Dashboard</a>
              <p>Track spending by model and day, set limits.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Observability</span>
              <a href="https://www.helicone.ai/" target="_blank">Helicone</a>
              <p>Proxy-based observability with automatic cost tracking. One line to set up.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Multi-Provider</span>
              <a href="https://github.com/BerriAI/litellm" target="_blank">LiteLLM</a>
              <p>Unified interface for 100+ providers with budget management.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Hard spending limits per day/month, per-user rate limits, use cheaper models for simple tasks, cache repeated requests with Redis, monitor cost per request.</p>
            </div>
          `,
          quiz: [
            {
              question: "What's the simplest way to reduce LLM costs?",
              options: ["Use GPT-4 for everything", "Use cheaper models for simpler tasks and cache repeated requests", "Make more API calls", "Disable logging"],
              correct: 1,
              explanation: "Don't use Opus/GPT-4 for everything. Use smaller models for simple tasks. Cache identical requests."
            }
          ]
        },
        {
          id: "caching",
          title: "Caching",
          icon: "💾",
          summary: "Redis and semantic caching",
          content: `
            <h2>Caching</h2>
            <p>If 20% of users ask similar questions, you're paying for the same LLM call 20 times.</p>
            <p>Caching is the simplest way to reduce costs and latency simultaneously.</p>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Standard</span>
              <a href="https://redis.io/docs/" target="_blank">Redis Docs</a>
              <p>The standard in-memory store. Fast, simple, perfect for LLM response caching.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Semantic</span>
              <a href="https://github.com/zilliztech/GPTCache" target="_blank">GPTCache</a>
              <p>Semantic caching for LLMs. Uses embedding similarity to cache similar (not just identical) queries.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Exact-match caching for identical prompts, semantic caching for similar queries, TTL-based invalidation (simplest), measuring cache hit rates.</p>
            </div>

            <div class="milestone-box">
              <h4>Month 5 Milestone</h4>
              <ul>
                <li>Deploy FastAPI + LLM app in Docker with production config</li>
                <li>Handle long-running tasks with background jobs</li>
                <li>Secure API with auth, rate limits, API key management</li>
                <li>Trace and debug LLM calls using Langfuse or LangSmith</li>
                <li>Manage prompts with version control and rollback</li>
                <li>Monitor costs in real time and set spending limits</li>
                <li>Cache LLM responses to reduce latency and cost</li>
              </ul>
            </div>
          `,
          quiz: [
            {
              question: "What's the difference between exact-match and semantic caching?",
              options: ["No difference", "Exact-match caches identical queries, semantic caches similar queries using embeddings", "Semantic is slower", "Exact-match is for images"],
              correct: 1,
              explanation: "Exact-match requires identical input. Semantic caching uses embeddings to find similar queries that can reuse responses."
            }
          ]
        }
      ]
    },
    {
      id: "month-6",
      number: 6,
      title: "Specialize",
      goal: "Choose your path: AI Product Engineer, Applied ML Engineer, or AI Automation Engineer. Build portfolio pieces.",
      icon: "🎯",
      sections: [
        {
          id: "ai-product-engineer",
          title: "Path 1: AI Product Engineer",
          icon: "🏗️",
          summary: "Build AI-powered products",
          content: `
            <h2>AI Product Engineer</h2>
            <p><strong>Best if you want startup jobs fast.</strong></p>
            <p>This is the most common path. You build AI-powered products that real users interact with.</p>
            <p>You already have most skills from Months 1-5. Now go deeper on the product side.</p>

            <h3>Focus Areas</h3>
            <ul>
              <li>LLM apps and RAG</li>
              <li>Agents and workflows</li>
              <li>Deployment and scaling</li>
              <li>Product UX for AI</li>
            </ul>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">UI Framework</span>
              <a href="https://sdk.vercel.ai/docs" target="_blank">Vercel AI SDK</a>
              <p>Fastest way to build AI-powered UIs with streaming. React, Next.js, Vue.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Python UI</span>
              <a href="https://docs.streamlit.io/" target="_blank">Streamlit</a>
              <p>Build data apps in pure Python. Ideal for MVPs and internal tools.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Prototypes</span>
              <a href="https://www.gradio.app/docs" target="_blank">Gradio</a>
              <p>Quick ML/AI interfaces with minimal code.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">UX Guide</span>
              <a href="https://pair.withgoogle.com/guidebook/" target="_blank">Google: People + AI Guidebook</a>
              <p>The best resource on designing human-AI interaction.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Research</span>
              <a href="https://www.nngroup.com/topic/artificial-intelligence/" target="_blank">Nielsen Norman: AI UX Guidelines</a>
              <p>Research-backed guidelines for AI interfaces.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Build 2-3 complete projects this month you can demo. Ship them. Put them on GitHub. Deploy them where people can try them.</p>
            </div>

            <div class="practice-box">
              <h4>Portfolio Pieces</h4>
              <p>"Chat with your docs" app, an AI-powered internal tool, an agent that automates a real workflow. Real projects, not tutorials.</p>
            </div>
          `,
          quiz: [
            {
              question: "What's the fastest way to build AI-powered React UIs with streaming?",
              options: ["Build from scratch", "Vercel AI SDK", "jQuery", "Flask"],
              correct: 1,
              explanation: "Vercel AI SDK has built-in streaming UI components for React, Next.js, and Vue."
            }
          ]
        },
        {
          id: "applied-ml-engineer",
          title: "Path 2: Applied ML Engineer",
          icon: "🔬",
          summary: "Fine-tuning, open-source models",
          content: `
            <h2>Applied ML / LLM Engineer</h2>
            <p><strong>Best if you want deeper technical roles.</strong></p>
            <p>For engineers who want to go beyond API calls and understand what's happening under the hood.</p>

            <h3>Focus Areas</h3>
            <ul>
              <li>Fine-tuning vs prompting decisions</li>
              <li>Open-source models (Llama, Mistral)</li>
              <li>Inference optimization</li>
              <li>Training pipelines</li>
            </ul>

            <h3>When to Fine-tune</h3>
            <div class="focus-box">
              <h4>Decision Framework</h4>
              <p>Start with prompt engineering (cheapest, fastest) → Add RAG if model needs specific data → Fine-tune only when prompting + RAG can't achieve required quality, consistency, or latency.</p>
            </div>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Decision Guide</span>
              <a href="https://developers.google.com/machine-learning/crash-course/llm/tuning" target="_blank">Google: Fine-tuning vs Prompting</a>
              <p>The clearest explanation of when to use each approach.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Fine-tuning</span>
              <a href="https://platform.openai.com/docs/guides/fine-tuning" target="_blank">OpenAI Fine-tuning Guide</a>
              <p>Easiest way to start. Upload JSONL, run a job, get custom model.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Efficient</span>
              <a href="https://github.com/unslothai/unsloth" target="_blank">Unsloth</a>
              <p>2x faster fine-tuning with 80% less memory. LoRA and QLoRA out of the box.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Framework</span>
              <a href="https://github.com/hiyouga/LLaMA-Factory" target="_blank">LLaMA-Factory</a>
              <p>Fine-tune 100+ LLMs. Web UI for no-code fine-tuning.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Local Models</span>
              <a href="https://ollama.ai/" target="_blank">Ollama</a>
              <p>Run open-source LLMs locally with one command.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Production Serving</span>
              <a href="https://github.com/vllm-project/vllm" target="_blank">vLLM</a>
              <p>2-4x faster than naive serving. Standard for production.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Preparing JSONL datasets, LoRA/QLoRA (parameter-efficient fine-tuning), evaluating fine-tuned vs base model, quantization (GGUF, GPTQ, AWQ), serving with vLLM.</p>
            </div>
          `,
          quiz: [
            {
              question: "When should you fine-tune instead of prompt engineer?",
              options: ["Always - fine-tuning is better", "When prompting + RAG can't achieve required quality/consistency/latency", "Never - prompting is always enough", "Only for small models"],
              correct: 1,
              explanation: "Fine-tuning is expensive and complex. Only use it when prompting and RAG aren't sufficient."
            }
          ]
        },
        {
          id: "ai-automation-engineer",
          title: "Path 3: AI Automation Engineer",
          icon: "⚙️",
          summary: "Automate business workflows",
          content: `
            <h2>AI Automation Engineer</h2>
            <p><strong>Best if you want to build for businesses immediately.</strong></p>
            <p>About automating real business workflows with AI. Less about building products, more about solving operational problems.</p>

            <h3>Focus Areas</h3>
            <ul>
              <li>Workflow orchestration</li>
              <li>Business process automation</li>
              <li>Multi-tool systems</li>
              <li>CRM, docs, email, support, ops</li>
            </ul>

            <h3>Resources</h3>
            <div class="resource-card">
              <span class="resource-tag">Visual Workflows</span>
              <a href="https://docs.n8n.io/" target="_blank">n8n</a>
              <p>Visual automation with AI nodes. 400+ integrations. Best no-code/low-code option.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">No-Code</span>
              <a href="https://zapier.com/ai" target="_blank">Zapier AI Actions</a>
              <p>Connect AI to 6,000+ apps without code. Good for prototyping.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Advanced</span>
              <a href="https://www.make.com/" target="_blank">Make (Integromat)</a>
              <p>More powerful than Zapier for complex workflows.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Durable</span>
              <a href="https://docs.temporal.io/" target="_blank">Temporal</a>
              <p>Durable workflow engine for long-running, fault-tolerant processes.</p>
            </div>
            <div class="resource-card">
              <span class="resource-tag">Email</span>
              <a href="https://github.com/openai/openai-cookbook" target="_blank">OpenAI Cookbook: Email Processing</a>
              <p>Patterns for classifying, routing, responding with AI.</p>
            </div>

            <div class="focus-box">
              <h4>What to Focus On</h4>
              <p>Workflows that handle failures gracefully, connecting AI to real business tools, human-in-the-loop approval steps, logging every action for audit trails.</p>
            </div>

            <div class="practice-box">
              <h4>Sellable Practice Project</h4>
              <p>Build an end-to-end lead qualification system: import leads → LLM researches each → score and rank → draft personalized outreach → log to CRM. This is a real, sellable automation.</p>
            </div>
          `,
          quiz: [
            {
              question: "What's the best tool for visual AI workflow automation with many integrations?",
              options: ["Pure Python", "n8n", "Notepad", "Excel"],
              correct: 1,
              explanation: "n8n is open-source with 400+ integrations and AI nodes. Perfect for business automation."
            }
          ]
        },
        {
          id: "career-outlook",
          title: "Career & Market",
          icon: "💼",
          summary: "Salaries, freelance rates, outlook",
          content: `
            <h2>Career Outlook</h2>
            <p>This roadmap won't make you a senior AI engineer in 6 months. But it will make you someone who can build, ship, and deploy real AI systems.</p>
            <p>Right now, that is exactly what the market is paying for.</p>

            <h3>Market Data</h3>
            <ul>
              <li>AI job postings grew 25% year-over-year</li>
              <li>56% wage premium for AI skills (PwC)</li>
              <li>Only 1% of companies are "AI mature" - 99% still need help</li>
              <li>26% projected job growth through 2034 (Bureau of Labor Statistics)</li>
            </ul>

            <h3>Full-Time Salaries (US)</h3>
            <ul>
              <li><strong>Junior:</strong> $90,000 - $130,000</li>
              <li><strong>Mid-level (3-5 years):</strong> $155,000 - $200,000</li>
              <li><strong>Senior:</strong> $195,000 - $350,000+</li>
              <li><strong>Average (Glassdoor March 2026):</strong> $184,757</li>
            </ul>

            <h3>Freelance Rates</h3>
            <ul>
              <li><strong>AI Agent Development:</strong> $175 - $300/hour</li>
              <li><strong>RAG Implementation:</strong> $150 - $250/hour</li>
              <li><strong>LLM Integration:</strong> $125 - $200/hour</li>
            </ul>

            <h3>Consulting Services</h3>
            <ul>
              <li>AI agent setup: $300 - $5,000</li>
              <li>AI content management: $500 - $2,000/month</li>
              <li>Customer support automation: $1,000 - $4,000</li>
              <li>Cold outreach setup: $500 - $2,000</li>
            </ul>

            <div class="focus-box">
              <h4>What Actually Matters</h4>
              <p>Pick one project from each month and BUILD it. Not read about it. Build it, break it, fix it, deploy it, put it on GitHub. The engineers who get hired show what they've built, not what they've studied.</p>
            </div>

            <div class="practice-box">
              <h4>Start Now</h4>
              <p>Don't wait until you feel ready. You will never feel ready. Start applying, freelancing, offering services the moment you have working projects. The market doesn't reward perfection. It rewards people who ship.</p>
            </div>

            <div class="milestone-box">
              <h4>Final Milestone</h4>
              <ul>
                <li>Choose a specialization path</li>
                <li>Build 2-3 portfolio projects in that direction</li>
                <li>Deploy them publicly</li>
                <li>Start sharing what you learn (X, LinkedIn, blog)</li>
                <li>Apply for jobs / start freelancing</li>
              </ul>
            </div>
          `,
          quiz: [
            {
              question: "What separates engineers who get hired from those who don't?",
              options: ["More certifications", "Showing what they've built, not what they've studied", "Longer resumes", "More tutorials completed"],
              correct: 1,
              explanation: "Build real projects, deploy them, put them on GitHub. That's what gets you hired."
            }
          ]
        }
      ]
    }
  ]
};
