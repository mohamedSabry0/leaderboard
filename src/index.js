import './style.css';
import scores from './api_modules/get_scores.js';
import scoresList from './dom_modules/dom_elements.js';
import generateLi from './dom_modules/elements_generator.js';
import test from './api_modules/game';


scores.forEach((item) => { scoresList.appendChild(generateLi(item)); });