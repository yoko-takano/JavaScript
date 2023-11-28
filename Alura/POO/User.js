export default class User {
    // propriedade privada #nome fora do construtor
    #nome
    #email
    #nascimento
    #role
    #ativo

    // Método Construtor
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    // Métodos Getters
    get nome() {
        return this.#nome
    }
    get email() {
        return this.#email
    }
    get nascimento() {
        return this.#nascimento

    }
    get role() {
        return this.#role
    }
    get ativo() {
        return this.#ativo
    }

    // Métodos Setters
    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('formato não válido')
        }
        return this.#nome = novoNome
    }
    set email(novoEmail) {
        return this.#email = novoEmail
    }


    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.#nascimento}, ${this.role}, ${this.ativo}`
    }
}
