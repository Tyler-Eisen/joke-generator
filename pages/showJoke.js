import getJoke from '../api/jokeData';
// import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const makeJoke = () => {
  // clearDom();
  getJoke().then((response) => {
    console.warn(response);
    const { setup, delivery } = response;
    renderToDom('#setup-div', setup);
    renderToDom('#punchline-div', delivery);
  });
};

export default makeJoke;
