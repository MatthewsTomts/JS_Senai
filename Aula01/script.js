resultado = document.getElementById('answer')

function pswGenerate() {
    var tamanho = document.getElementById('pswLeght').value
    var qnt = document.getElementById('pswQtd').value
    
    var special = ['!','@','#','$','%','¨','&','*','(',')','_','-','+','=']
    var number = '0123456789'.split('');
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    var lower = listaALF.map(element => {return element.toLowerCase();});
    var main = []

    if (document.getElementById('special').checked) {
        main = main.concat(special)
    }

    if (document.getElementById('number').checked) {
        main = main.concat(number)
    }

    if (document.getElementById('upperCase').checked) {
        main = main.concat(upper)
    }

    if (document.getElementById('lowerCase').checked) {
        main = main.concat(lower)
    }

    var senhas = []
    for (i = 0; i < qnt; i++){
        var senha = ''
        for (j = 0; j < tamanho; j++) {
            senha += main[Math.floor(Math.random() * main.length)]
        }
        senhas.push(senha)
    }
 
    resultado.innerHTML = senhas.toString().replaceAll(',','\n')
}

function clean() {
    resultado.innerHTML = ''
}
