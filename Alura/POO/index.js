import User from "./User.js";
import Docente from "./Docente.js"
import Admin from "./Admin.js"

const novoUser = new User('Yoko', 'yoko@dominio', '1995-08-22')

const novoAdmin = new Admin('Renan', 'renan@dominio', '1998-01-23')
console.log(novoAdmin.nome)
novoAdmin.nome = 'Tatsuya'
console.log(novoAdmin.nome)
console.log(novoAdmin.exibirInfos())

const novoDocente = new Docente('Tatsuya', 'tatsuya@dominio', '2010-08-24')
console.log(novoDocente.exibirInfos())