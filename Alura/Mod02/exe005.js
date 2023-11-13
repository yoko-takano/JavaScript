const notas = [10, 9.5, 8, 7.5, 6];

const notasAtualizadas = notas.map((nota) => {
    return nota+1 >= 10 ? 10:nota+1;
});

console.log(notasAtualizadas);

const nomes = ["Yoko lucila", "renan janzen", "TatsuYA FELipe"];

const nomesPadrao = nomes.map((nome) => {
    return nome.toUpperCase();
});
console.log(nomesPadrao);

// quando precisamos apenas retornar um valor
const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());
console.log(nomesPadronizados);