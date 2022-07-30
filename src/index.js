import './style.css';
import { scores } from './get_scores';
import { scoresList } from './dom_elements';
import { generateLi } from './elements_generator';


scores.forEach(item => {scoresList.appendChild(generateLi(item))})