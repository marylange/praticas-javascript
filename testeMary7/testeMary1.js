const renderizarData = (data) => {//rendeziza os dados na tela
  //mapear o titulo (lista com títulos)
  let mapeados = mapearObj(data);
  console.log(mapeados);
   // criar a listagem de título de elementos HTML com create element
   //inserir elementos HTML criados no HTML
}
const myApi = 'https://api.jikan.moe/v3/top/anime/1/upcoming';
const getData = () => {
  const myObj = {
    method: 'GET',
    headers: { 'Accept': 'text/html' }
  }
  fetch(myApi, myObj)
    .then(response => {
      return response.json();
    })
    .then(data => {
      renderizarData(data);
    })
    .catch(error => window.alert('Houve um erro na requisição.', error))
};
// mapear o titulo (lista com títulos)
// top => title, image, type, start_date
const mapearObj = (data) => {
  const result = data.top.map((element) => {
    return {
      titulo: element.title,
      imagem: element.image_url,
      tipo: element.type,
      inicio: element.start_date,
    }
  });
  return result;
}

getData();
