var linQtd = 1 // Define a quantidade de linhas
var notasQtd = 1 // Define a quantidade de notas
var medias = [''] // Armazena as medias dos alunos
var ordem = -1 // Determina a ordem de organização dos dados

function montarTabela(ordem) {
    var tabela = document.getElementById('tabela') // Busca o elemento table que irá armazenar a tabela
    dados = datasLin(ordem) // Busca os dados que estão na tabela
    tabela.innerHTML = `
    <thead>
        <tr>
        <th scope="col">N°</th>
        <th scope="col">Nome</th>
        ${montarHeadNotas()} <!-- Chama a função que cria o cabeçalho -->
        <th scope="col">Média</th>
        <th scope="col">Situação</th>
        </tr>
    </thead>
    <tbody id="tbody">
        <!-- Chama a função que monta as linhas, passando as medias dos alunos, os nomes e as notas -->
        ${montarLin(medias, dados[0], dados[1])} 
        <td colspan="${notasQtd + 4}">
            <!-- Cria uma data cell que ocupa toda a largura da tabela -->
            <output>A média geral da sala: <br>Geral: ${mediaGeral(medias)}</output>
        </td>
    </tbody>
    <!-- Determina qual será a ordem de organização -->
    <p id="odd" hidden>${ordem}</p>
    `
}

function datasLin(ordem) {
    var nomes = []
    var notasGeral = []

    // A cada loop irá pegar os nomes dos alunos
    for (i = 0; i < linQtd; i++) {
        // Busca o elemento que armazena os nomes de acordo com o id, que é determinado pela linha
        var eleNome = document.getElementById(`nome${i}`)
        // Verifica se o elemento é undefined, se não for armazena na lista de nomes
        if (eleNome && eleNome.value !== undefined) {
            nomes.push(eleNome.value)
        } else {
            nomes.push('')
        }

        var notas = []
        // A cada loop irá pegar as notas do aluno atual
        for (j = 0; j < notasQtd; j++) {
            // Busca o elemento que armazena os nomes de acordo com o id, que é determinado pela linha e coluna
            var eleNotas = document.getElementById(`not${i}${j}`)
            // Verifica se o elemento é undefined, se não for armazena na lista de notas
            if (eleNotas && eleNotas.value !== undefined) {
                notas.push(eleNotas.value)
            } else {
                notas.push('')
            }
        }
        // Armazena as notas do aluno atual na lista de notas da sala, criando uma matriz
        notasGeral.push(notas)
    }
    
    // Cria uma lista que armazenará os dados de cada linha
    var lista = [];
    for (var j = 0; j < nomes.length; j++) 
        lista.push({'nome': nomes[j], 'nota': notasGeral[j], 'media': medias[j]});
    // Utilizando a lista criada organizará as notas de acordo com os nomes, 
    // que serão ordenados em ordem alfabética
    // se ordem for == 2, se não se for diferente de 0 e igual a -1, é descrescente
    // se for igual a 1, é crescente
    if (ordem == 2) {
        lista.sort(function(a, b) {
            return ((a.nome < b.nome) ? -1 : ((a.nome == b.nome) ? 0 : 1));
        });
    } else if (ordem != 0) {
        lista.sort(function(a, b) {
            return (a.media - b.media) * ordem;
        });
    }

    // Utilizando a lista das linhas, irá atualizar as listas de nome, notas da sala e medias
    for (var k = 0; k < lista.length; k++) {
        nomes[k] = lista[k].nome;
        notasGeral[k] = lista[k].nota;
        medias[k] = lista[k].media;
    }
    return [nomes, notasGeral]
}

function montarHeadNotas() {
    var notas = ''
    // Monta um head pras notas de acordo com a quantidade de notas
    // que é definido pelo notasQtd
    for(i = 1; i <= notasQtd; i++) {
        notas += `<th scope='col'>Nota ${i}</th>`
    }
    return notas
}

function montarLin(medias, nomes, notasGeral) {
    var linhas = ''

    // Cria as linhas da tabela
    for(i = 0; i < linQtd; i++) {
        // Monta as notas da linha atual, utilizando as notas da sala, e o index linha atual
        notaInd = montarNotaLin(i, notasGeral) 
        linhas += `
        <tr>
        <!-- Cria a numeração da linha -->
        <th>${i+1}</th>
        <!-- Cria a linha utilizando o nome da linha atual, e criando o id de acordo com a linha -->
        <td><input type="text" class="form-control" id="nome${i}" placeholder="nome" value="${nomes[i]}"></td>
        <!-- Adiciona a linha criada na função montarNotaLin -->
        ${notaInd}
        <!-- Adiciona a média do aluno de acordo com a linha -->
        <td><output>${medias[i]}</output></td>
        <!-- Chama a função que verifica qual a situação do aluno atual -->
        <td><output>${situ(medias[i])}</output></td>
        </tr>
        `
    }
    return linhas
}

