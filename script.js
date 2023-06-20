

let num1 = 15
let num2 = 5
let operator

function add(a, b){
    return a + b
}

function sub(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function operate(a, b, operator){
    switch (operator){
        case '+':
            return add(a,b)
        case '-':
            return sub(a,b)
        case '*':
            return multiply(a,b)
        case '/':
            return divide(a,b)
    }
}


console.log(operate(num1, num2, '/'))
