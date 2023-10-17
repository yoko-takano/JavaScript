var num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é ${num}.`)
console.log(num)

num[5] = 1
console.log(num)

num.push(8)
console.log(num)
var a = num.length
console.log(`O vetor tem ${a} posições!`)
var b = num.sort()
console.log(`O vetor em ordem crescente é ${b}`)
var tam = num.length

for (var c = 0; c < tam ; c++) {
    console.log(`A posição ${c} tem o valor ${b[c]}`)
}

for (let pos in b) {
    console.log(`A posição ${pos} tem o valor ${b[pos]}`)
}

console.log(num.indexOf(9))
console.log(num.indexOf(4))