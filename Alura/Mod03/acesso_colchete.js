const cliente = {
    nome: "André",
    idade: "32",
    cpf: "888.888.990-39",
    email: "andre@dominio.com"
};

console.log(`O nome do cliente é ${cliente["nome"]} e tem ${cliente["idade"]} anos.`);
console.log(`Os 3 primeiros do CPF são ${cliente.cpf.substring(0,3)}.`)

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}.`);
});