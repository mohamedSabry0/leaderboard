import { addScore } from '../api_modules/score.js';
import { nameInput, scoreInput } from './dom_elements.js';

const submitHandler = {
  handleEvent() {
    addScore({ user: nameInput.value, score: scoreInput.value });
    nameInput.value = '';
    scoreInput.value = '';
  },
};

export default submitHandler;