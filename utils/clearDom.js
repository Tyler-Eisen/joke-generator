const clearDom = () => {
  document.querySelector('#joke-field').innerHTML = `
  <div id="setup-div"></div>
  <div id="joke-punchline-button"></div>
  <div id="punchline-div" style="display: none;"></div>
  <div id="new-joke-button"></div>
  </div>`;
};

export default clearDom;
