const fetchGithubRepo = require('./fetchGithubRepo');

const inputEl = document.querySelector('#user-input');
const buttonEl = document.querySelector('#get-info-button');


buttonEl.addEventListener('click', () => {
  let userInput = inputEl.value;
  
  fetchGithubRepo(userInput, (repoData) => {
    const apiResponseDiv = document.querySelector('#api-response');

    // Getting the respository name
    const nameRepoValue = repoData.name;
    const nameElement = document.createElement('p');
    nameElement.innerText = `Repository name: ${nameRepoValue}`;
    apiResponseDiv.append(nameElement);

    // Getting the Github url
    const urlValue = repoData.html_url;
    const urlElement = document.createElement('p');
    urlElement.innerText = `Github URL: ${urlValue}`;
    apiResponseDiv.append(urlElement);

    // Getting the number of forks
    const forksValue = repoData.forks;
    const forkElement = document.createElement('p');
    forkElement.innerText = `Number of forks: ${forksValue}`;
    apiResponseDiv.append(forkElement);

    // Getting the number of forks
    const starValue = repoData.stargazers_count;
    const starElement = document.createElement('p');
    starElement.innerText = `Number of stargazers: ${starValue}`;
    apiResponseDiv.append(starElement);

    // Getting the number of forks
    const languageValue = repoData.language;
    const languageElement = document.createElement('p');
    languageElement.innerText = `Programming language: ${languageValue}`;
    apiResponseDiv.append(languageElement);

    // Getting the repo image
    const imageValue = repoData.owner.avatar_url;
    const imageElement = document.createElement('img');
    imageElement.src = imageValue;
    apiResponseDiv.append(imageElement);

    console.log(repoData);

  });
  
});




