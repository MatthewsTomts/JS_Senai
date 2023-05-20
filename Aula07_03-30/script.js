// Tempo inicial do temporizador
let minStart = 0;
let secStart = 0;

// Tempo atual do temporizador
let min = 0;
let sec = 0;

// Variáveis para as funções setInteval
var minutos = 0;
var segundos = 0;

// Adiciona um event listener para executar a função quando 
// o usuário digitar um valor
// (maybe) o keyup executa a função após as funções internas do pc
document.getElementById('min').addEventListener('keyup', 
() => {minStart =  document.getElementById('min').value})

document.getElementById('sec').addEventListener('keyup', 
() => {secStart =  document.getElementById('sec').value})

// Função que inicializa o temporizador
function Start() {
    // Verifica o valor atual do temporizador
    min = document.getElementById("min").value
    sec = document.getElementById("sec").value

    // Desativa os inputs
    document.getElementById("min").disabled = true
    document.getElementById("sec").disabled = true

    // Se o usuário digitar um número maior ou igual a 60 pros segundos
    // ele será substituido por 59
    if (sec >= 60) {
        sec = 59;
    }

    // Função que irá alterar os minutos
    minutos = setInterval(() => {
        // Se o segundos zerarem, eles seram substituidos por
        // 59 e 0 minuto subtraído.
        if (sec < 0) {
            min--
            sec = 59
            if (min < 0) {
                min = 0
                // Se os segundos e minutos zerarem, o programa para.
                Stop()
            }
        }
        document.getElementById("min").value = min
    }, 1000)

    // A cada segundo o input é substituido
    segundos = setInterval(() => {document.getElementById("sec").value = sec--}, 1000)

    // Desativa o start e ativa o stop
    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
}

function Reset() {
    // Retorna os valores do temporizador para os valores digitados pelo usuário
    document.getElementById("min").value = min = minStart
    document.getElementById("sec").value = sec = secStart
}

function Stop() {
    // Para os contadores.
    clearInterval(minutos);
    clearInterval(segundos);

    // Reativa os botões de input
    document.getElementById("min").disabled = false
    document.getElementById("sec").disabled = false

    // Desativa o botão de stop e reativa o start
    document.getElementById('start').disabled = false
    document.getElementById('stop').disabled = true
}