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


export { addLin, addNotas, delNotas, delLin, calcular, situ, mediaGeral, ordemAlph, ordemNum };