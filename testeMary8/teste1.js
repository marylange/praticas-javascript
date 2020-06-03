const api = 'apiSaga.json';
fetch(api)
  .then(response => response.json())
  .then(data => {
    render(data);
  });
//renderizando o conteúdo
const render = (data) => {
  const mapeamentoDados = initialInformation(data);
  criarHTML(mapeamentoDados);
}
//mapeando infos iniciais do site
const initialInformation = (data) => {
  const infosAPI = data.sections.map((elemento) => {
    return {
      autores: elemento.title,
      descricaoCriadores: elemento.description,
      imagem: elemento.image,
    }
  });
  console.log('k',infosAPI);
}
//criando html para infos iniciais
const tagArticle = document.getElementsByClassName('lado-esquerdo');
console.log('tagArticle', tagArticle);
const criarHTML = (mapeamentoDados) => {
  for(let i = 0; i < mapeamentoDados.length; i += 1) {
    const tagSection = document.createElement('section');
  }
}
