//DOM variable element definitions
let highScores = document.getElementById("high-scores");
let timeCounter = document.getElementById("timer");
let questionaire = document.getElementById("quiz-qs");
let answers = document.getElementById("answer-container");

let questions = [
    {
        question: "Commonly used data types DO NOT include?",
        answers: [
            {text: "strings;", score: 0, correct: false},
            {text: "booleans;", score: 0, correct: false},
            {text: "alerts;", score: 5, correct: true},
            {text: "numbers;", score: 5, correct: false}
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed within ___?",
        answers: [
            {text: "quotes;", score: 0, correct: false},
            {text: "curly brackets", score: 0, correct: false},
            {text: "parenthesis", score: 5, correct: true},
            {text: "square brackets", score: 0, correct: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ___?",
        answers: [
            {text: "numbers and strings", score: 0, correct: false},
            {text: "other arrays", score: 0, correct: false},
            {text: "booleans", score: 5, correct: true},
            {text: "all of the above", score: 0, correct: false}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        answers: [
            {text: "JavaScript", score: 0, correct: false},
            {text: "terminal/bash", score: 0, correct: false},
            {text: "for loops", score: 0, correct: false},
            {text: "console.log", score: 5, correct: true}
        ]
    },
]