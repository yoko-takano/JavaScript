function parimpar(n){
    if (n % 2 == 0){
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let res = parimpar(24)
console.log(res)
console.log(parimpar(223))