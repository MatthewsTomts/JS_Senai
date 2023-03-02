mes = document.getElementById('mes')

mes.addEventListener('input', escolher)

function escolher() {
    var result = document.getElementById('result')
    var mesInt = parseInt(mes.value)
    
    switch (isNaN(mesInt) || mesInt) {
        case true:
            result.innerHTML = "";
            break;
        case 1:
            result.innerHTML = "Janeiro";
            break;
        case 2:
            result.innerHTML = "Fevereiro";
            break;
        case 3:
            result.innerHTML = "Março";
            break;
        case 4:
            result.innerHTML = "Abril";
            break;
        case 5:
            result.innerHTML = "Maio";
            break;
        case 6:
            result.innerHTML = "Junho";
            break;
        case 7:
            result.innerHTML = "Julho";
            break;
        case 8:
            result.innerHTML = "Agosto";
            break;
        case 9:
            result.innerHTML = "Setembro";
            break;
        case 10:
            result.innerHTML = "Outubro";
            break;
        case 11:
            result.innerHTML = "Novembro";
            break;
        case 12:
            result.innerHTML = "Dezembro";
            break;
        default:
            result.innerHTML = "Digite um número entre 1 e 12";
    }
}