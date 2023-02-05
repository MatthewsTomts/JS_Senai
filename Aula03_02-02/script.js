var linQtd = 1
var notasQtd = 1
var medias = ['']

function montarTabela() {
    var tabela = document.getElementById('tabela')
    var nomes = datas()[0]
    var notasGeral = ['']
    notasGeral.splice(0, 1, datas(0)[1])
    tabela.innerHTML = `
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Nome</th>
        ${montarHeadNotas()}
        <th scope="col">Média</th>
        <th scope="col">Situação</th>
        </tr>
    </thead>
    <tbody id="tbody">
        ${montarLin(medias, nomes, notasGeral)}
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
    cont = 0
    if (document.getElementById('nome0')) {console.log(document.getElementById('nome0').value)}

    for(i = 0; i < linQtd; i++) {
        notaInd = montarNotaLin(i, cont, notasGeral)
        cont = notaInd[1]
        linhas += `
        <tr>
        <th>${i+1}</th>
        <td><input type="text" class="form-control" id="nome${i}" placeholder="nome" value="${nomes[i]}"></td>
        ${notaInd[0]}
        <td><output>${medias[i]}</output></td>
        <td><output></output></td>
        </tr>
        `
    }
    return linhas
}

function montarNotaLin(i, cont, notasGeral) {
    var notasLin = ''
    for(j = 0; j < notasQtd; j++) {
        cont += 1
        notasLin += `<td><input type="number" class="form-control" id="not${cont}" value="${notasGeral[0][i][j]}"></td>`
    }
    return [notasLin, cont]
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
    var cont = 0
    medias = []
    for(i = 0; i < linQtd; i++) {
        var soma = 0
        for (j = 0; j < notasQtd; j++) {
            cont++
            soma += parseInt(document.getElementById(`not${cont}`).value)
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
