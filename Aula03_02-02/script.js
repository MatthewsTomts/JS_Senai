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
    for(i = 1; i <= notasQtd; i++) {
        notas += `<th scope='col'>Nota ${i}</th>`
    }
    return notas
}

function montarLin(medias, nomes, notasGeral) {
    var linhas = ''

    for(i = 0; i < linQtd; i++) {
        notaInd = montarNotaLin(i, notasGeral)
        linhas += `
        <tr>
        <th>${i+1}</th>
        <td><input type="text" class="form-control" id="nome${i}" placeholder="nome" value="${nomes[i]}"></td>
        ${notaInd}
        <td><output>${medias[i]}</output></td>
        <td><output>${situ(medias[i])}</output></td>
        </tr>
        `
    }
    return linhas
}

function montarNotaLin(i, notasGeral) {
    var notasLin = ''
    for(j = 0; j < notasQtd; j++) {
        notasLin += `<td><input type="number" class="form-control" id="not${i}${j}" value="${notasGeral[i][j]}"></td>`
    }
    return notasLin
}

function addLin() { 
    if (linQtd < 10){
        linQtd += 1
        medias.push('')
    } else {
        alert('Limite de linhas atingido.')
    }
    montarTabela(0)
}

function addNotas() {
    if (notasQtd < 6){
        notasQtd += 1
    } else {
        alert('Limite de notas atingido.')
    }
    medias = []
    for (i = 0; i < notasQtd; i++) {
        medias.push('')
    }
    montarTabela(0)
}

function delLin() {
    if (linQtd > 1){
        linQtd -= 1
        medias.slice(0, -1);
    } else {
        alert('Limite de linhas atingido.')
    }
    montarTabela(0)
}

function delNotas() {
    if (notasQtd > 1){
        notasQtd -= 1
    } else {
        alert('Limite de notas atingido.')
    }
    montarTabela(0)
}

function calcular() {
    medias = []
    for(i = 0; i < linQtd; i++) {
        var soma = 0
        for (j = 0; j < notasQtd; j++) {
            soma += parseInt(document.getElementById(`not${i}${j}`).value)
        }
        var med = soma / notasQtd
        if (isNaN(med)) {
            medias.splice(i, 0, '')
        } else {
            medias.splice(i, 0, med.toFixed(2))
        }
    }
    montarTabela(0)
}

function situ(media) {
    if (media == '') {
        return ''
    } if (media >= 70){
        return 'Aprovado'
    } else if (media >= 50) {
        return 'Recuperação'
    } else {
        return 'Reprovado'
    }
}

function mediaGeral(medias) {
    var soma = 0
    for(const nota of medias) {
        if (!isNaN(parseInt(nota))) {
            soma += parseInt(nota)
        } else {
            return ''
        }
    }
    return (soma / medias.length).toFixed(2)
}

function ordemAlph() {
    ordem = 2
    montarTabela(ordem)
}

function ordemNum() {
    ordem = parseInt(document.getElementById("odd").innerText) * -1
    if (ordem == 2) {
        ordem -= 1
    } else if (ordem == -2) {
        ordem += 1
    }
    if (ordem == 0) ordem = 1
    montarTabela(ordem)
}
