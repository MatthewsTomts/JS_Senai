var linQtd = 1
var notasQtd = 1

function addLin() {
    if (linQtd < 10){
        linQtd += 1
    } else {
        alert('Limite de linhas atingido.')
    }
    montarTabela()
}

function addNotas() {
    if (notasQtd < 6){
        notasQtd += 1
    } else {
        alert('Limite de notas atingido.')
    }
    montarTabela()
}

function montarTabela() {
    var tabela = document.getElementById('tabela')
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
        ${montarLin()}
    </tbody>
    `
}

function montarHeadNotas() {
    var notas = ''
    for(i = 1; i <= notasQtd; i++) {
        notas += `<th scope='col'>Nota ${i}</th>`
    }
    return notas
}

function montarLin() {
    var linhas = ''
    for(i = 1; i <= linQtd; i++) {
        linhas += `
        <tr>
        <th>${i}</th>
        <td><input type="text" class="form-control" id="" placeholder="nome"></td>
        ${montarNotaLin()}
        <td><output></output></td>
        <td><output></output></td>
        </tr>
        `
    }
    return linhas
}

function montarNotaLin() {
    var notasLin = ''
    for(j = 0; j < notasQtd; j++) {
        notasLin += '<td><input type="number" class="form-control" id="" placeholder=""></td>'
    }
    return notasLin
}

function calcular() {
    
}
