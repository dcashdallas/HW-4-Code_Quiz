var currentQuestion = 0;
var count = 10;
var questionTimer = 10;
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
var enterInitials = document.getElementById("initials-entry")
var leaderboardDiv = document.getElementById("highscore-container")

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
        count -= 9;
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
        questionTimer <= 0;
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
    if (counter == 0) {
        scoreRender();
    }
}

function scoreRender() {
    scoreDiv.style.display = "block";



    // scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + "Score: " + score + "</p>";
    scoreDiv.innerHTML += "<p>" + "Enter your initials into the field above to be listed on the leaderboard!" + "</p>"
    count = 0;
    clearInterval(timer);
    enterInitials.style.display = "block";
    console.log(score)
    localStorage.getItem(score)


}

function saveHighScore() {
    var initials = document.getElementById("initials");
    var newHighScore = {
        initials: initials.value,
        highScore: score
    };
    console.log(newHighScore);
    score.push(newHighScore);
    console.log(highScores);
    localStorage.setItem(score, JSON.stringify(highScores));
}

leaderboard.addEventListener("click", viewHighScores);

function viewHighScores() {
    leaderboardDiv.style.display = "block";
    leaderboardDiv.innerHTML += "<p>" + score + "</p>"

}