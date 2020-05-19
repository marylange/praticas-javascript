const apiUrl = 'https://api.jikan.moe/v3/top/anime/1/upcoming';
const request = () => {
  const myObj = {
    method: 'GET',
    headers: { 'Accept': 'text/plain' }
  };

  fetch(apiUrl, myObj)
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

