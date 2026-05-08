// ========================================
// CodeMaster — Answer Comparison Engine
// No API, no test cases. User code is
// compared to stored correct solutions.
// ========================================

// ── Quiz Database ─────────────────────────────────────────────
const quizDatabase = {
    python: [
        { question: "What is the correct way to create a list in Python?", options: ["my_list = [1, 2, 3]", "my_list = (1, 2, 3)", "my_list = {1, 2, 3}", "my_list = <1, 2, 3>"], correct: 0 },
        { question: "Which keyword is used to define a function in Python?", options: ["function", "def", "func", "define"], correct: 1 },
        { question: "What does len() function do?", options: ["Returns type of object", "Returns length of an object", "Returns value of object", "Returns name of object"], correct: 1 }
    ],
    javascript: [
        { question: "How do you declare a variable in JavaScript?", options: ["var x = 5;", "variable x = 5;", "v x = 5;", "declare x = 5;"], correct: 0 },
        { question: "What is the correct syntax for a for loop?", options: ["for (i = 0; i < 5; i++) {}", "for i = 0 to 5 {}", "for (i from 0 to 5) {}", "for [i in range(5)] {}"], correct: 0 },
        { question: "Which method is used to add an element to the end of an array?", options: ["add()", "push()", "append()", "insert()"], correct: 1 }
    ],
    c: [
        { question: "What is the correct syntax to include a library in C?", options: ["import stdio.h", "#include <stdio.h>", "include stdio.h", "#import <stdio.h>"], correct: 1 },
        { question: "Which is the correct way to declare a pointer?", options: ["int *ptr;", "int& ptr;", "*int ptr;", "ptr *int;"], correct: 0 },
        { question: "What does malloc() do?", options: ["Deallocates memory", "Allocates memory dynamically", "Copies memory", "Clears memory"], correct: 1 }
    ]
};

