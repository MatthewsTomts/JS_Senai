var linQtd = 1
var notasQtd = 1
var medias = ['']

function montarTabela() {
    var tabela = document.getElementById('tabela')
<<<<<<< HEAD
    var nomes = datas()[0]
    var notasGeral = ['']
    notasGeral.splice(0, 1, datas(0)[1])
=======
    var nomes = []
    var notasGeral = []
    for (i = 0; i < linQtd; i++) {
        var eleNome = document.getElementById(`nome${i}`)
        if (eleNome && eleNome.value !== undefined) {
            nomes.push(eleNome.value)
        } else {
            nomes.push('')
        }

        var notas = []
        for (j = 0; j < notasQtd; j++) {
            var eleNotas = document.getElementById(`not${i}${j}`)
            if (eleNotas && eleNotas.value !== undefined) {
                notas.push(eleNotas.value)
            } else {
                notas.push('')
            }
        }
        notasGeral.push(notas)
    }
>>>>>>> old-state
    tabela.innerHTML = `
    <thead>
        <tr>
        <th scope="col">N°</th>
        <th scope="col">Nome</th>
        ${montarHeadNotas()}
        <th scope="col">Média</th>
        <th scope="col">Situação</th>
        </tr>
    </thead>
    <tbody id="tbody">
        ${montarLin(medias, nomes, notasGeral)}
<<<<<<< HEAD
=======
        <td colspan="${notasQtd + 4}"><output>A média geral da sala: <br>Geral: ${mediaGeral(medias)}</output></td>
>>>>>>> old-state
    </tbody>
    `
}

function datas(){
    var nomes = []
    var notasGeral = []
    var cont = 0
    for (i = 0; i < linQtd; i++) {
        var eleNome = document.getElementById(`nome${i}`)
        if (eleNome && eleNome.value !== undefined) {
            nomes.push(eleNome.value)
        } else {
            nomes.push('')
        }

        var notas = []
        for (j = 0; j < notasQtd; j++) {
            cont++
            var eleNota = document.getElementById(`not${cont}`)
            if (eleNota) {
                notas.push(eleNota.value)
            }
        }
        notasGeral.push(notas)
        console.log(notasGeral)
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
    if (document.getElementById('nome0')) {console.log(document.getElementById('nome0').value)}

    for(i = 0; i < linQtd; i++) {
<<<<<<< HEAD
        notaInd = montarNotaLin(i, cont, notasGeral)
        cont = notaInd[1]
=======
        notaInd = montarNotaLin(i, notasGeral)
>>>>>>> old-state
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

<<<<<<< HEAD
function montarNotaLin(i, cont, notasGeral) {
    var notasLin = ''
    for(j = 0; j < notasQtd; j++) {
        cont += 1
        notasLin += `<td><input type="number" class="form-control" id="not${cont}" value="${notasGeral[0][i][j]}"></td>`
=======
function montarNotaLin(i, notasGeral) {
    var notasLin = ''
    for(j = 0; j < notasQtd; j++) {
        notasLin += `<td><input type="number" class="form-control" id="not${i}${j}" value="${notasGeral[i][j]}"></td>`
>>>>>>> old-state
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
    montarTabela()
}

function addNotas() {
    if (notasQtd < 6){
        notasQtd += 1
        notasGeral = datas()[1]
    } else {
        alert('Limite de notas atingido.')
    }
    montarTabela()
}

function delLin() {
    if (linQtd > 1){
        linQtd -= 1
        medias.slice(0, -1);
    } else {
        alert('Limite de linhas atingido.')
    }
    montarTabela()
}

function delNotas() {
    if (notasQtd > 1){
        notasQtd -= 1
    } else {
        alert('Limite de notas atingido.')
    }
    montarTabela()
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
    montarTabela()
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
