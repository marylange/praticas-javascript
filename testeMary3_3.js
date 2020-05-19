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
        estado: 'Campinas',
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
        estado: 'Curitiba',
        ativo: true,
        nomeDosFilhos: [
          "Coisa",
          "Doido",
          "Louco"
        ]
    }
];

/*
3. Quais usuários não são de Minas Gerais?
Resolver usando for e abordagem funcional.
Resolver com arrow function e função externa

Quais os parametros e tipos de retorno do filter?
A função recebida como parâmetro testa cada elemento e retorna true ou false. Seu output é um array contendo todos os elementos que deram true.

*/


const funcComFor = (lista, local) => {
  let result = [];
  for(let i = 0; i < lista.length; i += 1) {
    if(lista[i].estado !== local) {
      result.push(list[i]);
    }
  }
  return result;
}

// console.log(funcComFor(list, 'Minas Gerais'));

function isMinas(usuario) {
  return elementoLocal.estado !== 'Minas Gerais';
}

const funcFuncional = (lista, local) => {
  const result = lista.filter((elementoLocal) => isMinas(elementoLocal));
  return result;
}

// console.log(funcFuncional(list, 'Minas Gerais'));

//função externa
function estadoDiferenteDeMinas(usuario){
  return usuario.estado !== 'Minas Gerais';
}

const result = list.filter(estadoDiferenteDeMinas);
console.log(result);
