const notas = [10, 6.5, 8, 7.5];
let soma = 0;
let tot = notas.length;

// sintaxe de for of 
for (let nota of notas) {
    soma += nota;
}
media = soma/tot;
console.log(`A média é ${media}`);

// sintaxe de for each 
let soma2 = 0;
notas.forEach(function(nota, indice){
    soma2 += nota;
    console.log(indice);
});
media2 = soma2/tot;
console.log(`A média é ${media}`);