function montarNotaLin(i, notasGeral) {
    var notasLin = ''
    for(j = 0; j < notasQtd; j++) {
        // Cria as data cells das notas, com o id criado a partir da linha e coluna que ele taá
        notasLin += `<td><input type="number" class="form-control" id="not${i}${j}" 
        value="${notasGeral[i][j]}"></td>`
        // Busca a nota que está na linha e na coluna atual
    }
    return notasLin
}

function addLin() { 
    // Verifica se as linhas já atingiram o limite de 10
    if (linQtd < 10){
        // Caso não adiciona mais uma
        linQtd += 1
        medias.push('')
    } else {
        // Se sim, avisa ao usuário
        alert('Limite de linhas atingido.')
    }
    montarTabela(0)
}

function addNotas() {
    // Verifica se as notas já atingiram o limite de 6
    if (notasQtd < 6){
        // Caso não adiciona mais uma e esvazia as médias
        notasQtd += 1
        medias = []
        for (i = 0; i < notasQtd; i++) {
            medias.push('')
        }
    } else {
        // Se sim, avisa ao usuário
        alert('Limite de notas atingido.')
    }

    
    montarTabela(0)
}

function delLin() {
    // Verifica se há apenas uma linha na tabela
    if (linQtd > 1){
        // Se tiver mais, remove uma e retira a ultima média da lista
        linQtd -= 1
        medias.slice(0, -1);
    } else {
        // Se não avisa ao usuário que não é permitido remover mais linhas
        alert('Limite de linhas atingido.')
    }
    montarTabela(0)
}

function delNotas() {
    // Verifica se há apenas uma nota na tabela
    if (notasQtd > 1){
        // Se tiver mais, remove uma
        notasQtd -= 1
    } else {
        // Se não avisa ao usuário que não é permitido remover mais notas
        alert('Limite de notas atingido.')
    }
    montarTabela(0)
}

function calcular() {
    medias = []
    // Cria um loop de acordo com as linhas
    for(i = 0; i < linQtd; i++) {
        var soma = 0
        // Soma todas as notas daquela linhas, fazendo a busca através do id
        for (j = 0; j < notasQtd; j++) {
            soma += parseInt(document.getElementById(`not${i}${j}`).value)
        }
        // Logo após calcula a média
        var med = soma / notasQtd

        // Caso a média seja NaN, ou seja, esteja faltando uma nota na linha, a média continua vazia
        if (isNaN(med)) {
            medias.splice(i, 0, '')
        } else {
            // Se não adiciona a média a lista de média com duas casas decimais
            medias.splice(i, 0, med.toFixed(2))
        }
    }
    montarTabela(0)
}

function situ(media) {
    // Verifica a nota do aluno
    // Caso esteja vazio, a situação será vazia também
    if (media == '') {
        return ''
    } else if (media >= 70){
        // Caso a média esteja acima de 70, a situação será Aprovado
        return 'Aprovado'
    } else if (media >= 50) {
        // Caso a média esteja acima de 50 e abaixo de 70, a situação será Recuperação
        return 'Recuperação'
    } else {
        // Caso a média esteja abaixo de 50, a situação será Reprovado
        return 'Reprovado'
    }
}

function mediaGeral(medias) {
    var soma = 0
    // Faz um loop no medias
    for(const nota of medias) {
        // Verifica se a nota é válida
        if (!isNaN(parseInt(nota))) {
            // Caso seja adiciona em soma
            soma += parseInt(nota)
        } else {
            // Caso não seja retorna '' e a média geral fica vázia
            return ''
        }
    }
    // Caso o for chegue ao final, é calculado a media da sala
    return (soma / medias.length).toFixed(2)
}

function ordemAlph() {
    // Se o botão Ordem Alfabética for apertado a tabela é gerado com ordem alfabética
    ordem = 2
    montarTabela(ordem)
}

function ordemNum() {
    // Se o botão Ordem Crescente/Descrescent for apertado a tabela é gerado em ordem Crescente/Descrescente
    // Muda a ordem anterior
    ordem = parseInt(document.getElementById("odd").innerText) * -1

    // Caso a ordem anterior tenha sido alfabética
    if (ordem == -2) {
        ordem += 1
    }

    // Caso a ordem for 0, ou seja mantendo a ordem atual, ele troca para ordem crescente
    if (ordem == 0) ordem = 1
    montarTabela(ordem)
}
