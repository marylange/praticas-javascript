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

/*
1. Qual o usuário com id 14?
Resolver usando for e abordagem funcional.
*/

/*
const funcFuncional = (lista, id) => {
  const armazena = lista.find((elemento) => elemento.id === id);
  return armazena;
}
console.log(funcFuncional(list, 14));

const funcComFor = (lista, id) => {
  let retorno = null;
  for(let i = 0; i < lista.length; i += 1) {
    if(lista[i].id === id) {
      retorno = lista[i];
    }
  }
  return retorno;
}

console.log(funcComFor(list, 14));
*/

// {id: 14, nome: "Joana", idade: 8, estado: "Campinas"}

/*
2. Quais usuários tem mais que 30 anos?
Resolver usando for e abordagem funcional.
*/

/*
const funcFuncional = (lista, idade) => {
  const armazena = lista.filter((elemento) => elemento.idade > idade);
  return armazena;
}

console.log(funcFuncional(list, 30));

const funcComFor = (lista, idade) => {
  let armazena = [];
  for(let i = 0; i < lista.length; i += 1) {
    if(lista[i].idade > idade) {
      armazena.push(lista[i]);
    }
  }
  return armazena;
}

console.log(funcComFor(list, 30));
*/

/*
3. Quais usuários não são de Minas Gerais?
Resolver usando for e abordagem funcional.
*/

/*
const funcFuncional = (lista, local) => {
  const armazena = lista.filter((elemento) => elemento.estado !== local);
  return armazena;
}

console.log(funcFuncional(list, 'Minas Gerais'));

const funcComFor = (lista, local) => {
  let retorno = [];
  for(let i = 0; i < lista.length; i += 1) {
    if(lista[i].estado !== local) {
      retorno.push(lista[i]);
    }
  }
  return retorno;
}

console.log(funcComFor(list, 'Minas Gerais'));
*/

/*
4. Gere uma lista com o id de todos os usuários
Resolver usando for e abordagem funcional.
*/


const funcFuncional = (lista) => {
  const armazena = lista.map((elementoId) => elementoId.id);
  return armazena;
}

console.log(funcFuncional(list));

const funcComFor = (lista) => {
  let retorno = [];
  for(let i = 0; i < lista.length; i += 1) {
    retorno.push(lista[i].id);
  }
  return retorno;
}

console.log(funcComFor(list));


/*
5. Transforme os objetos para gerar a saida desejada.
Resolver usando for e abordagem funcional.
*/

/*
const funcFuncional = (lista) => {
  const armazena = lista.map((elemento) => {
    return {
      idAtual: elemento.id,
      nomeReal: elemento.nome,
    }
  })
  return armazena;
 }

 console.log(funcFuncional(list));

const funcComFor = (lista) => {
  let armazena = [];
  let chaveTrocada = null;
  for(let i = 0; i < lista.length; i += 1) {
    chaveTrocada = {
      idAtual: lista[i].id,
      nomeReal: lista[i].nome,
    }
    armazena.push(chaveTrocada);
  }
  return armazena;
}

console.log(funcComFor(list));
*/

// [{idAtual: 12, nomeReal: "Clerton"}, {idAtual: 13, nomeReal: "Mary"}, {idAtual: 14, nomeReal: "Joana"}, {idAtual: 15, nomeReal: "José"}]

/*
  6. Qual o somatório da idade de todos os usuários?
  Resolver usando for e abordagem funcional.
*/

/*
const funcFuncional = (lista) => {
  const armazena = lista.reduce((acumulador, valorAtual) => acumulador + valorAtual.idade, 0);
  return armazena;
}

console.log(funcFuncional(list));

const funcComFor = (lista) => {
  let soma = 0;
  for(let i = 0; i < lista.length; i += 1) {
    soma += lista[i].idade;
  }
  return soma;
}

console.log(funcComFor(list));
*/


/*
  Todos os metodos funcionais, recebem uma função como parametro.
  map, filter, find, reduce
  Todas essas funções de parametros, recebem parametros e retornam valores.
  1 - Quais os parametros e tipos de retorno do map?

  2 - Quais os parametros/tipos e tipos de retorno do filter?

  3 - Quais os parametros/tipos e tipos de retorno do find?

  4 - Quais os parametros/tipos e tipos de retorno do deduce?


*/