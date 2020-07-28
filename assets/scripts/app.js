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

function calculateResult(calculationType) {

    if (calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE') {
        return
    }

    const enteredNumber = getUserNumberInput()
    const initalResult = currentResult
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber
        mathOperator = '+'
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber
        mathOperator = '-'
    }
    else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber
        mathOperator = '*'
    }
    else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber
        mathOperator = '/'
    }

    createAndWriteOutput(mathOperator, initalResult, enteredNumber)
    writeToLog(calculationType, initalResult, enteredNumber, currentResult)
}

function add() {
    calculateResult('ADD')
}

function substract() {
    calculateResult('SUBTRACT')
}

function multiply() {
    calculateResult('MULTIPLY')
}

function divide() {
    calculateResult('DIVIDE')
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)

