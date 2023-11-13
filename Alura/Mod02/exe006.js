const alunos = ["Yoko", "Renan", "Tatsuya", "Maria"];
const medias = [6, 9.5, 8.0, 10];

const reprovados = alunos.filter((_, indice)=>{
    return medias[indice] < 7;
});
// se a gente não quiser o primeiro parâmetro, pode colocar _
console.log(reprovados);