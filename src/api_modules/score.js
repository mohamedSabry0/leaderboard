import { displayError, displaySuccess } from '../dom_modules/display_message.js';
import gameId from './game.js';

const scoresEndPoint = 'https://us-central1-js'
+ `-capstone-backend.cloudfunctions.net/api/games/${gameId}/score`;

const scores = fetch(scoresEndPoint)
  .then((response) => {
    if (response.ok) {
      const value = response.json();
      return Promise.resolve(value);
    }
    return Promise.reject(new Error('a problem receiving the scores'));
  })
  .then((json) => json.result)
  .catch((error) => {
    displayError(error);
    return [];
  });

const addScore = (scoreRecord) => {
  fetch(scoresEndPoint, {
    method: 'POST',
    body: JSON.stringify(scoreRecord),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => displaySuccess(json));
};

export {
  scores,
  addScore,
};