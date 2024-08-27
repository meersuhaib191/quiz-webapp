let questions = [

    {
        question: "What is the most popular programming language used for web development?",
        options: ["Java", "Python", "JavaScript", "C++"],
        correct: 2
    },
    {
        question: "What is the acronym for the protocol used to transfer data over the internet?",
        options: ["HTTP", "FTP", "SMTP", "TCP/IP"],
        correct: 0
    },
    {
        question: "Which of the following is NOT a type of database?",
        options: ["Relational", "NoSQL", "Graph", "Cloud"],
        correct: 3
    },
    {
        question: "What is the term for a program or software that is free to use, modify, and distribute?",
        options: ["Open-source", "Closed-source", "Freeware", "Shareware"],
        correct: 0
    },
    {
        question: "Which of the following is a type of algorithm used for sorting data?",
        options: ["Bubble sort", "Merge sort", "Quick sort", "All of the above"],
        correct: 3
    },
    {
        question: "What is the term for a network of devices connected to the internet?",
        options: ["Intranet", "Extranet", "Internet of Things (IoT)", "World Wide Web"],
        correct: 2
    },
    {
        question: "Which of the following is a type of computer memory that temporarily stores data?",
        options: ["RAM", "ROM", "Cache", "Hard drive"],
        correct: 0
    },
    {
        question: "What is the purpose of the `this` keyword in JavaScript?",
        options: ["To refer to the current object", "To refer to the parent object", "To refer to the global object", "To refer to the window object"],
        correct: 0
    },
    {
        question: "What is the difference between `null` and `undefined` in JavaScript?",
        options: ["`null` is a primitive value, while `undefined` is an object", "`null` is an object, while `undefined` is a primitive value", "`null` is a value that represents the absence of any object value, while `undefined` is a value that represents an uninitialized variable", "`null` is a value that represents an uninitialized variable, while `undefined` is a value that represents the absence of any object value"],
        correct: 2
    },
    {
        question: "What is the purpose of the `async/await` syntax in JavaScript?",
        options: ["To handle errors in asynchronous code", "To make asynchronous code look synchronous", "To improve the performance of asynchronous code", "To make synchronous code look asynchronous"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

document.getElementById("question").textContent = questions[currentQuestion].question;
document.getElementById("option1").textContent = questions[currentQuestion].options[0];
document.getElementById("option2").textContent = questions[currentQuestion].options[1];
document.getElementById("option3").textContent = questions[currentQuestion].options[2];
document.getElementById("option4").textContent = questions[currentQuestion].options[3];

document.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", (e) => {
        let selectedOption = e.target.textContent;
        let correctOption = questions[currentQuestion].options[questions[currentQuestion].correct];
        if (selectedOption === correctOption) {
            score++;
        }
        document.getElementById("score").textContent = `Score: ${score}`;
        currentQuestion++;
        if (currentQuestion < questions.length) {
            document.getElementById("question").textContent = questions[currentQuestion].question;
            document.getElementById("option1").textContent = questions[currentQuestion].options[0];
            document.getElementById("option2").textContent = questions[currentQuestion].options[1];
            document.getElementById("option3").textContent = questions[currentQuestion].options[2];
            document.getElementById("option4").textContent = questions[currentQuestion].options[3];
        } else {
            document.getElementById("question").textContent = "Quiz Complete!";
            document.getElementById("option1").style.display = "none";
            document.getElementById("option2").style.display = "none";
            document.getElementById("option3").style.display = "none";
            document.getElementById("option4").style.display = "none";
            document.getElementById("next-button").style.display = "none";
            document.getElementById("score").textContent = `Final Score: ${score} / ${questions.length}`;
        }
    });
});

document.getElementById("next-button").addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestion].question;
        document.getElementById("option1").textContent = questions[currentQuestion].options[0];
        document.getElementById("option2").textContent = questions[currentQuestion].options[1];
        document.getElementById("option3").textContent = questions[currentQuestion].options[2];
        document.getElementById("option4").textContent = questions[currentQuestion].options[3];
    } else {
        document.getElementById("question").textContent = "Quiz Complete!";
        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none";
        document.getElementById("option3").style.display = "none";
        document.getElementById("option4").style.display = "none";
        document.getElementById("next-button").style.display = "none";
        document.getElementById("score").textContent = `Final Score: ${score} / ${questions.length}`;
    }
});