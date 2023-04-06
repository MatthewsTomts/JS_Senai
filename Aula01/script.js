var resultado = document.getElementById('answer')

function pswGenerate() {
    let tamanho = document.getElementById('pswLeght').value
    let qnt = document.getElementById('pswQtd').value
    
    let special = ['!','@','#','$','%','¨','&','*','(',')','_','-','+','=']
    let number = '0123456789'.split('');
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let lower = upper.map(element => {return element.toLowerCase();});
    let main = []

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

    if (main.length == 0) {
        resultado.innerHTML = "Selecione uma opção de caracteres"
        return 0
    }

    let senhas = []
    for (i = 0; i < qnt; i++){
        let senha = ''
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
