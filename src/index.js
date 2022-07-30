import './style.css';

const scores = [
  {name: 'Name1', score: '262'},
  {name: 'Name3', score: '252'},
  {name: 'Name2', score: '22'},
  {name: 'Name4', score: '242'},
  {name: 'Name', score: '212'},
]

const scoresList = document.getElementsByClassName('scores-list')[0]

const generateLi = (scoreItem) => {
  const li = document.createElement('li');
  const name = document.createElement('span');
  const score = document.createElement('span');

  name.textContent = `${scoreItem.name}: `;
  score.textContent = scoreItem.score;

  li.append(name, score);
  console.log(li)
  return li;
}

scores.forEach(item => {scoresList.appendChild(generateLi(item))})