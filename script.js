const container = document.querySelector('.container')
const primary = document.querySelector('.primary')
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

/**
 * Takes button input 
 * @param {object} e last button press
 */
function getDisplay(e){
    let curr = e.target.textContent
    let side = '+-*/'

    if (isNaN(curr) /*&& curr !== '.'*/){
        if (curr === 'CLEAR'){
            currNum = ''
            showDisplay()
        } else if(curr === 'DELETE'){
            currNum = currNum.slice(0, -1)
            showDisplay()
        } else if(side.split('').includes(curr)){
            doOperation()
        } else if(curr === '.'){
            console.log('.')
        } else {
            console.log('=')
        }
    } else {
        if (currNum.length < 7){
            currNum += curr
            message.textContent = 'blah'
            showDisplay()
        }
    }
}

function doOperation(){
    if (!currNum) {
        message.textContent = 'No Operand!'
    } 
    // if (!operand1){
    //     operand1 = currNum
    // }
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
