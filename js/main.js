import aiPaper from '../img/ai-paper.png';
import aiRock from '../img/ai-rock.png';
import aiScissors from '../img/ai-scissors.png';
import aiArm from '../img/AI-Arm-Idle.png';
import humanPaper from '../img/human-paper.png';
import humanRock from '../img/human-rock.png';
import humanScissors from '../img/human-scissors.png';
import humanArm from '../img/Human-Arm-Idle.png';

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const rockImg = document.querySelector('.rock-img');
const paperImg = document.querySelector('.paper-img');
const scissorsImg = document.querySelector('.scissors-img');
const aiArmImg = document.querySelector('.ai-arm-img');
const humanArmImg = document.querySelector('.human-arm-img');
const resultText = document.querySelector('.result-text');
const nextRoundBtn = document.querySelector('.next-round-btn');
const restartBtn = document.querySelector('.restart-btn-img');
const restartBtnWrapper = document.querySelector('.restart-btn-wrapper');
const scoreAi = document.querySelector('.score-ai');
const scoreHuman = document.querySelector('.score-human');
const optionChoiceWrapper = document.querySelector('.choice-wrapper');
const options = ['rock', 'paper', 'scissors'];

let countAi = 0;
let countHuman = 0;

optionChoiceWrapper.addEventListener('click', onOptionBtnClick);

function onOptionBtnClick(e) {
  if (e.target.nodeName !== 'IMG') return;
  const randomChoice = Math.floor(Math.random() * options.length);
  const aiChoice = options[randomChoice];
  humanArmImg.style.transform = 'rotate(-50deg)';
  aiArmImg.style.transform = 'rotate(50deg)';

  if (e.target === rockImg && aiChoice === 'rock') {
    humanArmImg.src = humanRock;
    aiArmImg.src = aiRock;
    resultText.textContent = "IT'S A DRAW";
  }

  if (e.target === rockImg && aiChoice === 'paper') {
    humanArmImg.src = humanRock;
    aiArmImg.src = aiPaper;
    countAi++;
    resultText.textContent = 'YOU LOOSE!';
  }

  if (e.target === rockImg && aiChoice === 'scissors') {
    humanArmImg.src = humanRock;
    aiArmImg.src = aiScissors;
    countHuman++;
    resultText.textContent = 'YOU WIN!';
  }

  if (e.target === paperImg && aiChoice === 'rock') {
    humanArmImg.src = humanPaper;
    aiArmImg.src = aiRock;
    countHuman++;
    resultText.textContent = 'YOU WIN!';
  }

  if (e.target === paperImg && aiChoice === 'paper') {
    humanArmImg.src = humanPaper;
    aiArmImg.src = aiPaper;
    resultText.textContent = "IT'S A DRAW";
  }

  if (e.target === paperImg && aiChoice === 'scissors') {
    humanArmImg.src = humanPaper;
    aiArmImg.src = aiScissors;
    countAi++;
    resultText.textContent = 'YOU LOOSE!';
  }

  if (e.target === scissorsImg && aiChoice === 'rock') {
    humanArmImg.src = humanScissors;
    aiArmImg.src = aiRock;
    countAi++;
    resultText.textContent = 'YOU LOOSE!';
  }

  if (e.target === scissorsImg && aiChoice === 'paper') {
    humanArmImg.src = humanScissors;
    aiArmImg.src = aiPaper;
    countHuman++;
    resultText.textContent = 'YOU WIN!';
  }

  if (e.target === scissorsImg && aiChoice === 'scissors') {
    humanArmImg.src = humanScissors;
    aiArmImg.src = aiScissors;
    resultText.textContent = "IT'S A DRAW";
  }

  scoreAi.textContent = countAi;
  scoreHuman.textContent = countHuman;
  optionChoiceWrapper.style.display = 'none';
  restartBtnWrapper.style.display = 'flex';
}

restartBtn.addEventListener('click', onRestartBtnClick);

function onRestartBtnClick(e) {
  countAi = 0;
  countHuman = 0;
  scoreAi.textContent = 0;
  scoreHuman.textContent = 0;
  resultText.textContent = '';
  humanArmImg.src = humanArm;
  aiArmImg.src = aiArm;
  restartBtnWrapper.style.display = 'none';
  optionChoiceWrapper.style.display = 'flex';
  humanArmImg.style.transform = 'rotate(0deg)';
  aiArmImg.style.transform = 'rotate(0deg)';
}

nextRoundBtn.addEventListener('click', onNextRoundBtnClick);

function onNextRoundBtnClick(e) {
  restartBtnWrapper.style.display = 'none';
  optionChoiceWrapper.style.display = 'flex';
  humanArmImg.src = humanArm;
  aiArmImg.src = aiArm;
  resultText.textContent = '';
  humanArmImg.style.transform = 'rotate(0deg)';
  aiArmImg.style.transform = 'rotate(0deg)';
}
