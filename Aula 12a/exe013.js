var agora = new Date()
var diaSem = agora.getDay()

/* 
[0] Domingo
[1] Segunda-Feira
[3] Terça-Feira
[4] Quarta-Feira
[5] Quinta-Feira
[6] Sexta-Feira
[7] Sábado
*/

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break
}