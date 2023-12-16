let profile = document.getElementById("main");
let search = document.getElementById("search");

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

let repos = (username) => {
  return axios.get(`https://api.github.com/users/${username}/repos`)
    .then((response) => {
      const userRepo = response.data;
      const repoDetails = [];

      userRepo.forEach(element => {
        repoDetails.push(`
          <div class="repo">
            <ul>
              <li>${element.name}</li>
            </ul>
          </div>
        `);
      });

      return repoDetails.join('');
    })
    .catch(() => {
      return `
        <div>
          <h2>No repo</h2>
        </div>
      `;
    });
}

document.addEventListener('DOMContentLoaded', function () {
  const debouncedSearch = debounce(handleSearch, 500);
  search.addEventListener('input', debouncedSearch);
});

function handleSearch() {
  const username = search.value;

  axios.get(`https://api.github.com/users/${username}`)
    .then(async (response) => {
      const userData = response.data;
      const reposHTML = await repos(username);

      const detailProfile = `
        <div class="card">            
          <img class="avatar" src="${userData.avatar_url}">
          <div class="user-info">
            <h2>${userData.login}</h2>
            <p>${userData.bio || 'No bio available'}</p>
            <ul>
              <li>${userData.followers} Followers</li>
              <li>${userData.following} Following</li>
              <li>${userData.public_repos} Repos</li>
            </ul>
              ${reposHTML}
          </div>
        </div>
      `;
      profile.innerHTML = detailProfile;
    })
    .catch(() => {
      const errorMessage = `
        <div>
          <h2>User doesn't exist</h2>
        </div>
      `;
      profile.innerHTML = errorMessage;
    });
}
