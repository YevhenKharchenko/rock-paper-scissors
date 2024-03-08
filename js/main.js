import '/modern-normalize/modern-normalize.css';

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
const optionChoiseWrapper = document.querySelector('.choise-wrapper');
const options = ['rock', 'paper', 'scissors'];
let countAi = 0;
let countHuman = 0;

optionChoiseWrapper.addEventListener('click', onOptionBtnClick);

function onOptionBtnClick(e) {
  if (e.target.nodeName !== 'IMG') return;
  const randomChoise = Math.floor(Math.random() * options.length);
  const aiChoise = options[randomChoise];
  humanArmImg.style.transform = 'rotate(-50deg)';
  aiArmImg.style.transform = 'rotate(50deg)';

  if (e.target === rockImg && aiChoise === 'rock') {
    humanArmImg.src = '/img/human-rock.png';
    aiArmImg.src = '/img/ai-rock.png';
    resultText.textContent = "IT'S A DRAW";
  }

  if (e.target === rockImg && aiChoise === 'paper') {
    humanArmImg.src = '/img/human-rock.png';
    aiArmImg.src = '/img/ai-paper.png';
    countAi++;
    resultText.textContent = 'YOU LOOSE!';
  }

  if (e.target === rockImg && aiChoise === 'scissors') {
    humanArmImg.src = '/img/human-rock.png';
    aiArmImg.src = '/img/ai-scissors.png';
    countHuman++;
    resultText.textContent = 'YOU WIN!';
  }

  if (e.target === paperImg && aiChoise === 'rock') {
    humanArmImg.src = '/img/human-paper.png';
    aiArmImg.src = '/img/ai-rock.png';
    countHuman++;
    resultText.textContent = 'YOU WIN!';
  }

  if (e.target === paperImg && aiChoise === 'paper') {
    humanArmImg.src = '/img/human-paper.png';
    aiArmImg.src = '/img/ai-paper.png';
    resultText.textContent = "IT'S A DRAW";
  }

  if (e.target === paperImg && aiChoise === 'scissors') {
    humanArmImg.src = '/img/human-paper.png';
    aiArmImg.src = '/img/ai-scissors.png';
    countAi++;
    resultText.textContent = 'YOU LOOSE!';
  }

  if (e.target === scissorsImg && aiChoise === 'rock') {
    humanArmImg.src = '/img/human-scissors.png';
    aiArmImg.src = '/img/ai-rock.png';
    countAi++;
    resultText.textContent = 'YOU LOOSE!';
  }

  if (e.target === scissorsImg && aiChoise === 'paper') {
    humanArmImg.src = '/img/human-scissors.png';
    aiArmImg.src = '/img/ai-paper.png';
    countHuman++;
    resultText.textContent = 'YOU WIN!';
  }

  if (e.target === scissorsImg && aiChoise === 'scissors') {
    humanArmImg.src = '/img/human-scissors.png';
    aiArmImg.src = '/img/ai-scissors.png';
    resultText.textContent = "IT'S A DRAW";
  }

  scoreAi.textContent = countAi;
  scoreHuman.textContent = countHuman;
  optionChoiseWrapper.style.display = 'none';
  restartBtnWrapper.style.display = 'flex';
}

restartBtn.addEventListener('click', onRestartBtnClick);

function onRestartBtnClick(e) {
  countAi = 0;
  countHuman = 0;
  scoreAi.textContent = 0;
  scoreHuman.textContent = 0;
  resultText.textContent = '';
  humanArmImg.src = './img/Human-Arm-Idle.png';
  aiArmImg.src = './img/AI-Arm-Idle.png';
  restartBtnWrapper.style.display = 'none';
  optionChoiseWrapper.style.display = 'flex';
  humanArmImg.style.transform = 'rotate(0deg)';
  aiArmImg.style.transform = 'rotate(0deg)';
}

nextRoundBtn.addEventListener('click', onNextRoundBtnClick);

function onNextRoundBtnClick(e) {
  restartBtnWrapper.style.display = 'none';
  optionChoiseWrapper.style.display = 'flex';
  humanArmImg.src = './img/Human-Arm-Idle.png';
  aiArmImg.src = './img/AI-Arm-Idle.png';
  resultText.textContent = '';
  humanArmImg.style.transform = 'rotate(0deg)';
  aiArmImg.style.transform = 'rotate(0deg)';
}
