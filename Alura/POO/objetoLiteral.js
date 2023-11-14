const user = {
    nome: "Juliana",
    email: "juliana@dominio.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Yoko",
    email: "yoko@dominio.com",
    nascimento: "1995/08/22",
    role: "admin",
    ativo: true,
    criarCurso: function() {
        console.log('Curso criado com sucesso!');
    }
}

// cadeia de protótipo
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();