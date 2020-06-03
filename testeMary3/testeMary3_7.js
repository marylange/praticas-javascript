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
  7. Retorne o usuário que tenha um filho chamado Luiza.
  Resolver usando for e abordagem funcional.
  Resolver com arrow function e função externa
*/

const funcComFor = (lista, nomeFilho) => {
  for(let i = 0; i < lista.length; i += 1) {
    if(lista[i].nomeDosFilhos.includes(nomeFilho)) {
      return lista[i];
    }
  }
  return false;
}

// console.log(funcComFor(list, "Luiza"));

const funcFuncional = (lista, nomeFilho) => {
 const result = lista.find((usuario) => usuario.nomeDosFilhos.includes(nomeFilho));
 return result;
}

// console.log(funcFuncional(list, 'Luiza'));

//função externa
const procuraFilho = (lista) => {
  return lista.nomeDosFilhos.includes('Luiza');
}

const result = list.find(procuraFilho);
console.log(result);