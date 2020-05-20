// Core Types
function add(
  num1: number,
  num2: number,
  showResult: boolean,
): number | undefined {
  // // We do not need the below if with TS
  // // type script catch this error in development mode, typescript (staticky type) javascript (dynamically type)
  // if(typeof num1 !== 'number' || typeof num2 !== 'number') {
  //   throw new Error('Incorrect Input!')
  // }

  if (showResult) {
    console.log(num1 + num2);
  } else {
    return num1 + num2;
  }
}

// const number1 = '5'; // result = 53.6 read number as string
const number1 = 5;
const number2 = 3.6; // TS have one number type (number) NO Float OR Decimal ...etc 1, 4.5. -10 have the same type(number)

const printResult = true;

const result = add(number1, number2, printResult);

console.log(result);
