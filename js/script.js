// Start the quiz with a timer set to 75. Timer left also will be the final score.
var timerEl = document.getElementById("timer");
var startContEl = document.getElementById("start-container");
var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
var questionContEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerBtnEl = document.getElementById("answer-buttons");
var checkAnswerEl = document.getElementById("check-answer"); //Quiza quitar
var viewHighScores = document.getElementById("highscores-link");
var submitButton = document.getElementById("submit-btn");
var clearScoreButton = document.getElementById("clear-btn");
var initialsField = document.getElementById("player-name");
var restartButton = document.getElementById("restart-btn");
var scoreField = document.getElementById("player-score");
var scores = JSON.parse(localStorage.getItem("scores")) || [];
var timeLeft = 75;
var timerID;
var shuffledQuestions;
var currentQuestionIndex;


// the start button to start playing the game when clicked. once an answer is picked, the next button displays to proceed.
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++
    nextQuestion()
});

// Timer function, the time left is then stored to serve as the score
function stopWatch() {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        saveScore();
    }
}

// // The timer and quiz starts once the start button is clicked
function startQuiz() {
    timerID = setInterval(stopWatch, 1000);
    startContEl.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContEl.classList.remove("hide");
    stopWatch();
    nextQuestion();
};

// next question function definition.
function nextQuestion() {
    reset();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

// method to go though the questions array to display the questions and answers in form of a button through the DOM
function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct //adds a data attribute to the button wich is correct
        }
        button.addEventListener("click", selectAnswer)
        answerBtnEl.appendChild(button)
    })
};

// Reset state function to go to our like initial state, get rid of all created elements from previous questions.
function reset() {
    nextBtn.classList.add("hide")
    checkAnswerEl.classList.add("hide")
    //looping throug the answer element to get rid of whats there from previous questions, the first child with the answer buttons.
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild
            (answerBtnEl.firstChild)
    }
};

// function for when selecting an answered, its triggered by the event of selecting.
function selectAnswer(e) {
    var selectedButton = e.target; //whatever we click
    var correct = selectedButton.dataset.correct;
    checkAnswerEl.classList.remove("hide")
    // verifies the selection output right/wrong?
    if (correct) {
        checkAnswerEl.innerHTML = "Correct ✅";
    } else {
        checkAnswerEl.innerHTML = "Wrong ❌";
        if (timeLeft <= 10) {
            timeLeft = 0;
        } else {
            timeLeft -= 10;  //time/score deduction if the selection is wrong
        }
    }
    Array.from(answerBtnEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    //next button logic to keep showing all questions
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove("hide")
        checkAnswerEl.classList.remove("hide")
    } else {
        startBtn
            .classList.remove("hide")
        saveScore();
    }
};


// Button DOM config assigning & removing a class for special styling
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
};
function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
};

// function to save scores
function saveScore() { //cambiar nombre
    clearInterval(timerID);
    timerEl.textContent = "Time: " + timeLeft;
    questionContEl.classList.add("hide");
    document.getElementById("score-container").classList.remove("hide");
    document.getElementById("your-score").textContent = "📝 Your Score is: " + timeLeft;
};
var storeScore = function () {
    localStorage.setItem("scores", JSON.stringify(saveScore))
}

var loadScores = function () {  ///rendeer
    savedScores = JSON.parse(savedScores);
    var initials = document.querySelector("#initials-input").value;
    var newScore = {
        score: timeLeft,
        initials: initials
    }
    savedScores.push(newScore);
};


// Set up highscores and creating the elements to show
function hallOfFame(initials) {
    document.getElementById("highscores").classList.remove("hide")
    document.getElementById("score-container").classList.add("hide");
    startContEl.classList.add("hide");
    questionContEl.classList.add("hide");
    if (typeof initials == "string") {
        var score = {
            initials, timeLeft
        }
        scores.push(score)
    }

    var highScoreEl = document.getElementById("highscore");
    highScoreEl.innerHTML = "";
    for (i = 0; i < scores.length; i++) {
        var div1 = document.createElement("div");
        div1.setAttribute("class", "name-div");
        div1.innerText = scores[i].initials;
        var div2 = document.createElement("div");
        div2.setAttribute("class", "score-div");
        div2.innerText = scores[i].timeLeft;
        highScoreEl.appendChild(div1);
        highScoreEl.appendChild(div2);
    }
    localStorage.setItem("scores", JSON.stringify(scores));
};

// View high scores link  
submitButton.addEventListener("click", function (event) {
    event.preventDefault()
    var initials = document.querySelector("#initials-input").value;
    hallOfFame(initials);
});

// Restart or reload the page
restartButton.addEventListener("click", function () {
    window.location.reload();
});

//Highscores link
viewHighScores.addEventListener("click", hallOfFame);

// Clear localStorage items 
clearScoreButton.addEventListener("click", function () {
    localStorage.clear();
    document.getElementById("highscore").innerHTML = "";
});