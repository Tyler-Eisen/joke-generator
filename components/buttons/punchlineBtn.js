import renderToDom from '../../utils/renderToDom';

const punchlineButton = () => {
  const domString = `
  <button type="button" class="btn btn-primary joke-btn" id="punchline-btn">GET PUNCHLINE</button>
  `;

  renderToDom('#joke-punchline-button', domString);
};

export default punchlineButton;
