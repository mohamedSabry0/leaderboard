import './style.css';
import { scoresList, refreshBtn } from './dom_modules/dom_elements.js';
import populateList from './dom_modules/elements_generator.js';
import { scores as apiScores } from './api_modules/score.js';
import RefreshHandler from './dom_modules/refresh_handler.js';

// api_scores.then((list) => {
//   list.forEach((item) => { scoresList.appendChild(generateLi(item)); });
// })
populateList(apiScores, scoresList);

const refreshHandler = new RefreshHandler(apiScores, scoresList);

refreshBtn.addEventListener('click', refreshHandler);