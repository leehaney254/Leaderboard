import './style.css';
// import postScore from './modules/postScore.js';
import getScore from './modules/getScore.js';

let array = [];
const playersTable = document.querySelector('#displayPlayers');
const refresh = document.querySelector('#refresh');

// postScore();
const updateBoard = async () => {
  array = await getScore();
  playersTable.innerHTML = '';
  array.forEach((element) => {
    playersTable.innerHTML += `
    <li><span>${element.user}</span><span class="score">${element.score}</span></li>
    `;
  });
};

refresh.addEventListener('click', updateBoard);
window.addEventListener('load', updateBoard);
