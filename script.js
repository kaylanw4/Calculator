const container = document.querySelector('.container')
const display = document.querySelector('.display')

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

/**
 * Takes button input 
 * @param {object} e last button press
 */
function showDisplay(e){
    console.log(e.target.textContent)
    curr = e.target.textContent

    if (isNaN(curr)){
        console.log("not a number")
    } else {
        console.log("NUMBER")
    }
}

const buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
    button.addEventListener('click', showDisplay)
    button.addEventListener('mouseenter', function(e){
        this.classList.add('hover')
    })
    button.addEventListener('mouseleave', function(e){
        this.classList.remove('hover')
    })
})
