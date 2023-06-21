const container = document.querySelector('.container')
const primary = document.querySelector('.primary')
const secondary = document.querySelector('.secondary')
const message = document.querySelector('.message-box')

// global variables
let currNum = ''
let operand1, operand2, operator

showGrid()

const buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
    button.addEventListener('click', getDisplay)
})

/**
 * Creates the calculator 
 */
function showGrid(){
    let text = '789/456*123-0.=+'
    for(let i = 0; i < 16; i++){
        let currText = `${text.split('')[i]}`

        const btn = document.createElement('button')
        btn.classList.add('button')
        btn.textContent = currText

        if ((i + 1) % 4 === 0){
            btn.style.backgroundColor = 'orange'
        } else if (i === 14){
            btn.style.backgroundColor = 'royalblue'
        } else {
            btn.style.backgroundColor = 'lightgray'
        }
        container.appendChild(btn)
    }
}

/**
 * Displays the current number in the primary display
 */
function showDisplay(){
    primary.textContent = currNum
}

/**
 * based on a, decide if we want to clear just the primary display or both
 * @param {number} a switch
 */
function clearDisplay(a){
    currNum = ''
    if (a === 0){
        operand1 = undefined
        operand2 = undefined
        operator = undefined
        secondary.textContent = ''
    }
    showDisplay()
}

/**
 * clear the message textbox
 */
function clearMessage(){
    message.textContent = ''
}

/**
 * On operator button click, first check for errors, then clear the display for the
 * second operand. If the previous expression is done, the answer becomes the first 
 * operand
 * @param {string} op operator
 * @returns 
 */
function doOperation(op){
    if (!currNum) {
        message.textContent = 'No Operand!'
        return
    } 
    if (!operator || operand2){
        operand1 = currNum
        operand2 = undefined
        operator = op
        secondary.textContent = `${operand1} ${operator}`
        clearMessage()
        clearDisplay(1) // only clear primary display
        return
    } 

    message.textContent = 'Please finish the previous expression'
    return
}

/**
 * when "=" is clicked, only do stuff when we have 2 operands and an operator
 * basically just get answer through operate(), display the answer
 */
function finishOperation(){
    if (operand1 && currNum && operator){
        operand2 = currNum
        let answer = operate(operand1, operand2, operator)
        currNum = answer
        secondary.textContent = `${operand1} ${operator} ${operand2} = `
        message.textContent = 'Done!'
        showDisplay()
    }
}

/**
 * Takes button input 
 * @param {object} e last button press
 */
function getDisplay(e){
    let curr = e.target.textContent
    let side = '+-*/'

    if (isNaN(curr) /*&& curr !== '.'*/){
        if (curr === 'CLEAR'){
            clearMessage()
            clearDisplay(0)
        } else if(curr === 'DELETE'){
            currNum = currNum.toString().slice(0, -1)
            clearMessage()
            showDisplay()
        } else if(side.split('').includes(curr)){
            doOperation(curr)
        } else if(curr === '.'){
            console.log(".")
        } else {
            finishOperation()
        }
    } else {
        if (currNum.length < 7){
            currNum += curr
            clearMessage()
            showDisplay()
        }
    }
}

/**
 * Returns the sum of a and b
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns the sum of a and b
 */
function add(a, b){
    return a + b
}

/**
 * Returns the difference of a and b
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns returns the difference of a and b
 */
function sub(a, b){
    return a - b
}

/**
 * Returns the product of a and b
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns returns the product of a and b
 */
function multiply(a, b){
    return a * b
}

/**
 * Returns the quotient of a and b
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns returns the quotient of a and b
 */
function divide(a, b){
    return a / b
}

/**
 * rounds a number
 * @param {number} number number to be rounded
 * @returns number rounded to the 1000s place
 */
function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

/**
 * Returns the result of the expression
 * @param {number} a first operand
 * @param {number} b second operand
 * @param {string} operator +, -, *, /
 * @returns result of the selected operation
 */
function operate(a, b, operator){
    a = Number(a)
    b = Number(b)
    switch (operator){
        case '+':
            return roundResult(add(a,b))
        case '-':
            return roundResult(sub(a,b))
        case '*':
            return roundResult(multiply(a,b))
        case '/':
            return roundResult(divide(a,b))
    }
}