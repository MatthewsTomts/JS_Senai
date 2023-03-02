var aluno = new Object()

aluno.nome = 'Joaquim'
aluno.situacao = 'aprovado'
aluno.notaUm = 50
aluno.notaDois = 50
aluno.notaTres = 50

var carro = {
    marca: 'ford',
    modelo:'mustang',
    cor: 'azul'

}

for(const x in carro){
    console.log(x + ":" + carro[x] )
}


var conta = new Object()

conta.nome = 'Zezinho'
conta.cpf = '1111111111'
conta.valor = 0.1

for(const x in conta){
    console.log(x + ":" + conta[x] )
}


conta = {dividas : 'não'}

for(const x in conta){
    console.log(x + ":" + conta[x] )
}
// console.log(aluno.nome)
// console.log(carro.marca)