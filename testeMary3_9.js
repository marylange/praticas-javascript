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
  9. Retorne todos os usuários que tenham um filho que começe com a letra L
  Resolver usando for e abordagem funcional.
  Resolver com arrow function e função externa
*/

function hasElementStartingWithL(filhos) {
  return filhos.filter((usuario) => usuario.startsWith('L')).length > 0
}

function funcComFor (lista) {
  const resultado = [];
  for(let i = 0; i < lista.length; i += 1) {
    const filhos = lista[i].nomeDosFilhos;
    if(hasElementStartingWithL(filhos)) {
      resultado.push(lista[i]);
    }
  }

  return resultado;
}

// console.log(funcComFor(list));

const funcFuncional = (lista) => {
  const result = lista.filter(usuario => hasElementStartingWithL(usuario.nomeDosFilhos));
  return result;
}

console.log(funcFuncional(list));

// console.log(coisa.filter(elemento => elemento.startsWith('L')));

// if (coisa.filter(elemento => elemento.startsWith('L')).length > 0) {
//   console.log("Passou");
// }
