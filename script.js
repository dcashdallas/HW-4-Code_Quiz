var currentQuestion = 0;
var count = 60;
var questionTimer = 60;
var gaugeWidth = 150;
var gaugeUnit = gaugeWidth / questionTimer;
var timer = 0;
var score = 0;
var question = document.getElementById("question");
// var qImg = document.getElementById("qImg");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var scoreDiv = document.getElementById("scoreContainer");
var enterInitials = document.getElementById("initials")

start.addEventListener("click", startQuiz);


function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    timer = setInterval(renderCounter, 1000);
    document.getElementById("welcome").hidden = true;
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        score += 10;

    } else {
        count -= 5
    }
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        renderQuestion();
    } else {
        window.clearInterval(timer);
        scoreRender();
    }
}

function renderCounter() {
    if (count <= questionTimer) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count--
    } else {
        timer <= 0;
        clearInterval(timer)
        scoreRender;


        // answerIsWrong();
        if (currentQuestion < lastQuestion) {
            currentQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(count);
            scoreRender();
        }


    }
}

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
    var q = questions[currentQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    // qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    // var scorePerCent = Math.round(100 * score / questions.length);

    // choose the image based on the scorePerCent
    // var img = (scorePerCent >= 80) ? "img/5.png" :
    //     (scorePerCent >= 60) ? "img/4.png" :
    //         (scorePerCent >= 40) ? "img/3.png" :
    //             (scorePerCent >= 20) ? "img/2.png" :
    //                 "img/1.png";

    // scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + "Score: " + score + "</p>";
    scoreDiv.innerHTML += "<p>" + "Enter your Initials above to be listed on the leaderboard." + "</p>"
    count = 0;
    clearInterval(timer);
    enterInitials.style.display = "block";

}


