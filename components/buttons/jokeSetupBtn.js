import renderToDom from '../../utils/renderToDom';

const jokeSetupBtn = () => {
  const domString = `
<button type="button" class="btn btn-danger" id="setup-btn">Get a Joke</button>
`;
  renderToDom('#joke-setup-button', domString);
};

export default jokeSetupBtn;
