(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchGithubRepo.js
  var require_fetchGithubRepo = __commonJS({
    "fetchGithubRepo.js"(exports, module) {
      var fetchGithubRepo2 = (repoName, callback) => {
        fetch(`https://api.github.com/repos/${repoName}`).then((response) => response.json()).then((jsonData) => {
          callback(jsonData);
        });
      };
      module.exports = fetchGithubRepo2;
    }
  });

  // index.js
  var fetchGithubRepo = require_fetchGithubRepo();
  var inputEl = document.querySelector("#user-input");
  var buttonEl = document.querySelector("#get-info-button");
  buttonEl.addEventListener("click", () => {
    const userInput = inputEl.value;
    fetchGithubRepo(userInput, (repoData) => {
      const apiResponseDiv = document.querySelector("#api-response");
      const nameRepoValue = repoData.name;
      const nameElement = document.createElement("p");
      nameElement.innerText = `Repository name: ${nameRepoValue}`;
      apiResponseDiv.append(nameElement);
      const urlValue = repoData.html_url;
      const urlElement = document.createElement("p");
      urlElement.innerText = `Github URL: ${urlValue}`;
      apiResponseDiv.append(urlElement);
      const forksValue = repoData.forks;
      const forkElement = document.createElement("p");
      forkElement.innerText = `Number of forks: ${forksValue}`;
      apiResponseDiv.append(forkElement);
      const starValue = repoData.stargazers_count;
      const starElement = document.createElement("p");
      starElement.innerText = `Number of stargazers: ${starValue}`;
      apiResponseDiv.append(starElement);
      const languageValue = repoData.language;
      const languageElement = document.createElement("p");
      languageElement.innerText = `Programming language: ${languageValue}`;
      apiResponseDiv.append(languageElement);
      const imageValue = repoData.owner.avatar_url;
      const imageElement = document.createElement("img");
      imageElement.src = imageValue;
      apiResponseDiv.append(imageElement);
      console.log(repoData);
    });
  });
})();
