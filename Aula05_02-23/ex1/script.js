function media() {
    soma = 0
    for (i=1;i<=5;i++) {
        soma += parseInt(document.getElementById(`nt${i}`).value)
    }
    media = soma / 5
    document.getElementById('result').innerHTML = `A média dessas notas é ${media}`
}