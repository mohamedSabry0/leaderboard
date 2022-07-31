const scoresList = document.getElementsByClassName('scores-list')[0];
const messageContainer = document.getElementsByClassName('message')[0];
const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');

const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');


export {
  messageContainer,
  scoresList,
  refreshBtn,
  submitBtn,
  nameInput,
  scoreInput
};