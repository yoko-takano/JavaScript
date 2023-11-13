const {edGalho, edFolha} = require('./arrays');

function juntaListas(lista1, lista2) {
    
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let posicaoAtualFinal = 0;

    while (posicaoAtualLista1 < lista1.length &&  posicaoAtualLista2 < lista2.length) {

        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];

        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[posicaoAtualFinal] = produtoAtualLista1;
            posicaoAtualLista1++;
        } else {
            listaFinal[posicaoAtualFinal] = produtoAtualLista2;
            posicaoAtualLista2++;
        }
        posicaoAtualFinal++;
    }

    while (posicaoAtualLista1 < lista1.length) {
        listaFinal[posicaoAtualFinal] = lista1[posicaoAtualLista1];
        posicaoAtualFinal++;
        posicaoAtualLista1++;
    }

    while (posicaoAtualLista2 < lista2.length) {
        listaFinal[posicaoAtualFinal] = lista2[posicaoAtualLista2];
        posicaoAtualFinal++;
        posicaoAtualLista2++;
    }
    
    return listaFinal;
}

console.log(juntaListas(edGalho, edFolha));