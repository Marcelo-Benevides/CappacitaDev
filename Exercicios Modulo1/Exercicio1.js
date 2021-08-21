const dadosClientes = [
{
nome: "Lucas",
sobrenome: "da Silva",
idade: 21,
genero: "Masculino",
plano: "full",
carencia: false,
aquisicao: "12/01/2019"
},
{
nome: "Ana",
sobrenome: "Lima",
idade: 17,
genero: "Feminino",
plano: "medium",
carencia: false,
aquisicao: "17/03/2019"
},
{
nome: "Adriana",
sobrenome: "Menezes",
idade: 27,
genero: "Feminino",
plano: "full",
carencia: true,
aquisicao: "14/09/2020"
}
]

var retornaLista = (array) => {
  var dados = dadosClientes.filter (function lista(clientes) {
    return clientes.idade >= 18 == clientes.idade < 26;
  });
  return dados
}

console.log(retornaLista(dadosClientes))