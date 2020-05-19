fetch("apiSaga.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data;
  });

const initialArticle = (data) => {
  const info = data[0].map((elemento) => {
    return {
      creators: elemento.title,
    }
  })
}
