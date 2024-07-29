// Selecting necessary HTML elements
const question1 = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const progress_bar = document.getElementById("progressBarFull");

// Initializing variables
let Available_Questions = []; // Array to store available questions
let Current_Question = {}; // Object to store the current question
let Accept_Answers = false; // Flag to control answer acceptance
let Score = 0; // User's score
let Question_Counter = 0; // Counter to track the number of questions answered
let Questions = [
    // Java Questions
    {
        question: 'What is the primary purpose of the JVM (Java Virtual Machine)?',
        choice1: 'To compile Java code',
        choice2: 'To interpret and execute Java bytecode',
        choice3: 'To manage Java libraries',
        choice4: 'To debug Java programs',
        answer: 2
    },
    {
        question: 'Which of the following is a Java framework for building web applications?',
        choice1: 'Spring',
        choice2: 'Hibernate',
        choice3: 'Django',
        choice4: 'Rails',
        answer: 1
    },
    {
        question: 'In Java, which keyword is used to inherit a class?',
        choice1: 'extends',
        choice2: 'implements',
        choice3: 'inherits',
        choice4: 'derives',
        answer: 1
    },
    {
        question: 'Which method in Java is used to start the execution of a program?',
        choice1: 'main()',
        choice2: 'start()',
        choice3: 'run()',
        choice4: 'execute()',
        answer: 1
    },
    {
        question: 'What is the purpose of the Java Collections Framework?',
        choice1: 'To provide data structures and algorithms for managing collections of objects',
        choice2: 'To manage memory allocation',
        choice3: 'To handle input and output operations',
        choice4: 'To compile Java programs',
        answer: 1
    },
    {
        question: 'Which of the following is NOT a feature of Java?',
        choice1: 'Platform independence',
        choice2: 'Automatic memory management',
        choice3: 'Multiple inheritance',
        choice4: 'Object-oriented',
        answer: 3
    },
    {
        question: 'In Java, which of the following is a checked exception?',
        choice1: 'IOException',
        choice2: 'NullPointerException',
        choice3: 'ArrayIndexOutOfBoundsException',
        choice4: 'ArithmeticException',
        answer: 1
    },
    {
        question: 'What is the default value of a boolean variable in Java?',
        choice1: 'true',
        choice2: 'false',
        choice3: 'null',
        choice4: 'undefined',
        answer: 2
    },
    {
        question: 'Which of the following is a Java library for unit testing?',
        choice1: 'JUnit',
        choice2: 'Mockito',
        choice3: 'PowerMock',
        choice4: 'EasyMock',
        answer: 1
    },
    {
        question: 'What is the use of the "super" keyword in Java?',
        choice1: 'To refer to the parent class constructor',
        choice2: 'To create an instance of the parent class',
        choice3: 'To override the parent class method',
        choice4: 'To refer to the current class instance',
        answer: 1
    },
    // Python Questions
    {
        question: 'Which of the following is a Python web framework?',
        choice1: 'Django',
        choice2: 'Spring',
        choice3: 'Laravel',
        choice4: 'Rails',
        answer: 1
    },
    {
        question: 'What is the output of the following Python code: print("Hello, World!")?',
        choice1: 'Hello, World!',
        choice2: 'Hello World',
        choice3: 'hello, world!',
        choice4: 'Hello, World',
        answer: 1
    },
    {
        question: 'Which keyword is used to define a function in Python?',
        choice1: 'function',
        choice2: 'def',
        choice3: 'fun',
        choice4: 'func',
        answer: 2
    },
    {
        question: 'What is the correct file extension for Python files?',
        choice1: '.pyth',
        choice2: '.pt',
        choice3: '.py',
        choice4: '.python',
        answer: 3
    },
    {
        question: 'Which of the following data structures is immutable in Python?',
        choice1: 'List',
        choice2: 'Dictionary',
        choice3: 'Set',
        choice4: 'Tuple',
        answer: 4
    },
    {
        question: 'In Python, which keyword is used to handle exceptions?',
        choice1: 'try',
        choice2: 'except',
        choice3: 'catch',
        choice4: 'finally',
        answer: 2
    },
    {
        question: 'What is the output of the following code: print(type(5))?',
        choice1: 'int',
        choice2: '<class \'int\'>',
        choice3: 'integer',
        choice4: 'number',
        answer: 2
    },
    {
        question: 'Which of the following is used to install Python packages?',
        choice1: 'npm',
        choice2: 'composer',
        choice3: 'pip',
        choice4: 'gem',
        answer: 3
    },
    {
        question: 'What does the "len" function do in Python?',
        choice1: 'Returns the number of characters in a string',
        choice2: 'Returns the number of elements in a list',
        choice3: 'Returns the number of keys in a dictionary',
        choice4: 'All of the above',
        answer: 4
    },
    {
        question: 'Which Python library is used for data manipulation and analysis?',
        choice1: 'NumPy',
        choice2: 'SciPy',
        choice3: 'Pandas',
        choice4: 'Matplotlib',
        answer: 3
    },
    // PHP Questions
    {
        question: 'Which function in PHP is used to connect to a MySQL database?',
        choice1: 'connect_mysql()',
        choice2: 'mysqli_connect()',
        choice3: 'mysql_connect()',
        choice4: 'pdo_connect()',
        answer: 2
    },
    {
        question: 'What is the purpose of the Composer tool in PHP?',
        choice1: 'To manage dependencies in PHP projects',
        choice2: 'To create graphical user interfaces',
        choice3: 'To write test cases',
        choice4: 'To secure database connections',
        answer: 1
    },
    {
        question: 'Which of the following is a popular PHP framework?',
        choice1: 'Django',
        choice2: 'Laravel',
        choice3: 'Spring',
        choice4: 'Express',
        answer: 2
    },
    {
        question: 'In PHP, what function is used to include the content of one PHP file into another?',
        choice1: 'include()',
        choice2: 'require()',
        choice3: 'import()',
        choice4: 'load()',
        answer: 1
    },
    {
        question: 'Which PHP function is used to start a new session or resume an existing session?',
        choice1: 'session_start()',
        choice2: 'session_begin()',
        choice3: 'session_open()',
        choice4: 'session_init()',
        answer: 1
    },
    {
        question: 'What is the purpose of the .htaccess file in PHP?',
        choice1: 'To configure directory-level settings',
        choice2: 'To manage PHP sessions',
        choice3: 'To optimize image loading',
        choice4: 'To restrict database access',
        answer: 1
    },
    {
        question: 'Which PHP function is used to send HTTP headers?',
        choice1: 'header()',
        choice2: 'send_header()',
        choice3: 'http_header()',
        choice4: 'set_header()',
        answer: 1
    },
    {
        question: 'Which of the following is NOT a valid PHP data type?',
        choice1: 'integer',
        choice2: 'boolean',
        choice3: 'number',
        choice4: 'string',
        answer: 3
    },
    {
        question: 'Which PHP function is used to retrieve the length of a string?',
        choice1: 'str_length()',
        choice2: 'strlen()',
        choice3: 'string_length()',
        choice4: 'length_str()',
        answer: 2
    },
    {
        question: 'Which of the following is a feature of PHP namespaces?',
        choice1: 'Avoiding naming conflicts',
        choice2: 'Managing file permissions',
        choice3: 'Encrypting database connections',
        choice4: 'Optimizing server memory',
        answer: 1
    },
    // C/C++ Questions
    {
        question: 'Which of the following is a C++ library for linear algebra?',
        choice1: 'Eigen',
        choice2: 'NumPy',
        choice3: 'SciPy',
        choice4: 'Pandas',
        answer: 1
    },
    {
        question: 'What is the correct syntax to declare a pointer in C?',
        choice1: 'int* ptr;',
        choice2: 'pointer int ptr;',
        choice3: 'int ptr*;',
        choice4: 'int ptr;',
        answer: 1
    },
    {
        question: 'In C++, what is the use of the "virtual" keyword?',
        choice1: 'To declare a method as polymorphic',
        choice2: 'To declare a method as static',
        choice3: 'To declare a method as inline',
        choice4: 'To declare a method as abstract',
        answer: 1
    },
    {
        question: 'Which of the following is a standard C++ library for regular expressions?',
        choice1: 'regex',
        choice2: 're',
        choice3: 'regexp',
        choice4: 'pattern',
        answer: 1
    },
    {
        question: 'In C, which function is used to read a formatted input?',
        choice1: 'printf()',
        choice2: 'scanf()',
        choice3: 'gets()',
        choice4: 'fgets()',
        answer: 2
    },
    {
        question: 'What is the output of the following C code: printf("%d", 10 + 5 * 2);?',
        choice1: '20',
        choice2: '30',
        choice3: '15',
        choice4: '25',
        answer: 4
    },
    {
        question: 'Which keyword is used to define a constant in C?',
        choice1: 'constant',
        choice2: 'const',
        choice3: 'define',
        choice4: 'static',
        answer: 2
    },
    {
        question: 'In C++, which operator is used for dynamic memory allocation?',
        choice1: 'malloc',
        choice2: 'calloc',
        choice3: 'new',
        choice4: 'delete',
        answer: 3
    },
    {
        question: 'Which of the following is NOT a C++ access specifier?',
        choice1: 'public',
        choice2: 'private',
        choice3: 'protected',
        choice4: 'internal',
        answer: 4
    },
    {
        question: 'Which of the following is a valid way to declare an array in C?',
        choice1: 'int arr[10];',
        choice2: 'array int arr[10];',
        choice3: 'int array arr[10];',
        choice4: 'int[10] arr;',
        answer: 1
    },
    // SQL Questions
    {
        question: 'What is the purpose of the SQL SELECT statement?',
        choice1: 'To delete data from a database',
        choice2: 'To insert data into a database',
        choice3: 'To retrieve data from a database',
        choice4: 'To update data in a database',
        answer: 3
    },
    {
        question: 'Which SQL keyword is used to sort the result set?',
        choice1: 'ORDER BY',
        choice2: 'SORT BY',
        choice3: 'GROUP BY',
        choice4: 'ARRANGE BY',
        answer: 1
    },
    {
        question: 'What is a primary key in SQL?',
        choice1: 'A unique identifier for each record in a table',
        choice2: 'A foreign key in a table',
        choice3: 'A column that allows null values',
        choice4: 'A default value for a column',
        answer: 1
    },
    {
        question: 'Which SQL function is used to count the number of rows in a result set?',
        choice1: 'SUM()',
        choice2: 'COUNT()',
        choice3: 'TOTAL()',
        choice4: 'NUMBER()',
        answer: 2
    },
    {
        question: 'What does the SQL WHERE clause do?',
        choice1: 'Filters records based on a condition',
        choice2: 'Groups records',
        choice3: 'Sorts records',
        choice4: 'Joins tables',
        answer: 1
    },
    {
        question: 'Which of the following is NOT a SQL aggregate function?',
        choice1: 'SUM()',
        choice2: 'AVG()',
        choice3: 'COUNT()',
        choice4: 'JOIN()',
        answer: 4
    },
    {
        question: 'Which SQL statement is used to remove a table from a database?',
        choice1: 'DELETE TABLE',
        choice2: 'DROP TABLE',
        choice3: 'REMOVE TABLE',
        choice4: 'TRUNCATE TABLE',
        answer: 2
    },
    {
        question: 'What does the SQL JOIN clause do?',
        choice1: 'Combines rows from two or more tables based on a related column',
        choice2: 'Deletes rows from a table',
        choice3: 'Updates rows in a table',
        choice4: 'Creates a new table',
        answer: 1
    },
    {
        question: 'Which SQL keyword is used to create a new table?',
        choice1: 'MAKE TABLE',
        choice2: 'BUILD TABLE',
        choice3: 'NEW TABLE',
        choice4: 'CREATE TABLE',
        answer: 4
    },
    {
        question: 'Which SQL statement is used to update existing data in a table?',
        choice1: 'UPDATE',
        choice2: 'SET',
        choice3: 'MODIFY',
        choice4: 'CHANGE',
        answer: 1
    },
    {
        question: 'Which of the following is a feature of the Java programming language?',
        choice1: 'Manual memory management',
        choice2: 'Operator overloading',
        choice3: 'Platform independence',
        choice4: 'Multiple inheritance',
        answer: 3
    },
    {
        question: 'In Java, which class is the superclass of all other classes?',
        choice1: 'Object',
        choice2: 'Class',
        choice3: 'System',
        choice4: 'Thread',
        answer: 1
    },
    {
        question: 'What is the default value of an instance variable of type int in Java?',
        choice1: 'null',
        choice2: '0',
        choice3: 'undefined',
        choice4: '1',
        answer: 2
    },
    {
        question: 'Which keyword is used to prevent a method from being overridden in Java?',
        choice1: 'static',
        choice2: 'abstract',
        choice3: 'final',
        choice4: 'synchronized',
        answer: 3
    },
    {
        question: 'In Java, what does the "transient" keyword indicate?',
        choice1: 'A variable should not be serialized',
        choice2: 'A variable is constant',
        choice3: 'A method should not be overridden',
        choice4: 'A class is final',
        answer: 1
    },
    // Python Questions
    {
        question: 'What is the result of the following Python code: print(2 ** 3)?',
        choice1: '6',
        choice2: '8',
        choice3: '9',
        choice4: '5',
        answer: 2
    },
    {
        question: 'In Python, which of the following is a mutable data type?',
        choice1: 'string',
        choice2: 'tuple',
        choice3: 'list',
        choice4: 'int',
        answer: 3
    },
    {
        question: 'What is the purpose of the "self" parameter in Python class methods?',
        choice1: 'To reference the current instance of the class',
        choice2: 'To reference the parent class',
        choice3: 'To create a static method',
        choice4: 'To initialize class variables',
        answer: 1
    },
    {
        question: 'Which of the following is a built-in Python function?',
        choice1: 'sqrt()',
        choice2: 'factorial()',
        choice3: 'print()',
        choice4: 'rand()',
        answer: 3
    },
    {
        question: 'What is the correct syntax for defining a lambda function in Python?',
        choice1: 'lambda x: x + 1',
        choice2: 'def lambda x: x + 1',
        choice3: 'lambda(x) x + 1',
        choice4: 'lambda: x + 1',
        answer: 1
    },
    // PHP Questions
    {
        question: 'Which PHP function is used to get the length of an array?',
        choice1: 'array_length()',
        choice2: 'count()',
        choice3: 'sizeof()',
        choice4: 'length()',
        answer: 2
    },
    {
        question: 'What is the default file extension for PHP files?',
        choice1: '.ph',
        choice2: '.php',
        choice3: '.phtml',
        choice4: '.phps',
        answer: 2
    },
    {
        question: 'In PHP, which of the following is used to include a file only once?',
        choice1: 'include()',
        choice2: 'require()',
        choice3: 'include_once()',
        choice4: 'require_once()',
        answer: 4
    },
    {
        question: 'What does the "echo" statement do in PHP?',
        choice1: 'Outputs one or more strings',
        choice2: 'Evaluates a string as PHP code',
        choice3: 'Terminates script execution',
        choice4: 'Starts a new PHP session',
        answer: 1
    },
    {
        question: 'Which of the following is used to start a comment in PHP?',
        choice1: '//',
        choice2: '#',
        choice3: '/*',
        choice4: 'All of the above',
        answer: 4
    },
    // C/C++ Questions
    {
        question: 'Which of the following is a correct syntax for a for loop in C?',
        choice1: 'for(int i = 0; i < 10; i++)',
        choice2: 'for i = 0 to 10',
        choice3: 'for(int i = 0; i < 10; i+)',
        choice4: 'for(int i; i < 10; i++)',
        answer: 1
    },
    {
        question: 'In C++, which keyword is used to declare an abstract class?',
        choice1: 'virtual',
        choice2: 'abstract',
        choice3: 'base',
        choice4: 'interface',
        answer: 1
    },
    {
        question: 'What does the "sizeof" operator return in C?',
        choice1: 'The number of elements in an array',
        choice2: 'The number of bytes occupied by a variable',
        choice3: 'The size of the memory',
        choice4: 'The length of a string',
        answer: 2
    },
    {
        question: 'Which of the following is NOT a storage class specifier in C?',
        choice1: 'auto',
        choice2: 'register',
        choice3: 'static',
        choice4: 'public',
        answer: 4
    },
    {
        question: 'In C++, what is the scope resolution operator?',
        choice1: '::',
        choice2: ':',
        choice3: '.',
        choice4: '->',
        answer: 1
    },
    // SQL Questions
    {
        question: 'Which SQL keyword is used to add a new record to a table?',
        choice1: 'ADD',
        choice2: 'INSERT',
        choice3: 'UPDATE',
        choice4: 'APPEND',
        answer: 2
    },
    {
        question: 'Which of the following is a valid SQL constraint?',
        choice1: 'UNIQUE',
        choice2: 'INDEX',
        choice3: 'TRIGGER',
        choice4: 'PROCEDURE',
        answer: 1
    },
    {
        question: 'What is the result of the SQL query: SELECT COUNT(*) FROM table_name?',
        choice1: 'The total number of columns in the table',
        choice2: 'The total number of rows in the table',
        choice3: 'The total number of distinct values in the table',
        choice4: 'The total number of null values in the table',
        answer: 2
    },
    {
        question: 'Which SQL keyword is used to modify existing data in a table?',
        choice1: 'CHANGE',
        choice2: 'MODIFY',
        choice3: 'UPDATE',
        choice4: 'ALTER',
        answer: 3
    },
    {
        question: 'What is a foreign key in SQL?',
        choice1: 'A key that uniquely identifies each row in a table',
        choice2: 'A key used to encrypt data in a table',
        choice3: 'A key that links one table to another',
        choice4: 'A key that sorts the data in a table',
        answer: 3
    },
    {
        question: 'What does the SQL GROUP BY clause do?',
        choice1: 'Filters records based on a condition',
        choice2: 'Sorts records in ascending or descending order',
        choice3: 'Groups rows that have the same values into summary rows',
        choice4: 'Joins two or more tables',
        answer: 3
    },
    {
        question: 'Which SQL statement is used to create a new database?',
        choice1: 'CREATE DB',
        choice2: 'NEW DATABASE',
        choice3: 'CREATE DATABASE',
        choice4: 'MAKE DB',
        answer: 3
    },
    {
        question: 'What does the SQL DISTINCT keyword do?',
        choice1: 'Selects only unique values',
        choice2: 'Deletes duplicate records',
        choice3: 'Changes the name of a table',
        choice4: 'Sorts the result set',
        answer: 1
    },
    {
        question: 'Which of the following SQL clauses is used to filter records?',
        choice1: 'SELECT',
        choice2: 'WHERE',
        choice3: 'FROM',
        choice4: 'HAVING',
        answer: 2
    },
    {
        question: 'Which SQL function is used to find the highest value in a column?',
        choice1: 'MAX()',
        choice2: 'HIGHEST()',
        choice3: 'UPPER()',
        choice4: 'LARGE()',
        answer: 1
    }
];



 // Array containing all questions and answers
