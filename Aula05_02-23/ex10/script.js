function multa() {
    var limVel = document.getElementById('limVel').value
    var carVel = document.getElementById('carVel').value
    var dif = carVel - limVel
    var result = document.getElementById('result')

    switch (true) {
        case dif <=0:
            result.innerHTML = "Você está dentro do limite de velocidade."
            break;
        case dif <= 10:
            result.innerHTML = "Você recebeu uma multa de R$50,00"
            break
        case dif <= 30:
            result.innerHTML = "Você recebeu uma multa de R$100,00"
            break
        case dif > 30:
            result.innerHTML = "Você recebeu uma multa de R$200,00"
            break
    }
}

