const generateLi = (scoreItem) => {
  const li = document.createElement('li');
  const name = document.createElement('span');
  const score = document.createElement('span');

  name.textContent = `${scoreItem.name}: `;
  score.textContent = scoreItem.score;

  li.append(name, score);
  return li;
};

export default generateLi;