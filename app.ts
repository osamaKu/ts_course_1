// Core Types
function add(
  num1: number,
  num2: number,
  showResult: boolean,
  phrase: string,
): number | undefined {
  // // We do not need the below if with TS
  // // type script catch this error in development mode, typescript (staticky type) javascript (dynamically type)
  // if(typeof num1 !== 'number' || typeof num2 !== 'number') {
  //   throw new Error('Incorrect Input!')
  // }

  const result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return num1 + num2;
  }
}

// const number1 = '5'; // result = 53.6 read number as string
const number1 = 5;
const number2 = 3.6; // TS have one number type (number) NO Float OR Decimal ...etc 1, 4.5. -10 have the same type(number)

const printResult = true;
const resultPhrase = "Result is ";

// let sumNum: number = 5; // Bad brackets we dont add type to initial variable!
// let sumNum: number; // is a good brackets we add type to defined variable!

add(number1, number2, printResult, resultPhrase);
