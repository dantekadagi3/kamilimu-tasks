let currentQuestion = 0;
let score = 0;
let questions = [];

const questionEl = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const scoreEl = document.getElementById("score");

document.addEventListener("DOMContentLoaded", () => {
  fetch('http://localhost:3000/questions')  
    .then(res => res.json())
    .then(data => {
      questions = data;
      showQuestion();
    })
    .catch(err => {
      questionEl.textContent = "Failed to load questions.";
      console.error("Error fetching questions:", err);
    });

  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      questionEl.textContent = "Quiz complete!";
      optionsDiv.innerHTML = "";
      nextBtn.style.display = "none";
      restartBtn.style.display = "inline-block";
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    scoreEl.textContent = "Score: " + score;
    restartBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
    showQuestion();
  });
});

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => checkAnswer(btn, q.answer));
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(button, correctAnswer) {
  const allButtons = document.querySelectorAll("#options button");
  allButtons.forEach(btn => btn.disabled = true);

  if (button.textContent === correctAnswer) {
    button.style.backgroundColor = "lightgreen";
    score++;
  } else {
    button.style.backgroundColor = "salmon";
  }

  scoreEl.textContent = "Score: " + score;
}
