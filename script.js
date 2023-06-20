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
    let text = '789/456*123-0.=+'
    for(let i = 0; i < 16; i++){
        let currText = `${text.split('')[i]}`

        const btn = document.createElement('button')
        btn.classList.add('button')
        btn.textContent = currText

        if ((i + 1) % 4 === 0){
            btn.style.backgroundColor = 'orange'
            console.log(currText)
        } else if (i === 14){
            btn.style.backgroundColor = 'royalblue'
        } else {
            btn.style.backgroundColor = 'lightgray'
        }
        container.appendChild(btn)
    }
}

showGrid()

function showDisplay(e){
    console.log(e.srcElement.firstChild.textContent)
}

function hover(e){
    this.classList.add('hover')
}

function removeTransition(e){
    this.classList.remove('hover')
}

const buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
    button.addEventListener('click', showDisplay)
    button.addEventListener('mouseenter', hover)
    button.addEventListener('mouseleave', removeTransition)
})
