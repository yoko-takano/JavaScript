const livros = require("./listaLivros");
const menorValor = require("./menorValor");

for (let atual = 0; atual < livros.length; atual++) {

    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log('livro atual', livros[atual]);
    console.log('posicao atual', atual);
    let livroMenorPreco = livros[menor];
    console.log('livro menor preco', livros[menor]);

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;

}

console.log(livros);