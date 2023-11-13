const dados = require("./cliente.json");
console.log(dados);
console.log(typeof dados);

// forma de escrever a partir de um código javascript comum
// um texto no formato texto

const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);
console.log(typeof objetoCliente);