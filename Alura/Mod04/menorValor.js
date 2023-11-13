const livros = require('./listaLivros');

function menorValor(arrayProdutos, posicaoInicial) {
    
    let maisBarato = posicaoInicial;
    
    for (let atual = posicaoInicial; atual < arrayProdutos.length; atual++) {
        if (arrayProdutos[atual].preco < livros[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;