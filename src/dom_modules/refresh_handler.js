import { getScores } from '../api_modules/score.js';
import { scoresList } from './dom_elements.js';
import populateList from './elements_generator.js';

const refreshHandler = {
  handleEvent() {
    const scores = getScores();
    populateList(scores, scoresList);
  }
}

export default refreshHandler;