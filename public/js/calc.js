let main='', currentOperand ='',   previousOperand ='', operation = undefined;

function clear(){
    main =''
    currentOperand = ''
    previousOperand = ''
    operation = undefined
}

function appendNumber(number){
    currentOperand = currentOperand.toString() + number.toString() 
}

function chooseOperation (op){
    operation = op 
    previousOperand = currentOperand + op
    currentOperand = ''

}
function dell (currentOperand){
    currentOperand.slice(0,-1)
}

let computation
function compute(){
const prev = previousOperand.slice(0,-1)
const current = currentOperand
    switch (operation) {
        case '+' :
            computation = parseFloat(prev) +  parseFloat(current)
            break;
        case '-' : 
            computation = prev- current
            break;
        case '*' : 
            computation = prev * current
            break;
        case '/' : 
            computation = prev / current
            break;


    }
 
}


function updateDisplay(){
    currentOperandTextElement.innerText = currentOperand;
    previousOperandTextElement.innerText= previousOperand;
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelectorAll('[data-egal]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const dellButton = document.querySelectorAll('[data-fonction]')

numberButtons.forEach(button =>{
    button.addEventListener('click',() => {
        appendNumber(button.innerText)
        updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText)
        updateDisplay()
    })

})

equalsButton.forEach(button =>{
    button.addEventListener('click',() =>{
        compute()
        currentOperand = computation
        updateDisplay()
        previousOperand =''
    })
})


allClearButton.forEach(button  => {
    button.addEventListener('click',()=>{
        clear()
        updateDisplay()
    })

  })
  
  
  dellButton.forEach(button => {
    button.addEventListener('click',() => {
        dell()
        updateDisplay()
      })
  })