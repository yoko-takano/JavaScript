function User(nome, email) {
    this.nome = nome;
    this.email = email;
    // propriedades x parâmetro

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`;
    }
}

// const novoUser = new User("Yoko", "yoko@dominio.com");
// console.log(novoUser.exibirInfos());

// function Admin(role) {
//     User.call(this, "Yoko", "yoko@dominio.com");
//     this.role = role || "estudante";
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin');
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role);

// objeto literal:
const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },
    
    exibirInfos: function () {
        return this.nome
    }
}

const novoUser = Object.create(user);
// console.log(novoUser.exibirInfos("Yoko"));
// console.log(user.isPrototypeOf(novoUser));
novoUser.init("Yoko", "yoko@dominio.com")
console.log(novoUser.exibirInfos())