// ── Challenge Descriptions ────────────────────────────────────
const challengesDatabase = {
    python: {
        palindrome: {
            title: "Palindrome Checker (Python)",
            description: "Write a Python function that checks if a string is a palindrome.\nIgnore spaces and uppercase/lowercase.\n\nExamples:\n• isPalindrome('racecar') → True\n• isPalindrome('hello') → False\n• isPalindrome('A man a plan a canal Panama') → True"
        },
        fibonacci: {
            title: "Fibonacci Sequence (Python)",
            description: "Write a Python function that returns the nth Fibonacci number.\nSequence: 1, 1, 2, 3, 5, 8, 13, 21...\n\nExamples:\n• fibonacci(1) → 1\n• fibonacci(6) → 8\n• fibonacci(10) → 55"
        },
        factorial: {
            title: "Factorial Calculator (Python)",
            description: "Write a Python function that returns the factorial of n.\n0! = 1, and n! = n × (n-1) × ... × 1\n\nExamples:\n• factorial(0) → 1\n• factorial(5) → 120\n• factorial(6) → 720"
        }
    },
    javascript: {
        palindrome: {
            title: "Palindrome Checker (JavaScript)",
            description: "Write a JavaScript function that checks if a string is a palindrome.\nIgnore spaces and uppercase/lowercase.\n\nExamples:\n• isPalindrome('racecar') → true\n• isPalindrome('hello') → false\n• isPalindrome('A man a plan a canal Panama') → true"
        },
        fibonacci: {
            title: "Fibonacci Sequence (JavaScript)",
            description: "Write a JavaScript function that returns the nth Fibonacci number.\nSequence: 1, 1, 2, 3, 5, 8, 13, 21...\n\nExamples:\n• fibonacci(1) → 1\n• fibonacci(6) → 8\n• fibonacci(10) → 55"
        },
        factorial: {
            title: "Factorial Calculator (JavaScript)",
            description: "Write a JavaScript function that returns the factorial of n.\n0! = 1, and n! = n × (n-1) × ... × 1\n\nExamples:\n• factorial(0) → 1\n• factorial(5) → 120\n• factorial(6) → 720"
        },

        // ── Assignment Questions from Screenshots ──────────────
        productArray: {
            title: "Product Array Search (JS)",
            description: "You are developing an e-commerce platform where customers can search for products from a list of available items.\n\nTask:\n1. Create an array of product names: [\"Mobile\", \"Laptop\", \"Tablet\"]\n2. Check whether \"Laptop\" is available using includes()\n3. Display all products using for...of loop\n\nExpected Output:\nLaptop is available\nAvailable Products:\nMobile\nLaptop\nTablet"
        },
        chatRoom: {
            title: "Chat Room Manager (JS)",
            description: "Design and implement a JavaScript object named chatRoom to manage users and messages.\n\nTask:\n1. Create a chatRoom object with users (u1: {name:'Aman'}, u2: {name:'Sara'}) and messages: ['Hi', 'Hello']\n2. Add a new message 'Welcome' using the spread operator\n3. Iterate through users using for...in loop and display user IDs with names\n4. Iterate through messages using for...of loop\n5. Use object destructuring to extract user names\n\nExpected Output:\nUsers:\nu1 : Aman\nu2 : Sara\n\nMessages:\nHi\nHello\nWelcome"
        },
        employeeJSON: {
            title: "Employee JSON Handler (JS)",
            description: "Create a JavaScript program that handles employee data using JSON.\n\nTask:\n1. Create an employee object: {name: 'Amit', department: 'IT', salary: 60000}\n2. Convert it to JSON format using JSON.stringify()\n3. Parse it back to an object using JSON.parse()\n4. Display all key-value pairs using Object.entries()\n\nExpected Output:\nJSON Data: {\"name\":\"Amit\",\"department\":\"IT\",\"salary\":60000}\n\nEmployee Details:\nname: Amit\ndepartment: IT\nsalary: 60000"
        },
        movieWatchlist: {
            title: "Movie Watchlist (JS)",
            description: "Design and implement a JavaScript program that creates a watchlist object.\n\nTask:\n1. Create a watchlist object with userName: 'Riya' and movies array with {title, genre} objects\n2. Use destructuring to extract userName\n3. Check if 'Inception' exists using includes() on mapped titles\n4. Display all movies using for...of loop\n\nInput:\n{ userName: 'Riya', movies: [{title:'Inception', genre:'Sci-Fi'}, {title:'Titanic', genre:'Romance'}] }\n\nExpected Output:\nUser: Riya\nInception is in your watchlist\n\nMovies:\nInception-Sci-Fi\nTitanic-Romance"
        },
        userRegistration: {
            title: "User Registration Form (JS)",
            description: "A web application includes a user registration module where some fields like age and email are optional.\n\nTask:\n1. Create a user object: {name: 'Ravi', age: null, email: ''}\n2. Assign default age (18) using nullish coalescing operator (??)\n3. Assign 'Not Provided' to email using logical OR operator (||)\n4. Create a display() method using 'this' keyword\n5. Call display() and output the result\n\nExpected Output:\nName: Ravi\nAge: 18\nEmail: Not Provided"
        },
        studentFormDOM: {
            title: "Student Form DOM Handler (JS)",
            description: "A university is developing a Student Form Handling system. The developer wants to automatically update and validate form fields using DOM manipulation.\n\nTask (write JS code for a page that has an input#name and button#btn):\n1. Get the input element by id 'name'\n2. Get the button element by id 'btn'\n3. Add a click event listener on the button\n4. Inside the listener: set input.value to 'Ravi', disable the button, and add a red border to the input\n\nExpected Behavior:\n- Input value changes to 'Ravi'\n- Submit button becomes disabled\n- Input box gets highlighted with a red border"
        },
        dashboardDOM: {
            title: "Multi-Feature Dashboard DOM (JS)",
            description: "A company is developing a Multi-Feature Dashboard. The developer needs to dynamically update the dashboard using DOM methods.\n\nTask (for a page with h1#title, two .card elements, and a button):\n1. Update the title text content to 'New Dashboard'\n2. Use querySelectorAll to get all .card elements\n3. Update card[0] text to 'Card1 Updated' and card[1] to 'Card2 Updated'\n4. Use forEach to set green color on all cards\n5. Hide the button using style.display = 'none'\n\nExpected Output:\n- Title becomes 'New Dashboard'\n- Both cards show updated text in green\n- Button becomes hidden"
        },
        shoppingCartDOM: {
            title: "Shopping Cart DOM Update (JS)",
            description: "An e-commerce company is developing an Online Shopping Cart interface. The developer wants to dynamically update the user interface using DOM methods.\n\nTask (for a page with h1#title, two .price elements, button, and img#img):\n1. Update product title to 'New Product'\n2. Get all .price elements and update them to 600 and 800\n3. Hide the button using style.display = 'none'\n4. Change the product image src to 'https://picsum.photos/300'\n\nExpected Output:\n- Title changes to 'New Product'\n- Prices update to 600 and 800\n- Buy button becomes hidden\n- Product image changes"
        },
        notificationSystem: {
            title: "Notification System DOM (JS)",
            description: "A web application includes a Notification System that displays multiple messages. The developer wants to dynamically manage these notifications using DOM methods.\n\nTask (for a page with two elements having class 'msg'):\n1. Get all elements with class 'msg' using getElementsByClassName\n2. Update both msgs[0] and msgs[1] text content to 'Updated Message'\n3. Make msgs[0] bold using fontWeight style\n4. Hide both messages using style.display = 'none'\n\nExpected Behavior:\n- Both messages updated to 'Updated Message'\n- First message becomes bold\n- All messages hidden from screen"
        },
        movieWatchlistDOM: {
            title: "Movie Watchlist DOM App (JS)",
            description: "A streaming application provides a Movie Watchlist feature. The developer needs to check if a specific movie exists and display all movies on the page.\n\nTask (for a page with div#output):\n1. Create watchlist object: {name: 'Riya', movies: [{title:'Inception',genre:'Sci-Fi'},{title:'Titanic',genre:'Romance'}]}\n2. Use destructuring to extract name and movies\n3. Use movies.some() to check if 'Inception' exists\n4. Use movies.map() and join() to build a formatted movie list\n5. Display output using document.getElementById('output').textContent\n\nExpected Output in page:\nUser: Riya\n\"Inception\" exists: true\n\nMovies:\nInception-Sci-Fi\nTitanic-Romance"
        }
    },
    c: {
        palindrome: {
            title: "Palindrome Checker (C)",
            description: "Write a C function that checks if a string is a palindrome.\nReturn 1 for true, 0 for false. Ignore spaces and case.\n\nExamples:\n• isPalindrome(\"racecar\") → 1\n• isPalindrome(\"hello\") → 0\n• isPalindrome(\"A man a plan a canal Panama\") → 1"
        },
        fibonacci: {
            title: "Fibonacci Sequence (C)",
            description: "Write a C function that returns the nth Fibonacci number.\nSequence: 1, 1, 2, 3, 5, 8, 13, 21...\n\nExamples:\n• fibonacci(1) → 1\n• fibonacci(6) → 8\n• fibonacci(10) → 55"
        },
        factorial: {
            title: "Factorial Calculator (C)",
            description: "Write a C function that returns the factorial of n.\n0! = 1, and n! = n × (n-1) × ... × 1\n\nExamples:\n• factorial(0) → 1\n• factorial(5) → 120\n• factorial(6) → 720"
        }
    }
};

