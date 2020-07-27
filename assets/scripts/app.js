const defaultResult = 0
let currentResult = defaultResult
let logEntires = []

function getUserNumberInput() {
    return parseInt(userInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {

    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult) {

    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    }
    logEntires.push(logEntry)
    console.log(logEntires);
}

function add() {
    const enteredNumber = getUserNumberInput()
    const initalResult = currentResult
    currentResult += enteredNumber
    createAndWriteOutput('+', initalResult, enteredNumber)
    writeToLog('ADD', initalResult, enteredNumber, currentResult)
}

function substract() {
    const enteredNumber = getUserNumberInput()
    const initalResult = currentResult
    currentResult -= enteredNumber
    createAndWriteOutput('-', initalResult, enteredNumber)
    writeToLog('SUBSTRACT', initalResult, enteredNumber, currentResult)
}

function multiply() {
    const enteredNumber = getUserNumberInput()
    const initalResult = currentResult
    currentResult *= enteredNumber
    createAndWriteOutput('*', initalResult, enteredNumber)
    writeToLog('MULTIPLY', initalResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = getUserNumberInput()
    const initalResult = currentResult
    currentResult /= enteredNumber
    createAndWriteOutput('/', initalResult, enteredNumber)
    writeToLog('DIVIDE', initalResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)

