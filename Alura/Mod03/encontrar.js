const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}
const encontrado = encontrar(clientes, "nome", "Kirby");
console.log(encontrado);

const encontrado2 = encontrar(clientes, "email", "cmacgrayg@unc.edu");
console.log(encontrado2);

const encontrado3 = encontrar(clientes, "telefone", "3569848931");
console.log(encontrado3);