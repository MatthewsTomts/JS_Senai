function printa(char) {
    document.getElementById('formula').innerHTML += char
}

function apaga() {
    document.getElementById('formula').innerHTML = ''
    document.getElementById('resultado').innerHTML = ''
}

function calcula() {
    var formula = document.getElementById('formula').innerHTML
    formula = formula.replace('x', '*')
    document.getElementById('resultado').innerHTML = eval(formula)
}