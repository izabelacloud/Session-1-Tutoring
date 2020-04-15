var header = document.querySelector(".header");
var questionHolder = document.querySelector(".questionHolder");
var startButton = document.querySelector(".startButton");

var questions = [
    question = {
        title: "Commonly used data types DO NOT include",
        answer1: "1. strings",
        answer2: "2. booleans",
        answer3: "3. alerts",
        answer4: "4. numbers"
    },
    question1 = {
        title: "The condition in an if / else statement is enclosed with ________.",
        answer1: "1. quotes",
        answer2: "2. curly brackets",
        answer3: "3. parenthesis",
        answer4: "4. square brackets"
    },
    question2 = {
        title: "Arrays in JavaScript can be used to store ______.",
        answer1: "1. numbers and strings",
        answer2: "2. other arrays",
        answer3: "3. booleans",
        answer4: "4. all of the above"
    },
    question3 = {
        title: "String values must be enclosed within ______ when being assigned variables.",
        answer1: "1. commas",
        answer2: "2. curly brackets",
        answer3: "3. quotes",
        answer4: "4. parenthesis"
    },
    question4 = {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1: "1. JavaScript",
        answer2: "2. terminal/bash",
        answer3: "3. for loops",
        answer4: "4. console.log"
    }
];

// Have first start quiz button
var addQuestion = function() {
    header.textContent = questions[0].title;
    questionHolder.textContent = "";

    var ulEl = document.createElement("div");
    var liEl = document.createElement("button");
    var liEl2 = document.createElement("button");
    var liEl3 = document.createElement("button");
    var liEl4 = document.createElement("button");

    liEl.textContent = questions[0].answer1;
    liEl2.textContent = questions[0].answer2;
    liEl3.textContent = questions[0].answer3;   
    liEl4.textContent = questions[0].answer4;

    liEl.className = "answer";
    liEl.id = "q1a1";
    liEl2.className = "answer2";
    liEl2.id = "q1a2";
    liEl3.className = "answer3";
    liEl3.id = "q1a3";
    liEl4.className = "answer4";
    liEl4.id = "q1a4";
    liEl.addEventListener("click", loadNextQuestion);
    liEl2.addEventListener("click", loadNextQuestion);
    liEl3.addEventListener("click", loadNextQuestion);
    liEl4.addEventListener("click", loadNextQuestion);

    questionHolder.appendChild(ulEl);
    ulEl.appendChild(liEl);
    ulEl.appendChild(liEl2);
    ulEl.appendChild(liEl3);
    ulEl.appendChild(liEl4);

    document.body.removeChild(startButton);
    
    // Anytime someone clicks on a list element with a class of "answer", move to next page.
}





var loadNextQuestion = function() {
    header.textContent = questions[1].title;

    questionHolder.textContent = "";

    var ulEl = document.createElement("div");
    var liEl = document.createElement("button");
    var liEl2 = document.createElement("button");
    var liEl3 = document.createElement("button");
    var liEl4 = document.createElement("button");

    liEl.textContent = questions[1].answer1;
    liEl2.textContent = questions[1].answer2;
    liEl3.textContent = questions[1].answer3;   
    liEl4.textContent = questions[1].answer4;

    liEl.className = "answer";
    liEl.id = "q1a1";
    liEl2.className = "answer2";
    liEl2.id = "q1a2";
    liEl3.className = "answer3";
    liEl3.id = "q1a3";
    liEl4.className = "answer4";
    liEl4.id = "q1a4";
    liEl.addEventListener("click", loadNextQuestion2);
    liEl2.addEventListener("click", loadNextQuestion2);
    liEl3.addEventListener("click", loadNextQuestion2);
    liEl4.addEventListener("click", loadNextQuestion2);

    questionHolder.appendChild(ulEl);
    ulEl.appendChild(liEl);
    ulEl.appendChild(liEl2);
    ulEl.appendChild(liEl3);
    ulEl.appendChild(liEl4);


    // document.body.removeChild(liEl);
    // document.body.removeChild(liEl2);
    // document.body.removeChild(liEl3);
    // document.body.removeChild(liEl4);
}


