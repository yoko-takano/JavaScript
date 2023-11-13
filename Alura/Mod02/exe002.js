// Listas

const notas = [10, 6.5, 8, 7.5];
notas.push(8); // acrescenta no último elemento
notas.pop(); // retira o último elemento


console.log(notas);
console.log(notas.sort());

const alunos = ['Yoko', 'Renan', 'Tatsuya', 'Leo', 'Lara'];
alunos.splice(3, 0, "Rodrigo"); // remove na 3° posição, 1 elemento e substitui por "Rodrigo"
alunos.splice(4);
console.log(alunos);
const listaAlunosMedias = [alunos, notas];

function exibeNomeNota(aluno) {
    if (listaAlunosMedias[0].includes(aluno)) {
        // const alunos = listaAlunosMedias[0];
        // const notas = listaAlunosMedias[1];
        const [alunos, notas] = listaAlunosMedias;
        // desestruturação de listas
        const indice = alunos.indexOf(aluno);
        const mediaAluno = notas[indice];
        console.log(`${aluno} está cadastrado(a) e sua média é ${mediaAluno}.`)
    } else {
        console.log("Aluno não cadastrado!");
    }
}
exibeNomeNota('Renan');
