const list = [
    {
        id: 12,
        nome: "Clerton",
        idade: 33,
        estado: 'Minas Gerais',
        ativo: true,
        nomeDosFilhos: [
          "Mariazinha",
          "Joãozim",
          "Pedrim"
        ]
    },
    {
        id: 13,
        nome: "Mary",
        idade: 32,
        estado: 'Minas Gerais',
        ativo: false,
        nomeDosFilhos: [
          "Jiquinha",
          "Juquinha",
          "Joquinha"
        ]
    },
    {
        id: 14,
        nome: "Joana",
        idade: 8,
        estado: "Campinas",
        ativo: false,
        nomeDosFilhos: [
          "Luiza",
          "Luiz",
          "Luziada"
        ]
    },
    {
        id: 15,
        nome: "José",
        idade: 14,
        estado: "Curitiba",
        ativo: true,
        nomeDosFilhos: [
          "Coisa",
          "Doido",
          "Louco"
        ]
    }
];

/*
  10. Retorne uma listagem com o nome de todos os filhos.
  Resolver usando for e abordagem funcional.
  Resolver com arrow function e função externa
*/


const funcComFor = (lista) => {
  let result = [];
  for(let i = 0; i < lista.length; i += 1) {
    result.push(lista[i].nomeDosFilhos);
  }
  return result;
}

// console.log(funcComFor(list));

const funcFuncional = (lista) => {
  const retorno = lista.map((elementoFilhos) => elementoFilhos.nomeDosFilhos);
  return retorno;
}

// console.log(funcFuncional(list));

//função externa
const nomeDeTodosOsFilhos = (lista) => {
  return lista.nomeDosFilhos;
}

const result = list.map(nomeDeTodosOsFilhos);
console.log(result);

