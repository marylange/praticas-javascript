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
  8. Retorno todos os usuários ativos.
  Resolver usando for e abordagem funcional.
  Resolver com arrow function e função externa

*/

const funcComFor = (lista) => {
  let retorno = [];
  for(let i = 0; i < lista.length; i += 1) {
    if(lista[i].ativo) {
      retorno.push(lista[i]);
    }
  }
  return retorno;
}

// console.log(funcComFor(list));

const funcFuncional = (lista) => {
  const retorno = lista.filter((elementoAtivo) => elementoAtivo.ativo);
  return retorno;
}

// console.log(funcFuncional(list));

//função externa
const retornarAtivos = (lista) => {
  return lista.ativo;
}

const result = list.filter(retornarAtivos);
console.log(result)