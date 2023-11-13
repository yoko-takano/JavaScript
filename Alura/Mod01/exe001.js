nome = "Yoko";
idade = 28;
frase = `Meu nome é ${nome} e tenho ${idade} anos.`;

console.log(frase);

// Retorno "undefined"
function comParametro(param) {
    console.log(param);
}
comParametro();

// Exemplo de Arrow Function
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
}