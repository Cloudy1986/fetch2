const fetchGithubRepo = require('./fetchGithubRepo');

const inputEl = document.querySelector('#user-input');
const buttonEl = document.querySelector('#get-info-button');


buttonEl.addEventListener('click', () => {
  const userInput = inputEl.value;
  

  fetchGithubRepo(userInput, (repoData) => {

    const apiResponseDiv = document.querySelector('#api-response');
    const forksValue = repoData.forks;
    
    const forkElement = document.createElement('p');
    forkElement.innerText = `Number of forks: ${forksValue}`;
    apiResponseDiv.append(forkElement);

    // console.log(repoData.forks);
    // document.write(JSON.stringify(repoData.forks));
    
  });
  
});




