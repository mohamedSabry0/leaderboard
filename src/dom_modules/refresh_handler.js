import populateList from './elements_generator.js';

class RefreshHandler {
  constructor(scores, listElem) {
    this.scores = scores;
    this.listElem = listElem;
  }

  handleEvent() {
    populateList(this.scores, this.listElem);
  }
}

export default RefreshHandler;