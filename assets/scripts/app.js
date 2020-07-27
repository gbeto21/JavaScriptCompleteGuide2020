const defaultResult = 0
let currentResult = defaultResult

currentResult = (currentResult + 10) * 3 / 2 - 1
let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1'

outputResult(currentResult, calculationDescription)


//NOTES:

//Excecutes the right side first.
//currentResult = currentResult + 10

//To use the characters '' inside a string, we can put them between the ""
//"'Use of the single cottes'"

//Use of the `` characters (Template litteral):
//let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`

//Strings
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation

// //This code will work
// let myName = 'Max';
// myName = 30;