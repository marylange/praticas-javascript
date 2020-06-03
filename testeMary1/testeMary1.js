const list = [
    {
        id: 12,
        nome: "Clerton",
        idade: 33,
        estado: "Minas Gerais"
    },
    {
        id: 13,
        nome: "Mary",
        idade: 32,
        estado: "Minas Gerais"
    },
    {
        id: 14,
        nome: "Joana",
        idade: 8,
        estado: "Campinas"
    },
    {
        id: 15,
        nome: "José",
        idade: 14,
        estado: "Curitiba"
    }
];



let result = null;
/*
1. Qual o usuário com id 14?
Resolver usando for e abordagem funcional.
*/


for(let i = 0; i < list.length; i++){
  if(list[i].idade === 14){
    result = list[i];
  }
}
console.log('for1',result);

result = list.filter((buscaIdade) => buscaIdade.idade === 14);
console.log('filter1',result);


// {id: 14, nome: "Joana", idade: 8, estado: "Campinas"}

/*
2. Quais usuários tem mais que 30 anos?
Resolver usando for e abordagem funcional.
*/


result = [];
for(let i = 0; i < list.length; i++){
  if(list[i].idade > 30){
    result.push(list[i]);
  }
}
console.log('for2',result);

result = list.filter((buscaIdade) => buscaIdade.idade > 30);
console.log('filter2',result);


// [{id: 12, nome: "Clerton", idade: 33, estado: "Minas Gerais"}, {id: 13, nome: "Mary", idade: 32, estado: "Minas Gerais"}]

/*
3. Quais usuários não são de Minas Gerais?
Resolver usando for e abordagem funcional.
*/


result = [];
for(let i = 0; i < list.length; i++) {
  if(list[i].estado !== 'Minas Gerais'){
    result.push(list[i]);
  }
}
console.log('for3',result);

result = list.filter((local) => local.estado !== 'Minas Gerais');
console.log('filter3',result);


// [{id: 15, nome: "Joana", idade: 8, estado: "Campinas"}, {id: 15, nome: "José", idade: 14, estado: "Curitiba"}]

/*
4. Gere uma lista com o id de todos os usuários
Resolver usando for e abordagem funcional.
*/


result = [];
for(let i = 0; i < list.length; i++){
  if(list[i].id){
    result.push(list[i].id);
  }
}
console.log('for4',result);

result = [];
list.forEach((usuario) => result.push(usuario.id));

console.log('forEach4',result);
// [12, 13, 14, 15]


/*
5. Transforme os objetos para gerar a saida desejada.
Resolver usando for e abordagem funcional.
*/


result = [];
let trocas;
for(let i = 0; i < list.length; i++){
  trocas = {
    idAtual: list[i].id,
    nomeReal: list[i].nome,
  }
  result.push(trocas);
}

console.log('for5',result);

result = [];
let trocas;
list.forEach((troca) => {
  trocas = {
    idAtual: troca.id,
    nomeReal: troca.nome,
  }
  result.push(trocas);
})
console.log('forEach5',result);


// [{idAtual: 12, nomeReal: "Clerton"}, {idAtual: 13, nomeReal: "Mary"}, {idAtual: 14, nomeReal: "Joana"}, {idAtual: 15, nomeReal: "José"}]

/*
  6. Qual o somatório da idade de todos os usuários?
  Resolver usando for e abordagem funcional.
*/


for(let i = 0; i < list.length; i++) {
  if(list[i].idade){
    result = result + list[i].idade;
  }
}
console.log('for6',result);

result = list.reduce((acum, valor) => {
 return acum + valor.idade;
}, 0);
console.log('reduce6',result);
// console.log(result); // 87
