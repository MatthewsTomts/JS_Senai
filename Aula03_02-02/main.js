import { linQtd, setLinQtd, notasQtd, setNotasQtd, medias, setMedias, montarTabela } 
from "./modules/tabela.mjs";

var ordem = -1 // Inicia com a ordem decrescente

montarTabela(0) // Cria a tabela no momento em que a página é carregada

function calcular() {
    var mediasLocal = []
    for(var i = 0; i < linQtd; i++) {
        var soma = 0
        for (var j = 0; j < notasQtd; j++) {
            soma += parseInt(document.getElementById(`not${i}${j}`).value)
        }
        var med = soma / notasQtd
        if (isNaN(med)) {
            mediasLocal.splice(i, 0, '')
        } else {
            mediasLocal.splice(i, 0, med.toFixed(2))
        }
    }
    setMedias(mediasLocal)
    montarTabela(0)
}

function addLin() { 
    if (linQtd < 10){
        setLinQtd(linQtd + 1)
        medias.push('')
    } else {
        alert('Limite de linhas atingido.')
    }
    montarTabela(0)
}

function addNotas() {
    if (notasQtd < 6){
        setNotasQtd(notasQtd + 1)
    } else {
        alert('Limite de notas atingido.')
    }
    var mediasLocal = []
    for (var i = 0; i < linQtd; i++) {
        mediasLocal.push('')
    }
    setMedias(mediasLocal)
    montarTabela(0)
}

function delLin() {
    if (linQtd > 1){
        setLinQtd(linQtd - 1)
        setMedias(medias.slice(0, -1));
    } else {
        alert('Limite de linhas atingido.')
    }
    montarTabela(0)
}

function delNotas() {
    if (notasQtd > 1){
        setNotasQtd(notasQtd - 1)
    } else {
        alert('Limite de notas atingido.')
    }
    montarTabela(0)
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

document.querySelector('#calc').onclick = function() {
    calcular();
};

document.querySelector('#addLin').onclick = function() {
    addLin();
};

document.querySelector('#addNot').onclick = function() {
    addNotas();
};

document.querySelector('#delLin').onclick = function() {
    delLin();
};

document.querySelector('#delNot').onclick = function() {
    delNotas();
};

document.querySelector('#ordAlph').onclick = function() {
    ordemAlph();
};

document.querySelector('#ordNum').onclick = function() {
    ordemNum();
};
