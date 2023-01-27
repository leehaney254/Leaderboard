import './style.css';
import getScore from './modules/getScore.js';
import postScore from './modules/postScore.js';

let array = [];
const playersTable = document.querySelector('#displayPlayers');
const refresh = document.querySelector('#refresh');
const postData = document.querySelector('form');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#scoreNum');
const warnignMessage = document.querySelector('#warning');

const updateBoard = async () => {
  array = await getScore();
  array.sort((a, b) => b.score - a.score);
  playersTable.innerHTML = '';
  array.forEach((element) => {
    playersTable.innerHTML += `
    <li><span>${element.user}</span><span class="score">${element.score}</span></li>
    `;
  });
};

const AddScore = (e) => {
  e.preventDefault();
  const namevalue = nameInput.value;
  const scoreValue = scoreInput.value;
  if (namevalue === '' || scoreValue === '') {
    warnignMessage.classList.remove('noDisplay');
    warnignMessage.classList.add('display');
  } else {
    warnignMessage.classList.remove('display');
    warnignMessage.classList.add('noDisplay');
    scoreInput.value = '';
    nameInput.value = '';
    postScore(namevalue, scoreValue);
  }
};

refresh.addEventListener('click', updateBoard);
postData.addEventListener('submit', AddScore);
window.addEventListener('load', updateBoard);
