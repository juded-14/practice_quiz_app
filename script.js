// contains all of the questions + answers
const allQuestions = [
    {
      content: "Which of the following is not a JavaScript Framework?",
      answers: ["Python Script", "JQuery", "NodeJS", "None of the above"],
      correctAnswer: 0,
    },
    {
      content: "What is the full form of DOM in JavaScript?",
      answers: [
        "Distributed Object Model",
        "Document Object Model",
        "Desktop Object Model",
        "Displayable Object Model",
      ],
      correctAnswer: 1,
    },
    {
      content: "What is the correct syntax for adding comments in JavaScript?",
      answers: [
        "<!--This is a comment-->",
        "*/This is a comment",
        "//This is a comment",
        "**This is a comment",
      ],
      correctAnswer: 2,
    },
    {
      content: "What is the correct way to write a JavaScript array?",
      answers: [
        'var colors = "red", "green", "blue";',
        'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue");',
        'var colors = ["red", "green", "blue"];',
        'var colors = (1:"red", 2:"green", 3:"blue");',
      ],
      correctAnswer: 2,
    },
    {
      content:
        "Which built-in method returns the character at the specified index?",
      answers: ["get()", "charAt()", "indexOf()", "None of the above"],
      correctAnswer: 1,
    },
  ];
  
  let title = document.getElementById("title");
  let context = document.getElementById("context");
  let beginBtn = document.getElementById("begin-btn");
  let nextBtn = document.getElementById("next-btn");
  let retakeBtn = document.getElementById("retake-btn");
  let question_element = document.getElementById("question");
  let all_answers_element = document.getElementById("answers");
  let currentIndex = 0;
  let score = 0;
  let selectedIndex = null;
  let correctIndex = null;
  
  beginBtn.addEventListener("click", () => {
    beginBtn.style.display = "none";
    context.style.display = "none";
    question_element.style.display = "block";
    all_answers_element.style.display = "block";
    displayQuestion(allQuestions[currentIndex]);
  });
  
  nextBtn.addEventListener("click", () => {
    if (correctIndex === selectedIndex) {
      score++;
      console.log("Score:", score);
    }
    currentIndex++;
    clearQuestion();
    nextBtn.style.display = "none";
    if (currentIndex === allQuestions.length) {
      endQuiz();
    } else {
      displayQuestion(allQuestions[currentIndex]);
    }
  });
  
  retakeBtn.addEventListener("click", () => {
    retakeBtn.style.display = "none";
    currentIndex = 0;
    score = 0;
    title.innerText = "Take a quiz!";
    displayQuestion(allQuestions[currentIndex]);
  });
  
  function displayQuestion(question) {
    console.log("Question:", question.content);
    console.log("Correct Answer:", question.correctAnswer);
  
    correctIndex = question.correctAnswer;
    question_element.innerText = question.content;
    for (let answer of question.answers) {
      let answer_element = document.createElement("div");
      answer_element.innerText = answer;
      answer_element.addEventListener("click", () => {
        clearHighlight();
        answer_element.classList.add("highlight");
        selectedIndex = question.answers.indexOf(answer_element.innerText);
        console.log("Selected Index:", selectedIndex);
        nextBtn.style.display = "block";
      });
      all_answers_element.appendChild(answer_element);
    }
  }
  
  function clearQuestion() {
    // remove question text
    question_element.innerText = "";
    while (all_answers_element.firstChild) {
      all_answers_element.removeChild(all_answers_element.lastChild);
    }
  }
  
  function clearHighlight() {
    for (let answer of all_answers_element.children) {
      answer.classList.remove("highlight");
    }
  }
  
  function endQuiz() {
    title.innerText = "You finished!";
    question_element.innerText = `You scored ${score}/5`;
    retakeBtn.style.display = "block";
  }

  