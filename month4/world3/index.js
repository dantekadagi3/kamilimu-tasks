let currentIndex = 0;
let correctCount = 0;
let score = 0;
let questions = [];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const blocksContainer = document.getElementById('blocks-container');
const scoreDisplay = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');
const notification = document.getElementById('notification');

// Fetch questions
fetch('http://localhost:3000/questions')
  .then(res => res.json())
  .then(data => {
    questions = data;
    createBlocks(100); // 10x10 grid
    showQuestion();
  });

// Create the 100 blocks (brick wall)
function createBlocks(count) {
  for (let i = 0; i < count; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.display = 'none';
    blocksContainer.appendChild(block);
  }
}

function showQuestion() {
  const question = questions[currentIndex];
  questionText.textContent = question.question;
  optionsContainer.innerHTML = '';
  nextBtn.disabled = true;

  question.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => handleAnswer(option === question.answer);
    optionsContainer.appendChild(btn);
  });
}

function handleAnswer(isCorrect) {
  const blocks = document.querySelectorAll('.block');

  if (isCorrect) {
    if (correctCount < blocks.length) {
      blocks[correctCount].style.backgroundColor = getRandomColor();
      blocks[correctCount].style.display = 'block';
      correctCount++;
      score++;
    }
  } else {
    if (correctCount > 0) {
      correctCount--;
      blocks[correctCount].style.display = 'none';
      score--;
    }
  }

  scoreDisplay.textContent = score;
  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    questionText.textContent = "Game Over!";
    optionsContainer.innerHTML = '';
    if (correctCount >= 100) {
      notification.style.display = 'block';
    }
  }
});

function getRandomColor() {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33EC'];
  return colors[Math.floor(Math.random() * colors.length)];
}