const Points_for_each_question = 10; // Points awarded for each correct answer
const Max_questions = 10; // Maximum number of questions in the game

// Function to start the game
function start() {
    Score = 0;
    Question_Counter = 0;
    Available_Questions = [...Questions];
    Get_Question();
}

// Function to retrieve a question
function Get_Question() {
    if (Question_Counter >= Max_questions) {
        localStorage.setItem("mostRecentScore", Score);
        // End the game when the maximum number of questions is reached
        return window.location.assign('end.php');
    }

    // Select a random question from available questions
    let question_number = Math.floor(Math.random() * Available_Questions.length);
    Current_Question = Available_Questions[question_number];
    question1.innerText = Current_Question.question;

     // Randomly select a background image
     const backgroundImages = ["image1.jfif", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]; // Add your image paths
     const randomImageIndex = Math.floor(Math.random() * backgroundImages.length);
     document.querySelector("body").style.backgroundImage = `url(${backgroundImages[randomImageIndex]})`;

    // Update progress bar
    progress_bar.style.width = `${(Question_Counter / Max_questions) * 100}px`;

    // Display choices for the current question
    for (let i = 0; i < choices.length; i++) {
        const choiceNumber = choices[i].getAttribute("value");
        choices[i].innerText = Current_Question["choice" + choiceNumber];
        choices[i].addEventListener('click', handleAnswerClick);
    }

    // Remove the selected question from available questions
    Available_Questions.splice(question_number, 1);
    Accept_Answers = true;
    Question_Counter++;
    questionCounterText.innerText = Question_Counter + "/" + Max_questions;
}

