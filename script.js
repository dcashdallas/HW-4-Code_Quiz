// var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
// var qImg = document.getElementById("qImg");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var counter = document.getElementById("counter");
// var timeGauge = document.getElementById("timeGauge");
// var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");
// var start = document.getElementById("start");

var runningQuestion = 0;
var count = 59;
var questionTime = 59; // 10s
var gaugeWidth = 150; // 150px
var gaugeUnit = gaugeWidth / questionTime;
var TIMER;
var score = 0;

start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
}

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        // answerIsCorrect();
    } else {

        count -= 5
        // answer is wrong
        // change progress color to red
        // answerIsWrong();

    }
    // count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        // clearInterval(TIMER);
        scoreRender();
    }
}

function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count--
    } else {
        count = 0;
        // change progress color to red
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}






//     counter = 75;
//     document.getElementById("timeLeft").innerHTML = timeLeft;

//     counter = setInterval(function () {
//         timeLeft--;
//         document.getElementById("timeLeft").innerHTML = timeLeft;
//         //proceed to end the game function when timer is below 0 at any time
//         if (timeLeft <= 0) {
//             clearInterval(timer);
//             endGame();
//         }
//     }, 1000);

//     next();
// }

// start quiz
// function startQuiz() {
//     start.style.display = "none";
//     renderQuestion();
//     quiz.style.display = "block";
//     // renderProgress();
//     renderCounter();
//     TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
// }


var questions = [
    {
        question: "What does HTML stand for?",
        imgSrc: "img/html.png",
        choiceA: "Correct",
        choiceB: "Wrong",
        choiceC: "Wrong",
        correct: "A"
    }, {
        question: "What does CSS stand for?",
        imgSrc: "img/css.png",
        choiceA: "Wrong",
        choiceB: "Correct",
        choiceC: "Wrong",
        correct: "B"
    }, {
        question: "What does JS stand for?",
        imgSrc: "img/js.png",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    }
];

// create some variables
var lastQuestion = questions.length - 1;


// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    // qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}






// counter render



// checkAnwer



// answer is correct
// function answerIsCorrect() {
//     document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
// }

// // answer is Wrong
// function answerIsWrong() {
//     document.getElementById(runningQuestion).style.backgroundColor = "#f00";
// }

// score render
function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    var scorePerCent = Math.round(100 * score / questions.length);

    // choose the image based on the scorePerCent
    // var img = (scorePerCent >= 80) ? "img/5.png" :
    //     (scorePerCent >= 60) ? "img/4.png" :
    //         (scorePerCent >= 40) ? "img/3.png" :
    //             (scorePerCent >= 20) ? "img/2.png" :
    //                 "img/1.png";

    // scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + score + "</p>";
}
