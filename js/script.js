//DOM variable element definitions & other global variables
let highScores = document.getElementById("high-scores");
let timeCounter = document.getElementById("timer");
let questionaire = document.getElementById("quiz-qs");
let answers = document.getElementById("answer-container");
let startButton = document.getElementById("start-button");
let timeLeft = 75;
let tiempo = ""; 

//Defining the Questions object-array arrangement
let questions = [
    {
        question: "Commonly used data types DO NOT include?",
        answers: [
            { text: "strings;", score: 0, correct: false },
            { text: "booleans;", score: 0, correct: false },
            { text: "alerts;", score: 5, correct: true },
            { text: "numbers;", score: 5, correct: false }
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed within ___?",
        answers: [
            { text: "quotes;", score: 0, correct: false },
            { text: "curly brackets", score: 0, correct: false },
            { text: "parenthesis", score: 5, correct: true },
            { text: "square brackets", score: 0, correct: false }
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ___?",
        answers: [
            { text: "numbers and strings", score: 0, correct: false },
            { text: "other arrays", score: 0, correct: false },
            { text: "booleans", score: 5, correct: true },
            { text: "all of the above", score: 0, correct: false }
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        answers: [
            { text: "JavaScript", score: 0, correct: false },
            { text: "terminal/bash", score: 0, correct: false },
            { text: "for loops", score: 0, correct: false },
            { text: "console.log", score: 5, correct: true }
        ]
    },
]

//configure the button with its listener and launch functions
startButton.addEventListener("click", initiateQuiz);


//here I am starting the quiz with a function that will hide some elements using the DOM API and fires other functions for questions and the timer.
let initiateQuiz = function () {
    tiempo = setInterval
    // let restartquiz = function () {
    //     startButton.style.display = "none"; //quiza quitar
    //     questionaire.style.display = "none";

    //     fireQuestions();
    //     stopwatch();
    // }
}


//Timer to start the countdown
let stopwatch = function () {
    timeLeft--;
    timeCounter.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        recordScore();
    }
}



//fireQuestions() function created to fire or start the questionaire 
let fireQuestions = function () {

}

//Start quiz with button
// start Timer
//hide the header & paragraph/ make it blanck
//Show questions and answers with the DOM API