// ══════════════════════════════════════════════════════════════
//  CORRECT ANSWER LOGIC STORE
//
//  Each challenge has an array of "token sets".
//  A token set = the essential keywords that MUST all appear
//  together in a correct solution.
//  Multiple sets cover different valid approaches.
//  The user's code passes if ANY one full token set is matched.
// ══════════════════════════════════════════════════════════════
const correctAnswers = {
    python: {
        palindrome: {
            tokens: [
                ['replace', 'lower', '::-1', 'return'],
                ['replace', 'lower', 'reversed', 'return'],
                ['replace', 'lower', '==', 'return'],
                ['.lower()', 'replace', 'return']
            ],
            hint: "💡 Hint:\n  cleaned = s.replace(' ', '').lower()\n  return cleaned == cleaned[::-1]\n\nKey ideas: remove spaces, lowercase, then compare with its reverse."
        },
        fibonacci: {
            tokens: [
                ['def', 'return', 'n-1', 'n-2'],
                ['def', 'for', 'range', 'return'],
                ['def', 'while', 'return'],
                ['def', 'a', 'b', 'return']
            ],
            hint: "💡 Hint (iterative approach):\n  a, b = 1, 1\n  for _ in range(n - 1):\n      a, b = b, a + b\n  return a\n\nOR recursive:\n  if n <= 1: return 1\n  return fibonacci(n-1) + fibonacci(n-2)"
        },
        factorial: {
            tokens: [
                ['def', 'return', 'n-1', '*'],
                ['def', 'for', 'range', '*', 'return'],
                ['def', 'while', '*', 'return'],
                ['def', 'result', '*=', 'return']
            ],
            hint: "💡 Hint (iterative approach):\n  result = 1\n  for i in range(1, n + 1):\n      result *= i\n  return result\n\nOR recursive:\n  if n == 0: return 1\n  return n * factorial(n - 1)"
        }
    },
    javascript: {
        palindrome: {
            tokens: [
                ['replace', 'tolowercase', 'split', 'reverse', 'join'],
                ['replace', 'tolowercase', 'split', 'reverse'],
                ['replace', 'tolowercase', '===', 'return'],
                ['tolowercase', 'replace', 'reverse', 'return']
            ],
            hint: "💡 Hint:\n  const cleaned = s.replace(/ /g, '').toLowerCase();\n  return cleaned === cleaned.split('').reverse().join('');\n\nKey ideas: remove spaces, lowercase, split→reverse→join, compare."
        },
        fibonacci: {
            tokens: [
                ['function', 'return', 'n-1', 'n-2'],
                ['function', 'for', 'let', 'return'],
                ['function', 'while', 'return'],
                ['=>', 'return', 'n-1'],
                ['let', 'a', 'b', 'return']
            ],
            hint: "💡 Hint (iterative approach):\n  let a = 1, b = 1;\n  for (let i = 1; i < n; i++) {\n      [a, b] = [b, a + b];\n  }\n  return a;"
        },
        factorial: {
            tokens: [
                ['function', 'return', 'n-1', '*'],
                ['function', 'for', 'let', '*', 'return'],
                ['function', 'while', '*', 'return'],
                ['=>', 'return', '*'],
                ['result', '*=', 'return']
            ],
            hint: "💡 Hint (iterative approach):\n  let result = 1;\n  for (let i = 1; i <= n; i++) {\n      result *= i;\n  }\n  return result;"
        },

        // ── Assignment Questions Answers (tokens dry-run verified) ─
        productArray: {
            tokens: [
                ['products', 'includes', 'laptop', 'for']
            ],
            hint: "💡 Hint:\n  const products = [\"Mobile\", \"Laptop\", \"Tablet\"];\n  if (products.includes(\"Laptop\")) {\n    console.log(\"Laptop is available\");\n  } else {\n    console.log(\"Laptop is not available\");\n  }\n  console.log(\"Available Products:\");\n  for (const product of products) {\n    console.log(product);\n  }"
        },
        chatRoom: {
            tokens: [
                ['chatroom', 'messages', '...chatroom.messages', 'for(letuserid']
            ],
            hint: "💡 Hint:\n  const chatRoom = {\n    users: { u1: {name:'Aman'}, u2: {name:'Sara'} },\n    messages: ['Hi', 'Hello']\n  };\n  chatRoom.messages = [...chatRoom.messages, 'Welcome'];\n  console.log('Users:');\n  for (let userId in chatRoom.users) {\n    const {name} = chatRoom.users[userId];\n    console.log(userId + ' : ' + name);\n  }\n  console.log('Messages:');\n  for (let msg of chatRoom.messages) {\n    console.log(msg);\n  }"
        },
        employeeJSON: {
            tokens: [
                ['json.stringify', 'json.parse', 'object.entries']
            ],
            hint: "💡 Hint:\n  let employee = { name: 'Amit', department: 'IT', salary: 60000 };\n  let jsonData = JSON.stringify(employee);\n  console.log('JSON Data:', jsonData);\n  let parsedData = JSON.parse(jsonData);\n  console.log('Employee Details:');\n  Object.entries(parsedData).forEach(([key, value]) => {\n    console.log(key + ': ' + value);\n  });"
        },
        movieWatchlist: {
            tokens: [
                ['watchlist', 'username', 'movies', 'includes']
            ],
            hint: "💡 Hint:\n  let watchlist = {\n    userName: 'Riya',\n    movies: [{title:'Inception',genre:'Sci-Fi'},{title:'Titanic',genre:'Romance'}]\n  };\n  let {userName, movies} = watchlist;\n  console.log('User:', userName);\n  let titles = movies.map(movie => movie.title);\n  if (titles.includes('Inception')) {\n    console.log('Inception is in your watchlist');\n  }\n  console.log('Movies:');\n  for (let movie of movies) {\n    console.log(movie.title + '-' + movie.genre);\n  }"
        },
        userRegistration: {
            tokens: [
                ['??', '||', 'this.name', 'display']
            ],
            hint: "💡 Hint:\n  const user = { name: 'Ravi', age: null, email: '' };\n  user.age = user.age ?? 18;\n  user.email = user.email || 'Not Provided';\n  user.display = function() {\n    return 'Name: ' + this.name + '\\nAge: ' + this.age + '\\nEmail: ' + this.email;\n  };\n  document.getElementById('output').textContent = user.display();"
        },
        studentFormDOM: {
            tokens: [
                ['getelementbyid', 'addeventlistener', 'disabled', 'border']
            ],
            hint: "💡 Hint:\n  let input = document.getElementById('name');\n  let button = document.getElementById('btn');\n  button.addEventListener('click', function() {\n    input.value = 'Ravi';\n    button.disabled = true;\n    input.style.border = '2px solid red';\n  });"
        },
        dashboardDOM: {
            tokens: [
                ['queryselectorall', 'foreach', 'green', 'none']
            ],
            hint: "💡 Hint:\n  document.getElementById('title').textContent = 'New Dashboard';\n  const cards = document.querySelectorAll('.card');\n  cards[0].textContent = 'Card1 Updated';\n  cards[1].textContent = 'Card2 Updated';\n  cards.forEach(card => { card.style.color = 'green'; });\n  document.querySelector('button').style.display = 'none';"
        },
        shoppingCartDOM: {
            tokens: [
                ['queryselectorall', 'prices', 'src', 'none']
            ],
            hint: "💡 Hint:\n  document.getElementById('title').textContent = 'New Product';\n  const prices = document.querySelectorAll('.price');\n  prices[0].textContent = 600;\n  prices[1].textContent = 800;\n  document.querySelector('button').style.display = 'none';\n  document.getElementById('img').src = 'https://picsum.photos/300';"
        },
        notificationSystem: {
            tokens: [
                ['getelementsbyclassname', 'fontweight', 'display']
            ],
            hint: "💡 Hint:\n  let msgs = document.getElementsByClassName('msg');\n  msgs[0].textContent = 'Updated Message';\n  msgs[1].textContent = 'Updated Message';\n  msgs[0].style.fontWeight = 'bold';\n  msgs[0].style.display = 'none';\n  msgs[1].style.display = 'none';"
        },
        movieWatchlistDOM: {
            tokens: [
                ['some', 'map', 'join', 'getelementbyid', 'textcontent']
            ],
            hint: "💡 Hint:\n  const watchlist = { name: 'Riya', movies: [{title:'Inception',genre:'Sci-Fi'},{title:'Titanic',genre:'Romance'}] };\n  const {name, movies} = watchlist;\n  const exists = movies.some(movie => movie.title === 'Inception');\n  let movieList = movies.map(movie => movie.title + '-' + movie.genre).join('\\n');\n  const output = 'User: ' + name + '\\nexists:' + exists + '\\nMovies:\\n' + movieList;\n  document.getElementById('output').textContent = output;"
        }
    },
    c: {
        palindrome: {
            tokens: [
                ['return', 'strlen', 'tolower', 'for'],
                ['return', 'strlen', 'if', 'char'],
                ['return', 'for', 'if', 'char', 'i++'],
                ['return', 'strcmp', 'strlen']
            ],
            hint: "💡 Hint:\n  Use strlen() to get length.\n  Compare characters from both ends:\n    for (i=0, j=len-1; i<j; i++, j--)\n      if (tolower(s[i]) != tolower(s[j])) return 0;\n  return 1;"
        },
        fibonacci: {
            tokens: [
                ['return', 'for', 'int', '+', 'i++'],
                ['return', 'fibonacci', 'n-1', '+'],
                ['return', 'while', 'int', '+'],
                ['int', 'a', 'b', 'return']
            ],
            hint: "💡 Hint (iterative):\n  int a = 1, b = 1, temp;\n  for (int i = 1; i < n; i++) {\n      temp = b; b = a + b; a = temp;\n  }\n  return a;"
        },
        factorial: {
            tokens: [
                ['return', 'factorial', 'n-1', '*'],
                ['return', 'for', '*', 'int', 'i++'],
                ['return', 'while', '*', 'int'],
                ['result', '*=', 'return', 'int']
            ],
            hint: "💡 Hint (iterative):\n  int result = 1;\n  for (int i = 1; i <= n; i++) {\n      result *= i;\n  }\n  return result;"
        }
    }
};

