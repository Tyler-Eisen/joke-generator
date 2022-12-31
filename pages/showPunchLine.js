// import renderToDOM from '../utils/renderToDom';
// import getJoke from '../api/jokeData';

const showPunchline = () => {
  // getJoke().then((response) => {
  //   console.warn(response);
  //   const { delivery } = response;
  //   renderToDOM('#punchline-div', delivery);
  // });
  const punchlineDiv = document.getElementById('punchline-div');
  if (punchlineDiv.style.display === 'none') {
    punchlineDiv.style.display = 'block';
  }
};

export default showPunchline;
