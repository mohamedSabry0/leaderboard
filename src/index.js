import './style.css';
import scores from './api_modules/get_scores.js';
import scoresList from './dom_modules/dom_elements.js';
import generateLi from './dom_modules/elements_generator.js';
import { scores as api_scores, addScore} from './api_modules/score.js';

// scores.forEach((item) => { addScore(item) })
api_scores.then((list) => {
  list.forEach((item) => { scoresList.appendChild(generateLi(item)); });
})
// .then((result)=>console.log(result))
