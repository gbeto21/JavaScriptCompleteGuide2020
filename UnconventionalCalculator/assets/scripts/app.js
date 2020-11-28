const defaultResult = 0
let currentResult = defaultResult

function getUserInput() {
    return +userInput.value
}

function add() {
    const enteredNumber = getUserInput()
    const calcDescription = `${currentResult} + ${enteredNumber}`
    currentResult = currentResult + enteredNumber
    outputResult(currentResult, calcDescription)
}

addBtn.addEventListener('click', add)

