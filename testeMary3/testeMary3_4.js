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
4. Gere uma lista com o id de todos os usuários
Resolver usando for e abordagem funcional.
Resolver com arrow function e função externa

 Quais os parametros e tipos de retorno do map?

O map chama a função recebida como parâmetro, testa cada elemento do array de origem e retorna os elementos em um novo array. 
*/


const funcComFor = (lista) => {
  let result = [];
  for(let i = 0; i < lista.length; i += 1) {
    result.push(lista[i].id);
  }
  return result;
}

// console.log(funcComFor(list));

const funcFuncional = (lista) => {
  const result = lista.map((elementoId) => elementoId.id);
  return result;
}
// console.log(funcFuncional(list));


//função externa
function idDosUsuarios(elemento){
  return elemento.id;
}

const result = list.map(idDosUsuarios);
console.log(result);