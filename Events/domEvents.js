import getJoke from '../api/jokeData';
// import makeJoke from '../api/punchlineData';
import newJokeBtn from '../components/buttons/newJokeBtn';
import punchlineButton from '../components/buttons/punchlineBtn';
import makeJoke from '../pages/showJoke';
import showPunchline from '../pages/showPunchLine';
import clearDom from '../utils/clearDom';
// import clearDom from '../utils/clearDom';

const domEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    // Get a Joke
    if (e.target.id.includes('setup-btn')) {
      console.warn('Setup clicked');
      // clearDom();
      getJoke().then(makeJoke);
      punchlineButton();
    }

    if (e.target.id.includes('punchline-btn')) {
      // makeJoke();
      showPunchline();
      newJokeBtn();
    }
    if (e.target.id.includes('new-joke-btn')) {
      clearDom();
      // getJoke().then(showSetup);
      // punchlineButton();
    }
  });
};

export default domEvents;
