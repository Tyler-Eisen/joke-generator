import jokeSetupBtn from '../components/buttons/jokeSetupBtn';
import domBuilder from '../components/domBuilder';
import domEvents from '../Events/domEvents';

const startApp = () => {
  domBuilder();
  jokeSetupBtn();
  domEvents();
};

export default startApp;
