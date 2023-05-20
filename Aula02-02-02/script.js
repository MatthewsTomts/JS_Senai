function printa(char) {
    let formula = document.getElementById('formula').innerHTML

    let last = formula[formula.length-1]
    let firstV = (last == "+" || last == "-" || last == "/" || last == "x" || last == ",") 
    let insertV = char == "+"  || char == "/" || char == 'x' || char == ","
    let negV = (last == '-' || last == ',') && char == '-'

    if (formula.split("(").length - 1 < formula.split(")").length && char == ")") {
        alert('Não pode ter mais ")" do que "("')
    } else if (
        ((firstV || last == "(" || last == undefined) && insertV) 
        || (negV) 
        || (firstV && char == "(") 
        || ((firstV || last == "(") && char == ")")
    ){
        alert('Não é possível adicionar um operador nesta posição.')
    }  else {
        document.getElementById('formula').innerHTML += char
    }
}

function apaga() {
    document.getElementById('formula').innerHTML = ''
    document.getElementById('resultado').innerHTML = ''
}

// function calcula() {
//     let formula = document.getElementById('formula').innerHTML
//     formula = formula.replace('x', '*')
//     document.getElementById('resultado').innerHTML = eval(formula)
// }

function calcula() {
    formula = document.getElementById('formula').innerHTML
    result = document.getElementById('resultado')
    formula.replace(',', '.')
    nums = []
    num = []
    ops = []

    
    if (formula.split("(").length - 1 == formula.split(")").length - 1) {
        let parAbre =  formula.lastIndexOf('(');
    
        let parFec = []
        let idxFec = formula.indexOf(')');
        while (idxFec != -1) {
            parFec.push(idxFec)
            idxFec = formula.indexOf(')', idxFec+1)
        }
    
        for (let i=0; i < parFec.length; i++) {
            if (parFec[i] > parAbre) {
                calcula()
            }
        }

        for (i=0; i < formula.length; i++) {
            if (formula[i] != '+' && formula[i] != '-' && formula[i] != '/' && formula[i] != "x") {
                num.push(formula[i])
                if (i == formula.length - 1) {
                    numero = ''
                    for (j=0; j < num.length; j++) {
                        numero += num[j]
                    }
                    nums.push(numero)
                    num = []
                }
            } else {
                numero = ''
                for (j=0; j < num.length; j++) {
                    numero += num[j]
                }

                ops.push(formula[i])
                nums.push(numero)
                num = []
            }
        }
        nums = calcular(nums, ops)

        result.innerHTML = nums
    } else {
        alert('A quantidade de "(" é diferente da quantidade de ")"')
    }
}

function calcular(nums, ops) {
    for(i = 0; i < ops.length; i++) {
        if (ops[i] == "x") {
            nums[i] = Number(nums[i]) * Number(nums[i+1])
            nums.splice(i+1, 1)
            ops.splice(i, 1)
            i--
        } else if (ops[i] == "/") {
            nums[i] = Number(nums[i]) / Number(nums[i+1])
            nums.splice(i+1, 1)
            ops.splice(i, 1)
            i--
        }
    }
    for (i=0; i < ops.length; i++) {
        if (ops[i] == "+") {
            nums[i] = Number(nums[i]) + Number(nums[i+1])
            nums.splice(i+1, 1)
            ops.splice(i, 1)
            i--
        } else if (ops[i] == "-") {
            nums[i] = Number(nums[i]) - Number(nums[i+1])
            nums.splice(i+1, 1)
            ops.splice(i, 1)
            i--
        }
    }

    return nums
}

