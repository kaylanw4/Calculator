const container = document.querySelector('.container')

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

function showGrid(){
    let text = '()%C789/456*123-0.=+'

    for(let i = 0; i < 20; i++){
        const btn = document.createElement('button')
        btn.classList.add('button')
        btn.textContent = `${text.split('')[i]}`
        btn.addEventListener('click', showDisplay)
        btn.addEventListener('mouseenter', hover)
        btn.addEventListener('mouseleave', removeTransition)
        container.appendChild(btn)
    }
}

function showDisplay(e){
    console.log(e)
}

function hover(e){
    this.classList.add('hover')
}

function removeTransition(e){
    this.classList.remove('hover')
}

console.log(operate(num1, num2, '/'))
showGrid()
