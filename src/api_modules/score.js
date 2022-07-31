import { displayError, displaySuccess } from '../dom_modules/display_message.js';
import gameId from './game.js';

const scoresEndPoint = 'https://us-central1-js'
+ `-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

const getScores = async () => {
  const result = await fetch(scoresEndPoint)
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
  return result;
};

const scores = getScores();

const addScore = (scoreRecord) => {
  fetch(scoresEndPoint, {
    method: 'POST',
    body: JSON.stringify(scoreRecord),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (response.ok) {
        const value = response.json();
        return Promise.resolve(value);
      }
      return Promise.reject(new Error('a problem saving the new score'));
    })
    .catch((error) => {
      displayError(error);
    })
    .then((json) => displaySuccess(json.result));
};

export {
  scores,
  addScore,
  getScores
};