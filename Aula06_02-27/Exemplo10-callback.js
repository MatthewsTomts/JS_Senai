
// function exec(fn, a, b){
//     return fn(a,b)
// }

// const somarNoTerminal = (x , y) => console.log(x + y)
// const subtrairNoTerminal = (x , y) => console.log(x - y)

// exec(somarNoTerminal, 10, 2)
// exec(subtrairNoTerminal, 10, 5)
let minutos = 0
let segundos = 0

const minutes = () => console.log((minutos += 1) + "minutos!!")
const seconds = () => console.log((segundos += 1) + "segundos")


setInterval(minutes, 60000)
setInterval(seconds, 1000)


