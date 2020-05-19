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
2. Quais usuários tem mais que 30 anos?
Resolver usando for e abordagem funcional.
Resolver com arrow function e função externa

Quais os parametros e tipos de retorno do filter?

A função recebida como parâmetro testa cada elemento e retorna true ou false. Sua saida é um array contendo os elementos true.
*/


const funcFuncional = (lista, idadeUsuarios) => {
  const armazena = lista.filter((elementoIdade) => elementoIdade.idade > idadeUsuarios);
  return armazena;
}

// console.log(funcFuncional(list, 30));

const funcComFor = (lista, idadeUsuarios) => {
  let usuarios = [];
  for(let i = 0; i < lista.length; i += 1) {
    if(lista[i].idade > idadeUsuarios) {
      usuarios.push(lista[i]);
    };
  };
  return usuarios;
};

// console.log(funcComFor(list, 30));

//função externa
function usuarioComMaisDe30(usuario) {
  return usuario.idade > 30;
}

const result = list.filter(usuarioComMaisDe30);
console.log(result);