// ── Global State ──────────────────────────────────────────────
let currentQuiz = null;
let currentLanguage = null;
let currentChallenge = null;
let userAnswers = {};

// ── Navigation ────────────────────────────────────────────────
function navigateTo(section) {
    ['landing', 'aboutus', 'quiz', 'editor'].forEach(id =>
        document.getElementById(id).classList.add('hidden')
    );
    document.getElementById(section).classList.remove('hidden');
    if (section === 'landing') { resetQuiz(); resetCode(); }
}

// ── Quiz Functions ────────────────────────────────────────────
function loadQuiz(subject) {
    currentQuiz = subject;
    userAnswers = {};
    const names = { python: "🐍 Python Quiz", javascript: "⚙️ JavaScript Quiz", c: "🔧 C Programming Quiz" };
    document.getElementById('subjectSelector').classList.add('hidden');
    document.getElementById('quizDisplay').classList.remove('hidden');
    document.getElementById('quizTitle').textContent = names[subject];
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('score').textContent = '0';
    renderQuestions(subject);
}

function renderQuestions(subject) {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    quizDatabase[subject].forEach((q, i) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.innerHTML = `
            <h4>Q${i + 1}: ${q.question}</h4>
            <div class="options">
                ${q.options.map((opt, oi) => `
                    <label class="option-label" id="option-${i}-${oi}">
                        <input type="radio" name="question-${i}" value="${oi}" onchange="storeAnswer(${i}, ${oi})">
                        <span>${opt}</span>
                    </label>`).join('')}
            </div>`;
        container.appendChild(card);
    });
}

