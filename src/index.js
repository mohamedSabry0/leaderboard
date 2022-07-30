import './style.css';
import scores from './get_scores.js';
import scoresList from './dom_elements.js';
import generateLi from './elements_generator.js';

scores.forEach((item) => { scoresList.appendChild(generateLi(item)); });