var loadNextQuestion2 = function() {
    header.textContent = questions[2].title;

    questionHolder.textContent = "";

    var ulEl = document.createElement("div");
    var liEl = document.createElement("button");
    var liEl2 = document.createElement("button");
    var liEl3 = document.createElement("button");
    var liEl4 = document.createElement("button");

    liEl.textContent = questions[2].answer1;
    liEl2.textContent = questions[2].answer2;
    liEl3.textContent = questions[2].answer3;   
    liEl4.textContent = questions[2].answer4;

    liEl.className = "answer";
    liEl.id = "q1a1";
    liEl2.className = "answer2";
    liEl2.id = "q1a2";
    liEl3.className = "answer3";
    liEl3.id = "q1a3";
    liEl4.className = "answer4";
    liEl4.id = "q1a4";
    liEl.addEventListener("click", loadNextQuestion3);
    liEl2.addEventListener("click", loadNextQuestion3);
    liEl3.addEventListener("click", loadNextQuestion3);
    liEl4.addEventListener("click", loadNextQuestion3);

    questionHolder.appendChild(ulEl);
    ulEl.appendChild(liEl);
    ulEl.appendChild(liEl2);
    ulEl.appendChild(liEl3);
    ulEl.appendChild(liEl4);


    // document.body.removeChild(liEl);
    // document.body.removeChild(liEl2);
    // document.body.removeChild(liEl3);
    // document.body.removeChild(liEl4);
}


var loadNextQuestion3 = function() {
    header.textContent = questions[3].title;

    questionHolder.textContent = "";

    var ulEl = document.createElement("div");
    var liEl = document.createElement("button");
    var liEl2 = document.createElement("button");
    var liEl3 = document.createElement("button");
    var liEl4 = document.createElement("button");

    liEl.textContent = questions[3].answer1;
    liEl2.textContent = questions[3].answer2;
    liEl3.textContent = questions[3].answer3;   
    liEl4.textContent = questions[3].answer4;

    liEl.className = "answer";
    liEl.id = "q1a1";
    liEl2.className = "answer2";
    liEl2.id = "q1a2";
    liEl3.className = "answer3";
    liEl3.id = "q1a3";
    liEl4.className = "answer4";
    liEl4.id = "q1a4";
    liEl.addEventListener("click", loadNextQuestion4);
    liEl2.addEventListener("click", loadNextQuestion4);
    liEl3.addEventListener("click", loadNextQuestion4);
    liEl4.addEventListener("click", loadNextQuestion4);

    questionHolder.appendChild(ulEl);
    ulEl.appendChild(liEl);
    ulEl.appendChild(liEl2);
    ulEl.appendChild(liEl3);
    ulEl.appendChild(liEl4);


    // document.body.removeChild(liEl);
    // document.body.removeChild(liEl2);
    // document.body.removeChild(liEl3);
    // document.body.removeChild(liEl4);
}


var loadNextQuestion4 = function() {
    header.textContent = questions[4].title;

    questionHolder.textContent = "";

    var ulEl = document.createElement("div");
    var liEl = document.createElement("button");
    var liEl2 = document.createElement("button");
    var liEl3 = document.createElement("button");
    var liEl4 = document.createElement("button");

    liEl.textContent = questions[4].answer1;
    liEl2.textContent = questions[4].answer2;
    liEl3.textContent = questions[4].answer3;   
    liEl4.textContent = questions[4].answer4;

    liEl.className = "answer";
    liEl.id = "q1a1";
    liEl2.className = "answer2";
    liEl2.id = "q1a2";
    liEl3.className = "answer3";
    liEl3.id = "q1a3";
    liEl4.className = "answer4";
    liEl4.id = "q1a4";
    liEl.addEventListener("click", loadNextQuestion5);
    liEl2.addEventListener("click", loadNextQuestion5);
    liEl3.addEventListener("click", loadNextQuestion5);
    liEl4.addEventListener("click", loadNextQuestion5);

    questionHolder.appendChild(ulEl);
    ulEl.appendChild(liEl);
    ulEl.appendChild(liEl2);
    ulEl.appendChild(liEl3);
    ulEl.appendChild(liEl4);


    // document.body.removeChild(liEl);
    // document.body.removeChild(liEl2);
    // document.body.removeChild(liEl3);
    // document.body.removeChild(liEl4);
}


var loadNextQuestion5 = function() {
    header.textContent = questions[5].title;


}










// Question 1's page loads:
// When you click on any answer, page 2 loads.
// Question 2's page loads:
// When you click on any answer, page 3 loads.


// var addQuestion = function() {
    
    // for (var i = 0; i < questions.length; i++) {
    //     var currentQuestion = questions[i];
    //     console.log(currentQuestion);

    //     header.textContent = currentQuestion.title;
    // };
 
// }