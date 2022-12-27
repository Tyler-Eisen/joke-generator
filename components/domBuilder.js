import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="newJokeBtnDiv">A joke will go here</div>
  <div id="joke-setup-button"></div>
  <div id="jokePunchline"></div>
`;
  renderToDom('#app', domString);
};

export default domBuilder;
