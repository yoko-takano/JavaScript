const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 }

pessoa.cpf = "999.939.323-03";
pessoa.seguroSocial = "1";
console.log(pessoa);
novoCPF = pessoa.cpf.substring(0,4);
console.log(novoCPF);