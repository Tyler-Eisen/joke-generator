import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="newJokeBtnDiv"></div>
  <div id="joke-setup-button"></div>
  <div id="joke-field">
  <div id="setup-div"></div>
  <div id="joke-punchline-button"></div>
  <div id="punchline-div" style="display: none;"></div>
  <div id="new-joke-button"></div>
  </div>
`;
  renderToDom('#app', domString);
};

export default domBuilder;
