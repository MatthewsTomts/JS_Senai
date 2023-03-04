import { situ, mediaGeral } from "./calculo.js";

var linQtd = 1 // Determina a quantidade de linhas/alunos
var notasQtd = 1 // Determina a quantidade de notas
var medias = ['']

function setLinQtd(value) {
    linQtd = value
}

function setNotasQtd(value) {
    notasQtd = value
}

function setMedias(value) {
    medias = value
}

function montarTabela(ordem) {
    // Busca o elemento div com id space, onde será feita a tabela
    var div = document.getElementById('space') 
    var dados = datasLin(ordem) // Chama a função que busca os dados digitados pelo usuário
    // Na linha abaixo é inserido a tabela nova dentro do html
    div.innerHTML = `
    <table class="table" id="tabela">
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
            ${montarLin(medias, dados[0], dados[1])} <!-- Chama a função que cria as linhas -->
            <td colspan="${notasQtd + 4}"> <!-- Cria um data cell que ocupa toda a largura da tabela -->
                <!-- Chama a função que calcula a média da sala --!>
                <output>A média geral da sala: <br>Geral: ${mediaGeral(medias)}</output>
            </td>
        </tbody>
        <p id="odd" hidden>${ordem}</p> <!-- Número que dirá qual a ordem que dados serão organizados -->
    </table>
    `
}

function datasLin(ordem) {
    var nomes = []
    var notasGeral = []

    for (var i = 0; i < linQtd; i++) {
        var eleNome = document.getElementById(`nome${i}`)
        if (eleNome && eleNome.value !== undefined) {
            nomes.push(eleNome.value)
        } else {
            nomes.push('')
        }

        var notas = []
        for (var j = 0; j < notasQtd; j++) {
            var eleNotas = document.getElementById(`not${i}${j}`)
            if (eleNotas && eleNotas.value !== undefined) {
                notas.push(eleNotas.value)
            } else {
                notas.push('')
            }
        }
        notasGeral.push(notas)
    }
    return ordernar(nomes, notasGeral, ordem)
}

function ordernar(nomes, notasGeral, ordem) {
    var lista = [];
    for (var j = 0; j < nomes.length; j++) 
        lista.push({'nome': nomes[j], 'nota': notasGeral[j], 'media': medias[j]});
    if (ordem == 2) {
        lista.sort(function(a, b) {
            return ((a.nome < b.nome) ? -1 : ((a.nome == b.nome) ? 0 : 1));
        });
    } else if (ordem != 0) {
        lista.sort(function(a, b) {
            return (a.media - b.media) * ordem;
        });
    }
    for (var k = 0; k < lista.length; k++) {
        nomes[k] = lista[k].nome;
        notasGeral[k] = lista[k].nota;
        medias[k] = lista[k].media;
    }
    return [nomes, notasGeral]
}

function montarHeadNotas() {
    var notas = ''
    for(var i = 1; i <= notasQtd; i++) {
        notas += `<th scope='col'>Nota ${i}</th>`
    }
    return notas
}

function montarLin(medias, nomes, notasGeral) {
    var linhas = ''

    for(var i = 0; i < linQtd; i++) {
        var notaInd = montarNotaLin(i, notasGeral)
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
    for(var j = 0; j < notasQtd; j++) {
        notasLin += `<td><input type="number" class="form-control" id="not${i}${j}" value="${notasGeral[i][j]}"></td>`
    }
    return notasLin
} 

export { linQtd, setLinQtd, notasQtd, setNotasQtd, medias, setMedias, montarTabela }