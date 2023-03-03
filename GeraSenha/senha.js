function pswGenerate() {
    var tamanho = document.getElementById('pswLeght').value
    var qnt = document.getElementById('pswQtd').value

    var listaSpe = ['!','@','#','$','%','&','*','(',')','-','_','=','+']
    var listaNum = ['1','2','3','4','5','6','7','8','9','0']
    var listaALF = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var listaalf = listaALF.map(element => {return element.toLowerCase();});
    var listaSenha = []
    
    if (document.getElementById('special').checked) {
        listaSenha = listaSenha.concat(listaSpe)
    }
    if (document.getElementById('number').checked) {
        listaSenha = listaSenha.concat(listaNum)
    }
    if (document.getElementById('upperCase').checked) {
        listaSenha = listaSenha.concat(listaALF)
    }
    if (document.getElementById('lowerCase').checked) {
        listaSenha = listaSenha.concat(listaalf)
    }

    var senhas = []
    for (i = 0; i < qnt; i++) {
        var senha = ''
        for (j = 0; j < tamanho; j++) {
            senha += listaSenha[Math.floor(Math.random() * listaSenha.length)]
        }
        senhas.push(senha)
    }
    
    var resultado = document.getElementById('answer')
    for (i = 0; i < senhas.length; i++) {
        resultado.innerHTML += senhas[i] + "\n"
    }
}

function clean() {
    document.getElementById('answer').innerHTML = ''
}
