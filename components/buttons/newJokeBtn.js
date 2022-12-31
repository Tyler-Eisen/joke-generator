import renderToDom from '../../utils/renderToDom';

const newJokeBtn = () => {
  const domString = `
  <button type="button" class="btn btn-success joke-btn" id="new-joke-btn">NEW JOKE</button>
  `;
  renderToDom('#new-joke-button', domString);
};

export default newJokeBtn;
