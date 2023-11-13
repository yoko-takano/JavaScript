const notas = [7, 7, 8, 9];
const novasNotas = [...notas]; // stead operator ou operador de espalhamento

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}.`);
console.log(`As novas originais são ${notas}.`);