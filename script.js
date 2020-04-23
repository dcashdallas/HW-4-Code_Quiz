var start = document.getElementById("start");

var quiz = document.getElementById("quiz");

var question = document.getElementById("question");

var counter = document.getElementById("counter");

var timeGauge = document.getElementById("timeGauge");

var choice1 = document.getElementById("1");
var chocie2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");

var scoreContainer = document.getElementById("scoreContainer");

var score = 0;

var questions = [
    {
        question: "What is the price of tea in China",
        choice1: "$56",
        choice2: "$1",
        choice3: "$10",
        choice4: "$5",
        correct: "2"
    }
]
var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;

function renderQuestion() {
    var q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
}

function checkAnswer(answer) {
    if (questions[runningQuestionIndex].correct === answer) {
        score++;
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    if (runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        questionRender();
    } else {
        clearInterval(TIMER);
        scoreRender();
    }
}