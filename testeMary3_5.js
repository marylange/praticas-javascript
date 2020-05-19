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
5. Transforme os objetos para gerar a saida desejada.
Resolver usando for e abordagem funcional.
Resolver com arrow function e função externa
*/
// [{idAtual: 12, nomeReal: "Clerton"}, {idAtual: 13, nomeReal: "Mary"}, {idAtual: 14, nomeReal: "Joana"}, {idAtual: 15, nomeReal: "José"}]

const funcComFor = (lista) => {
  const result = [];
  for(let i = 0; i < lista.length; i += 1) {
    const modifica = {
      idAtual: lista[i].id,
      nomeReal: lista[i].nome,
    }
    result.push(modifica);
  }
  return result;
}

// console.log(funcComFor(list));

const funcFuncional = (lista) => {
  const result = lista.map((elemento) => {
    return {
      idAtual: elemento.id,
      nomeReal: elemento.nome,
    }
  })
  return result;
}

// console.log(funcFuncional(list));

//função externa
const modificaIdENome = (lista) => {
  return {
    idAtual: lista.id,
    nomeReal: lista.nome,
  }
}

const result = list.map(modificaIdENome);
console.log(result);