function handleAnswerClick(e) {
    if (Accept_Answers) {
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.getAttribute('value');
        let classToApply = "Wrong";
        let feedbackMessage = "";

        // Check if the selected answer is correct
        if (selectedAnswer == Current_Question.answer) {
            classToApply = "Correct";
            feedbackMessage = "Correct!";
            incrementScore(Points_for_each_question);
            
        } else {
            feedbackMessage = "Your answer is incorrect.";
            // Find the correct choice and highlight it
            const correctChoice = choices.find(choice => choice.getAttribute('value') == Current_Question.answer);
            correctChoice.parentElement.classList.add("Correct");
            
        }

        // Display feedback message on the screen
        const feedbackElement = document.createElement('p');
        feedbackElement.classList.add('feedback-message');
        feedbackElement.innerText = feedbackMessage;
        feedbackElement.style.backgroundColor = 'white';
        
        feedbackElement.style.fontSize = '30px';
        feedbackElement.style.fontFamily = 'Times New Roman, Times, serif';
        document.getElementById('game').appendChild(feedbackElement);

        // Remove click event listener from all choices
        choices.forEach(choice => {
            choice.removeEventListener('click', handleAnswerClick);
        });

        selectedChoice.parentElement.classList.add(classToApply);

        // Remove feedback message after a delay and move to the next question
        setTimeout(() => {
            feedbackElement.remove();
            selectedChoice.parentElement.classList.remove(classToApply);
            // Reset background color of correct choice
            const correctChoice = choices.find(choice => choice.getAttribute('value') == Current_Question.answer);
            correctChoice.parentElement.classList.remove("Correct");
            Get_Question();
        }, 1500); // Adjusted delay to 3000 milliseconds
    }
}

// Function to increment the score
function incrementScore(num) {
    Score += num;
    scoreText.innerText = Score;
}

// Start the game
start();

