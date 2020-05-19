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
  6. Qual o somatório da idade de todos os usuários?
  Resolver usando for e abordagem funcional.
  Resolver com arrow function e função externa

  Quais os parametros e tipos de retorno do reduce?
A funçao é chamada um vez para cada elemento do array, recebe vários elementos e retorna somente um, sua saida é o último retorno da chamada da função.

*/


const funcComFor = (lista) => {
  let soma = 0;
  for(let i = 0; i < lista.length; i += 1) {
    soma += lista[i].idade;
  }
  return soma;
}

// console.log(funcComFor(list));

const funcFuncional = (lista) => {
  let resultReduce = lista.reduce((acumulador, valorAtual) => acumulador + valorAtual.idade, 0);
  return resultReduce;
}

// console.log(funcFuncional(list));

//função externa
const somaDasIdades = (acumulador, valorAtual) => {
  return (acumulador + valorAtual.idade);
}

const result = list.reduce(somaDasIdades, 0);
console.log(result);
