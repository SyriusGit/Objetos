/*********************************************************************************************************
const aluno = {
    nome: "Henri dos Santos Miranda",
    idade: 17,
    email: "henridoss.miranda@gmail.com",
}

alert(`Nome: ${aluno.nome}, idade: ${aluno.idade}, email: ${aluno.email}`)
/********************************************************************************************************

const bicicleta = {
    cor: "Azul",
    marchas: 21,
    estilo: "Speed",
}

console.log(bicicleta["estilo"], bicicleta["marchas"])

bicicleta.marchas = 18;

console.log(bicicleta["estilo"], bicicleta["marchas"])
/*********************************************************************************************************

//Exercício 1:

const filme = {
    diretor: "Quentin Tarantino",
    nome: "Django Livre",
    ano: 2012,
    elenco: [" Jamie Foxx", " Leonardo DiCaprio", " Quentin Tarantino", " Christoph Waltz", " Samuel L Jackson"],
    assistido: "Sim, muitas vezes..."
}

alert(`Diretor: ${filme.diretor} \n\n Nome: ${filme.nome} \n\n Ano: ${filme.ano} \n\n Elenco: ${filme["elenco"]} \n\n Assistido: ${filme["assistido"]}`)

/*********************************************************************************************************

//Exercício 2:

const pessoa = {
    nome: "Henri",
    idade: 17,
    generoMusical: "Rock"
}

alert(`"O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}"`)

/*********************************************************************************************************

const professores = [
    {nome: 'Andrei', modulo: 1},
    {nome: 'Fernando', modulo: 2}
]
console.log(professores)
console.log(professores[1])
console.log(professores[1].nome)

//********************************

const curso = {
    nome: "Frontend", //String
}
curso.numeroEstudantes = 50; //Adicionando atributo ao objeto
curso['numeroEstudantes'] = 80;

console.log(curso.nome) //Frotend

/*********************************************************************************************************/

const novoFilme = {
    diretor: "Quentin Tarantino",
    nome: "Django Livre",
    ano: 2012,
    elenco: [" Jamie Foxx", " Leonardo DiCaprio", " Christoph Waltz", " Samuel L Jackson"],
    personagens: ["Django", "Steven", "Dr. King Schultz", "Canlvin Candie"],
    assistido: "Sim, muitas vezes..."
}

alert(`Diretor: ${novoFilme.diretor} \n\n Nome: ${novoFilme.nome} \n\n Ano: ${novoFilme.ano} \n\n Assistido: ${novoFilme["assistido"]}`)
alert(`${novoFilme.elenco[0]} -- ${novoFilme.personagens[0]} \n
${novoFilme.elenco[1]} -- ${novoFilme.personagens[3]} \n
${novoFilme.elenco[2]} -- ${novoFilme.personagens[2]} \n
${novoFilme.elenco[3]} -- ${novoFilme.personagens[1]} \n`)

novoFilme.elenco[0] = "Xuxa";

alert(`************************************************
*${novoFilme.elenco[0]} -- ${novoFilme.personagens[0]} \n*
*${novoFilme.elenco[1]} -- ${novoFilme.personagens[3]} \n*
*${novoFilme.elenco[2]} -- ${novoFilme.personagens[2]} \n*
*${novoFilme.elenco[3]} -- ${novoFilme.personagens[1]} \n************************************************`)

