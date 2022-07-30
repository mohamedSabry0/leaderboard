import './style.css';
import scoresList from './dom_modules/dom_elements.js';
import generateLi from './dom_modules/elements_generator.js';
import { scores as api_scores, addScore} from './api_modules/score.js';

api_scores.then((list) => {
  list.forEach((item) => { scoresList.appendChild(generateLi(item)); });
})