function storeAnswer(qi, oi) {
    userAnswers[qi] = oi;
    document.getElementById('score').textContent = Object.keys(userAnswers).length;
}

function submitQuiz() {
    const questions = quizDatabase[currentQuiz];
    let correct = 0;
    questions.forEach((q, i) => {
        document.getElementById(`option-${i}-${q.correct}`).classList.add('option-correct');
        if (userAnswers[i] !== undefined && userAnswers[i] !== q.correct) {
            document.getElementById(`option-${i}-${userAnswers[i]}`).classList.add('option-wrong');
        }
        if (userAnswers[i] === q.correct) correct++;
    });
    const pct = Math.round(correct / questions.length * 100);
    const resultDiv = document.getElementById('quizResult');
    resultDiv.classList.remove('success', 'failure', 'hidden');
    resultDiv.classList.add(pct >= 33 ? 'success' : 'failure');
    document.getElementById('resultTitle').textContent = pct >= 66 ? '🎉 Excellent!' : pct >= 33 ? '✓ Good Job!' : '❌ Keep Practicing!';
    document.getElementById('resultMessage').textContent = `You got ${correct} out of ${questions.length} correct!`;
    document.getElementById('resultScore').textContent = `Score: ${pct}%`;
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetQuiz() {
    userAnswers = {};
    currentQuiz = null;
    document.getElementById('quizDisplay').classList.add('hidden');
    document.getElementById('subjectSelector').classList.remove('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('score').textContent = '0';
}

// ── Code Editor Functions ─────────────────────────────────────
function loadCodingChallenge(language) {
    currentLanguage = language;
    const names = { python: "Python", javascript: "JavaScript", c: "C Programming" };
    document.getElementById('languageSelector').classList.add('hidden');
    document.getElementById('codingDisplay').classList.remove('hidden');

    const challenges = challengesDatabase[language];
    const buttons = Object.keys(challenges)
        .map(k => `<button class="subject-btn" onclick="selectChallenge('${k}')">${challenges[k].title}</button>`)
        .join('');

    document.querySelector('.coding-header').innerHTML = `
        <h2>${names[language]} Challenges</h2>
        <div style="margin-top:1.5rem;display:flex;gap:1rem;flex-wrap:wrap;">${buttons}</div>`;

    ['.challenge-section', '.code-section', '.coding-actions'].forEach(s =>
        document.querySelector(s).classList.add('hidden')
    );

    const testSec = document.querySelector('.test-section');
    if (testSec) testSec.style.display = 'none';

    document.getElementById('output').classList.add('hidden');
}

function selectChallenge(key) {
    currentChallenge = key;
    const ch = challengesDatabase[currentLanguage][key];

    ['.challenge-section', '.code-section', '.coding-actions'].forEach(s =>
        document.querySelector(s).classList.remove('hidden')
    );

    document.querySelector('.coding-header h2').textContent = ch.title;
    document.getElementById('challengeDescription').textContent = ch.description;
    document.getElementById('codeInput').value = '';
    document.getElementById('output').classList.add('hidden');
}

function resetCode() {
    document.getElementById('codeInput').value = '';
    document.getElementById('output').classList.add('hidden');
    document.getElementById('languageSelector').classList.remove('hidden');
    document.getElementById('codingDisplay').classList.add('hidden');
    currentLanguage = null;
    currentChallenge = null;
}

// ══════════════════════════════════════════════════════════════
//  MAIN CODE CHECKER — no API, no execution, pure logic match
// ══════════════════════════════════════════════════════════════
function runCode() {
    const code = document.getElementById('codeInput').value.trim();

    if (!currentChallenge) { showOutput('❌ Please select a challenge first!', 'error'); return; }
    if (!code) { showOutput('❌ Please write some code first!', 'error'); return; }

    // The 10 new JS assignment questions don't require a function definition.
    // Only the classic algorithm challenges (palindrome, fibonacci, factorial) do.
    const classicChallenges = ['palindrome', 'fibonacci', 'factorial'];
    const requiresFunction = classicChallenges.includes(currentChallenge);

    if (requiresFunction) {
        const hasFuncDef =
            /def\s+\w+/.test(code) ||
            /function\s+\w+/.test(code) ||
            /(?:const|let|var)\s+\w+\s*=.*=>/.test(code) ||
            /\w[\w\s\*]+\s+\w+\s*\([^)]*\)\s*\{/.test(code);

        if (!hasFuncDef) {
            showOutput(
                '❌ No function found in your code!\n\n' +
                '💡 You need to define a function first.\n\n' +
                (currentLanguage === 'python'
                    ? 'Example:\ndef myFunction(x):\n    return x'
                    : currentLanguage === 'javascript'
                    ? 'Example:\nfunction myFunction(x) {\n    return x;\n}'
                    : 'Example:\nint myFunction(int x) {\n    return x;\n}'),
                'error'
            );
            return;
        }
    }

    const normalized = code.toLowerCase().replace(/\s+/g, '');
    const answer = correctAnswers[currentLanguage][currentChallenge];

    const isCorrect = answer.tokens.some(tokenSet =>
        tokenSet.every(token =>
            normalized.includes(token.toLowerCase().replace(/\s+/g, ''))
        )
    );

    if (isCorrect) {
        showOutput(
            '✅ Correct Solution!\n\n' +
            'Your code has the right logic. Great job! 🎉\n\n' +
            'You can try the next challenge or pick another language.',
            'success'
        );
    } else {
        showOutput(
            '❌ Not quite right yet.\n\n' +
            'Your code seems to be missing some key logic.\n\n' +
            answer.hint,
            'error'
        );
    }
}

// ── Output ────────────────────────────────────────────────────
function showOutput(message, type) {
    const box = document.getElementById('output');
    const content = document.getElementById('outputContent');
    content.textContent = message;
    content.className = 'output-content';
    content.classList.add(type);
    box.classList.remove('hidden');
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.addEventListener('DOMContentLoaded', () => console.log("CodeMaster ready!"));