import { messageContainer } from './dom_elements.js';

const displayError = (error) => {
  messageContainer.className = 'error';
  messageContainer.textContent = error;
};

const displaySuccess = (message) => {
  messageContainer.className = 'success';
  messageContainer.textContent = message;
};

export {
  displayError,
  displaySuccess,
};