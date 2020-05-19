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

1. Qual o usuário com id 14?
Resolver usando for e abordagem funcional.
Resolver com arrow function e função externa

*/

const funcComFor = (lista, idUsuario) => {
  var resultado = undefined;
  for(let i = 0; i < lista.length; i += 1) {
    if(lista[i].id === idUsuario) {
      resultado = lista[i];
      break;
    }
  }
  return resultado;
}

// console.log(funcComFor(list, 14));

const funcFuncional = (lista, idUsuario) => {
  const result = lista.find((elemento) => elemento.id === idUsuario);
  return result;
}

// console.log(funcFuncional(list, 14));

//função externa
function usuarioTemId14(usuario) {
  return usuario.id === 14;
}

const result = list.find(usuarioTemId14);
console.log(result);



