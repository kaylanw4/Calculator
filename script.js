const container = document.querySelector('.container')
const primary = document.querySelector('.primary')
const secondary = document.querySelector('.secondary')
const message = document.querySelector('.message-box')

// global variables
let currNum = ''
let operand1, operand2, operator

/**
 * Returns the sum of a and b
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns the sum of a and b
 */
function add(a, b){
    return parseInt(a) + parseInt(b)
}

/**
 * Returns the difference of a and b
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns returns the difference of a and b
 */
function sub(a, b){
    return parseInt(a) - parseInt(b)
}

/**
 * Returns the product of a and b
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns returns the product of a and b
 */
function multiply(a, b){
    return parseInt(a) * parseInt(b)
}

/**
 * Returns the quotient of a and b
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns returns the quotient of a and b
 */
function divide(a, b){
    return parseInt(a) / parseInt(b)
}

/**
 * Returns the result of the expression
 * @param {number} a first operand
 * @param {number} b second operand
 * @param {string} operator +, -, *, /
 * @returns result of the selected operation
 */
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

showGrid()

function showDisplay(){
    primary.textContent = currNum
}

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

function doOperation(op){
    if (!currNum) {
        message.textContent = 'No Operand!'
        return
    } 
    if (!operator){
        operand1 = currNum
        operator = op
        secondary.textContent = `${operand1} ${operator}`
        clearDisplay(1)
        return
    } 

    message.textContent = 'Please finish the previous expression'
    return
}

function finishOperation(){
    if (operand1 && currNum && operator){
        operand2 = currNum
        let answer = operate(operand1, operand2, operator)
        currNum = answer
        secondary.textContent = `${operand1} ${operator} ${operand2} = `
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
            clearDisplay(0)
        } else if(curr === 'DELETE'){
            currNum = currNum.toString().slice(0, -1)
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
            message.textContent = 'blah'
            showDisplay()
        }
    }
}

const buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
    button.addEventListener('click', getDisplay)
    button.addEventListener('mouseenter', function(e){
        this.classList.add('hover')
    })
    button.addEventListener('mouseleave', function(e){
        this.classList.remove('hover')
    })
})
