const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@dominio.com",
    telefone: ["984459885","984099831"]
}

console.log(cliente.telefone);

cliente.enderecos = [
    {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap. 399"
    }
]
cliente.enderecos.push({
    rua: "R. Joseph Climber",
    numero: 1323,
    apartamento: false
})

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
    )

console.log(listaApenasApartamentos);