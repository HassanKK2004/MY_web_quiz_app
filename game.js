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
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4
    },
    {
        question: "What does HTML stand for?",
        choice1: "Hyper Text Markup Language",
        choice2: "Hyperlinks and Text Markup Language",
        choice3: "Home Tool Markup Language",
        choice4: "Hyperlink Markup Language",
        answer: 1
    },
    {
        question: "What is the correct way to write a single line comment in JavaScript?",
        choice1: "// This is a comment",
        choice2: "<!-- This is a comment -->",
        choice3: "' This is a comment",
        choice4: "/* This is a comment */",
        answer: 1
    },
    {
        question: "Which symbol is used for single-line comments in CSS?",
        choice1: "//",
        choice2: "/*",
        choice3: "'",
        choice4: "#",
        answer: 1
    },
    {
        question: "What does CSS stand for?",
        choice1: "Creative Style Sheets",
        choice2: "Cascading Style Sheets",
        choice3: "Computer Style Sheets",
        choice4: "Colorful Style Sheets",
        answer: 2
    },
    {
        question: "What is the correct way to include an external CSS file in an HTML document?",
        choice1: "<link rel='stylesheet' type='text/css' href='styles.css'>",
        choice2: "<style src='styles.css'>",
        choice3: "<style rel='stylesheet' type='text/css' href='styles.css'>",
        choice4: "<link src='styles.css'>",
        answer: 1
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        choice1: "Boolean",
        choice2: "String",
        choice3: "Number",
        choice4: "Float",
        answer: 4
    },
    {
        question: "What is the result of 2 + '2' in JavaScript?",
        choice1: "22",
        choice2: "4",
        choice3: "NaN",
        choice4: "Error",
        answer: 1
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        choice1: "style",
        choice2: "class",
        choice3: "styles",
        choice4: "font",
        answer: 1
    },
    {
        question: "How do you create a function in JavaScript?",
        choice1: "function = myFunction()",
        choice2: "function myFunction()",
        choice3: "function:myFunction()",
        choice4: "create myFunction()",
        answer: 2
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        choice1: "<css>",
        choice2: "<style>",
        choice3: "<script>",
        choice4: "<link>",
        answer: 2
    },
    {
        question: "Which property is used to change the background color in CSS?",
        choice1: "bgcolor",
        choice2: "color",
        choice3: "background-color",
        choice4: "background",
        answer: 3
    },
    {
        question: "How do you add a comment in HTML?",
        choice1: "// This is a comment",
        choice2: "' This is a comment",
        choice3: "<!-- This is a comment -->",
        choice4: "/* This is a comment */",
        answer: 3
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choice1: "onmouseclick",
        choice2: "onmouseover",
        choice3: "onchange",
        choice4: "onclick",
        answer: 4
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        choice1: "<break>",
        choice2: "<br>",
        choice3: "<lb>",
        choice4: "<line>",
        answer: 2
    },
    {
        question: "Which is the correct CSS syntax?",
        choice1: "body {color: black;}",
        choice2: "{body:color=black;}",
        choice3: "body:color=black;",
        choice4: "{body;color:black;}",
        answer: 1
    },
    {
        question: "How do you create a variable in JavaScript?",
        choice1: "var myVariable;",
        choice2: "variable myVariable;",
        choice3: "v myVariable;",
        choice4: "var:myVariable;",
        answer: 1
    },
    {
        question: "How do you call a function named 'myFunction'?",
        choice1: "call myFunction();",
        choice2: "call function myFunction();",
        choice3: "myFunction();",
        choice4: "execute myFunction();",
        answer: 3
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        choice1: "*",
        choice2: "x",
        choice3: "-",
        choice4: "=",
        answer: 4
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        choice1: "Math.max(x, y)",
        choice2: "Math.ceil(x, y)",
        choice3: "ceil(x, y)",
        choice4: "top(x, y)",
        answer: 1
    },
    {
        question: "Which method can be used to round a number to the nearest integer?",
        choice1: "Math.rnd()",
        choice2: "Math.round()",
        choice3: "Math.random()",
        choice4: "Math.nearest()",
        answer: 2
    },
    {
        question: "Which HTML tag is used to define a hyperlink?",
        choice1: "<a>",
        choice2: "<link>",
        choice3: "<href>",
        choice4: "<hyperlink>",
        answer: 1
    },
    {
        question: "How can you add a background color for all <h1> elements?",
        choice1: "h1.all {background-color:#FFFFFF;}",
        choice2: "h1 {background-color:#FFFFFF;}",
        choice3: "all.h1 {background-color:#FFFFFF;}",
        choice4: "h1 {all.background-color:#FFFFFF;}",
        answer: 2
    },
    {
        question: "Which CSS property controls the text size?",
        choice1: "text-style",
        choice2: "font-style",
        choice3: "text-size",
        choice4: "font-size",
        answer: 4
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        choice1: "title",
        choice2: "alt",
        choice3: "src",
        choice4: "longdesc",
        answer: 2
    },
    {
        question: "What is the correct JavaScript syntax to write 'Hello World'?",
        choice1: "document.write('Hello World');",
        choice2: "response.write('Hello World');",
        choice3: "('Hello World');",
        choice4: "print('Hello World');",
        answer: 1
    },
    {
        question: "How does a FOR loop start?",
        choice1: "for (i <= 5; i++)",
        choice2: "for (i = 0; i <= 5)",
        choice3: "for i = 1 to 5",
        choice4: "for (i = 0; i <= 5; i++)",
        answer: 4
    },
    {
        question: "How do you insert a comment in a CSS file?",
        choice1: "// this is a comment",
        choice2: "' this is a comment",
        choice3: "/* this is a comment */",
        choice4: "// this is a comment //",
        answer: 3
    },
    {
        question: "Which JavaScript framework is developed and maintained by Facebook?",
        choice1: "Angular",
        choice2: "Vue.js",
        choice3: "React",
        choice4: "Ember.js",
        answer: 3,
    },
    {
        question: "Which HTML5 element is used to specify a footer for a document or section?",
        choice1: "<bottom>",
        choice2: "<footer>",
        choice3: "<section>",
        choice4: "<foot>",
        answer: 2,
    },
    {
        question: "Which CSS property is used to change the font of an element?",
        choice1: "font-family",
        choice2: "font-style",
        choice3: "font-weight",
        choice4: "font-size",
        answer: 1
    },
    {
        question: "What does AJAX stand for?",
        choice1: "Asynchronous JavaScript And XML",
        choice2: "Advanced JavaScript And XHTML",
        choice3: "Automatic JavaScript And XML",
        choice4: "Asynchronous JSON And XML",
        answer: 1
    },
    {
        question: "Which HTML attribute is used to define inline JavaScript?",
        choice1: "onclick",
        choice2: "onload",
        choice3: "onsubmit",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "Which CSS framework is known for its responsive grid system?",
        choice1: "Bootstrap",
        choice2: "Foundation",
        choice3: "Bulma",
        choice4: "Tailwind CSS",
        answer: 1
    },
    {
        question: "What is the correct syntax to include a JavaScript file named 'main.js' in an HTML document?",
        choice1: "<script href='main.js'></script>",
        choice2: "<script src='main.js'></script>",
        choice3: "<script link='main.js'></script>",
        choice4: "<script file='main.js'></script>",
        answer: 2
    },
    {
        question: "Which HTML5 element is used to specify a header for a document or section?",
        choice1: "<head>",
        choice2: "<heading>",
        choice3: "<header>",
        choice4: "<section>",
        answer: 3
    },
    {
        question: "In CSS, which property is used to change the text color of an element?",
        choice1: "color",
        choice2: "text-color",
        choice3: "font-color",
        choice4: "background-color",
        answer: 1
    },
    {
        question: "Which JavaScript method is used to select an element by its ID?",
        choice1: "getElementById()",
        choice2: "getElementByClass()",
        choice3: "querySelector()",
        choice4: "querySelectorAll()",
        answer: 1
    },
    {
        question: "Which JavaScript library is known for making DOM manipulation easier?",
        choice1: "React",
        choice2: "Angular",
        choice3: "jQuery",
        choice4: "Vue.js",
        answer: 3
    },
    {
        question: "Which HTML tag is used to create an unordered list?",
        choice1: "<ul>",
        choice2: "<ol>",
        choice3: "<li>",
        choice4: "<list>",
        answer: 1
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        choice1: "padding",
        choice2: "margin",
        choice3: "border",
        choice4: "spacing",
        answer: 2
    },
    {
        question: "What does the 'var' keyword do in JavaScript?",
        choice1: "Declares a block-scoped variable",
        choice2: "Declares a function-scoped variable",
        choice3: "Declares a constant",
        choice4: "Declares a global variable only",
        answer: 2
    },
    {
        question: "Which CSS property is used to make text bold?",
        choice1: "font-weight",
        choice2: "text-style",
        choice3: "font-style",
        choice4: "font-decoration",
        answer: 1
    },
    {
        question: "Which of the following is a JavaScript framework for building mobile applications?",
        choice1: "React Native",
        choice2: "Vue.js",
        choice3: "Angular",
        choice4: "Ember.js",
        answer: 1
    },
    {
        question: "Which HTML attribute is used to specify the source of an image?",
        choice1: "src",
        choice2: "href",
        choice3: "alt",
        choice4: "source",
        answer: 1
    },
    {
        question: "In CSS, which property is used to change the font size of an element?",
        choice1: "text-size",
        choice2: "font-size",
        choice3: "font-style",
        choice4: "size",
        answer: 2
    },
    {
        question: "Which method is used to parse a JSON string in JavaScript?",
        choice1: "JSON.parse()",
        choice2: "JSON.stringify()",
        choice3: "JSON.decode()",
        choice4: "JSON.read()",
        answer: 1
    },
    {
        question: "Which CSS framework is built with a utility-first approach?",
        choice1: "Bootstrap",
        choice2: "Foundation",
        choice3: "Bulma",
        choice4: "Tailwind CSS",
        answer: 4
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

