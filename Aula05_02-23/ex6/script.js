// 6.	Faça um programa que receba o salário de um funcionário, calcule e mostre o novo salário, sabendo-se que:
// Salário < R$ 1000,00 aumento de 25%.
// Salário >= R$ 1000,00 e < R$ 2000,00 aumento de 15%.
// Salário >= R$ 2000,00 aumento de 10%.

function calcular() {
    var sal = document.getElementById('sal').value
    var result = document.getElementById('result')

    if (sal < 1000) {
        result.innerHTML = "Novo salário: " + sal * 1.25
    } else if (sal < 2000) {
        result.innerHTML = "Novo salário: " + sal * 1.15
    } else {
        result.innerHTML = "Novo salário: " + sal * 1.1
    }
}
