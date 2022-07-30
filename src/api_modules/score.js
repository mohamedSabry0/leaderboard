import gameId from "./game.js";

const scoresEndPoint =`https://us-central1-js`+
`-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

const scores = fetch(scoresEndPoint)
.then((response) => {
  if(response.ok){
    const value = response.json();
    return Promise.resolve(value);
  } 
  return Promise.reject('test value');
})
.then((json) => json.result)
.catch((error) => {
  console.log(error)
  return [];
}
);



const addScore = (scoreRecord) => {
  fetch(scoresEndPoint, {
  method: 'POST',
  body: JSON.stringify(scoreRecord),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

}

export {
  scores,
  addScore
}