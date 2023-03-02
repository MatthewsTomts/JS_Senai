var car = document.getElementById('cargo')

car.addEventListener('input', pesq)

function pesq() {
    var cargo = parseInt(car.value);
    var result = document.getElementById('result')
    console.log(cargo)

    switch(isNaN(cargo) || cargo) {
        case 1:
            result.innerHTML = "Matemático"
            break;
        case 2:
            result.innerHTML = "Analista de Sistema"
            break;
        case 3:
            result.innerHTML = "Físico"
            break;
        case 4:
            result.innerHTML = "Arquiteto"
            break;
        case 5:
            result.innerHTML = "Piloto de Aeronaves"
            break;
        default:
            result.innerHtml = "";
            break;
    }
}