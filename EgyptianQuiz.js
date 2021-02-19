	/* Author:       Alexandra Wheeler             */

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const a = document.getElementById("A");
const b = document.getElementById("B");
const c = document.getElementById("C");
const d = document.getElementById("D");
const progress = document.getElementById("progress");
const scoreContainer = document.getElementById("scoreContainer");
const start = document.getElementById("start");

// Creates the array for questions
let questions = [
    {
        question : "1. How long was Peppy II's reign?",
        a : "94 years",
        b : "48 years",
        c : "3 months",
		d : "28 years",
        correct : "A"
    },{
        question : "2. What was the name of Cleopatra's younger sister?",
        a : "Berenice",
        b : "Cleopatra",
        c : "Arsinoe",
		d : "Nefertari",
        correct : "C"
    },{
        question : "3. Which culture named the Sphinx?",
        a : "Egyptians",
        b : "Romans",
        c : "Persians",
		d : "Greeks",
        correct : "D"
	},{
        question : "4. Egyptians believed that cats carried the divine essence of _____.",
        a : "Pharaoh",
        b : "Bastet",
        c : "Ptah",
		d : "God",
        correct : "B"
	},{
        question : "5. To test for pregnancy, Egyptian women would pee on ____.",
        a : "Barley",
        b : "A grape",
        c : "A stick",
		d : "A jellyfish",
        correct : "A"
	},{
        question : "6. _____ is the name of a popular strategy board game that was played in Ancient Egypt. It is said to be an ancestor of Backgammon.",
        a : "Chess",
        b : "Senet",
        c : "Karuta",
		d : "Tavli",
        correct : "B"
	},{
        question : "7. A Pharaoh by the name of ______ was known as a heretic for establishing a monotheistic religion to worship the sun god Aten.",
        a : "Djoser",
        b : "Narmer",
        c : "Khufu",
		d : "Akhenaten",
        correct : "D"
	},{
        question : "8. The main reason that Ancient Egyptian civilization was so successful was the _____.",
        a : "Pyramids",
        b : "Nile River",
        c : "Pharaohs",
		d : "Religions",
        correct : "B"
		},{
    question : "9. What is one thing that was invented by Ancient Egyptians?",
        a : "Toothpaste",
        b : "Soap",
        c : "Beer",
		d : "Cookies",
        correct : "A"
		},{
	question : "10. The world's earliest known surviving _______ was signed by Ramses the Great.",
        a : "Autograph",
        b : "Peace Treaty",
        c : "Book",
		d : "Statue",
        correct : "B"
    }
];

// Initialize variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

// Displays a question
function displayQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    a.innerHTML = q.a;
    b.innerHTML = q.b;
    c.innerHTML = q.c;
	d.innerHTML = q.d;
}

start.addEventListener("click",startQuiz);

// Start quiz
function startQuiz(){
    start.style.display = "none";
    displayQuestion();
    quiz.style.display = "block";
    checkProgress();
}

// Check progress
function checkProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}


// Check Answer
function checkAnswer(answer){
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
    }else{
    }
	document.getElementById(runningQuestion).style.backgroundColor = "black";
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        displayQuestion();
    }else{
        // end the quiz and show the score
        displayScore();
    }
}


// Display the score
function displayScore(){
    scoreContainer.style.display = "block";
    
	let scoreMsg = "";
    // Calculate the percentage of correct questions
    const scorePerCent = Math.round(100 * score/questions.length);
	
	if (scorePerCent >= 90) {
		scoreMsg = "Wow! You are a master when it comes to knowledge on Ancient Egypt! Fantastic job!";
	}
	else if (scorePerCent >= 80) {
		scoreMsg = "You definitely know a lot about Ancient Egypt. Well done!";
	}
	else if (scorePerCent >= 70) {
		scoreMsg = "You know a good amount about Ancient Egypt. Great job!";
	}
	else if (scorePerCent >= 60) {
		scoreMsg = "You know a decent amount about Ancient Egypt.";
	}
	else
	{
	}
    
    scoreContainer.innerHTML += "<p>You got "+ scorePerCent +"%</p>" + scoreMsg;
	quiz.style.display = "none";
}

// Restarts the quiz
function restartQuiz(){
	runningQuestion = 0;
	count = 0;
	score = 0;
	qIndex = 0;
    start.style.display = "block";
	scoreContainer.style.display = "none";
	quiz.style.display = "none";
	progress.innerHTML = "";
	scoreContainer.innerHTML = "";
}