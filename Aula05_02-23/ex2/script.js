function converte() {
    dolar = document.getElementById('dollar').innerHTML 
    real = parseFloat(document.getElementById('real').value.replace(',','.').replace('R$',''))
    document.getElementById('dollar').innerHTML = real * 0.19
}