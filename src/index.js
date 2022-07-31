import './style.css';
import { scoresList, refreshBtn, submitBtn } from './dom_modules/dom_elements.js';
import populateList from './dom_modules/elements_generator.js';
import { scores as apiScores } from './api_modules/score.js';
import refreshHandler from './dom_modules/refresh_handler.js';
import submitHandler from './dom_modules/submit_handler.js';

populateList(apiScores, scoresList);

// const refreshHandler = new RefreshHandler(apiScores, scoresList);

refreshBtn.addEventListener('click', refreshHandler);

submitBtn.addEventListener('click', submitHandler);