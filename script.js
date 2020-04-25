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
var initialsDiv = document.getElementById("initials")
var leaderboardDiv = document.getElementById("highscore-container")
var userInitialsSpan = document.querySelector("form-control")

start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    timer = setInterval(renderCounter, 1000);
    document.getElementById("welcome").hidden = true;
    // document.getElementById("highscore-container").hidden = true;

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
        question: "What is the best Coding Bootcamp EVER?",
        choiceA: "SMU Coding Bootcamp",
        choiceB: "CodingDojo",
        choiceC: "Thinkful",
        choiceD: "Bobo's Coding School",
        correct: "A"
    }, {
        question: "Who is/are the greatest TA's to ever play tha game?",

        choiceA: "Tyler",
        choiceB: "Henry",
        choiceC: "Whomever is grading this homework",
        choiceD: "A, B, & C are all correct",
        correct: "D"
    }, {
        question: "What does JS stand for?",
        choiceA: "Jolly Santa",
        choiceB: "Jerk Sandwich",
        choiceC: "JavaScript",
        choiceD: "Joint Smoker",
        correct: "C"
    }, {
        question: "What does HTML stand for?",

        choiceA: "Hercules, Tartarus, Medusa, Lachesis",
        choiceB: "Henry Taught Me Lots",
        choiceC: "How Tyler Makes (us) Learn",
        choiceD: "Hypertext Markup Language",
        correct: "D"
    }, {
        question: "What tag can be used to insert a line break or blank line in an HTML document?",

        choiceA: "br",
        choiceB: "body+",
        choiceC: "head",
        choiceD: "title",
        correct: "A"
    }, {
        question: "What element is a container for all the head elements, and may include the document title, scripts, styles, meta information, and more?",

        choiceA: "body",
        choiceB: "title",
        choiceC: "head",
        choiceD: "br",
        correct: "C"
    }, {
        question: "What tag is used to specify a section of text that provides an example of computer code?",

        choiceA: "code",
        choiceB: "caption",
        choiceC: "!DOCTYPE",
        choiceD: "embed",
        correct: "A"
    }, {
        question: "What tag is used to define a list item (in a bulleted list)?",

        choiceA: "s",
        choiceB: "li",
        choiceC: "u",
        choiceD: "ul",
        correct: "B"
    }, {
        question: "What tag is required in all HTML documents, and is used to define the title?",

        choiceA: "body",
        choiceB: "title",
        choiceC: "head",
        choiceD: "br",
        correct: "B"
    }, {
        question: "What group of tags are used to define the text headers in the body of the HTML document?",

        choiceA: "button",
        choiceB: "h1 to h6",
        choiceC: "footer",
        choiceD: "td",
        correct: "B"
    },
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
    console.log(score)
    localStorage.getItem(score)
    leaderboardRender();

}

function leaderboardRender() {
    document.getElementById("highscore-container").show;
}

function saveHighScore() {
    var initials = document.getElementById("initials-entry");
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
// leaderboard.addEventListener("click", clearScores)

function viewHighScores() {
    var initials = localStorage.getItem("initials");
    leaderboardDiv.style.display = "block";
    leaderboardDiv.innerHTML += "<p>" + score + initials + "</p>"
    userInitialsSpan.textContent = initials;
    clearInterval(leaderboard);
}

submit.addEventListener("click", function (event) {
    event.preventDefault();

    var initials = document.querySelector("initials").value;
    if (initials === "") {
        displayMessage("error", "Initials cannot be blank");
    } else {
        displayMessage("success");

        localStorage.setItem("initials", initials);
        console.log(initials)
        renderViewHighScores();

    }

})