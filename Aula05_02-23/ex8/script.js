ida = document.getElementById('idade')

ida.addEventListener('input', faixa)

function faixa() {
    var idade = parseInt(ida.value)
    console.log(idade)
    var result = document.getElementById("result")

    result.innerHTML = "A Idade é " + idade + "<br>";
    switch (true) { 
        case idade < 0:
            result.innerHTML += "Valor inválido";
            break;
        case idade < 12:
            result.innerHTML += "Criança";
            break;
        case idade < 18:
            result.innerHTML += "Adolescente";
            break;
        case idade < 60:
            result.innerHTML += "Adulto";
            break;
        case idade >= 60:
            result.innerHTML += "Especialista";
            break;
        default:
            result.innerHTML = "";
            break;
    }
}