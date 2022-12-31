import showPunchline from '../pages/showPunchLine';
import renderToDom from '../utils/renderToDom';
import getJoke from './jokeData';

const makeJoke = () => {
  getJoke().then((response) => {
    const { setup, delivery } = response;
    renderToDom('#setup-div', setup);
    showPunchline(delivery);
  });
};

export default makeJoke;
