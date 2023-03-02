function calcular() {
    document.getElementById('resultPol').innerHTML = "Polegada: " + document.getElementById('pe').value * 12;
    document.getElementById('resultJar').innerHTML = "Jarda: " + document.getElementById('pe').value / 3;
    document.getElementById('resultMil').innerHTML = "Milha: " + document.getElementById('pe').value / 5280;
}