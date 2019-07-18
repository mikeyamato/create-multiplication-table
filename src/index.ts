import { multiplication } from "./multiplication";

// min: 1, max: none
const highestDigitToMultiply = 10;
// min: 1, max: highestDigitToMultiply
const equationsToReturnPerDigit = 2;

const fs = require("fs");

async function startProcess(digit: number, quantity: number) {
  const data = await multiplication(digit, quantity);
  // add output to txt file
  fs.writeFile("temp.txt", data, err => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
}

startProcess(highestDigitToMultiply, equationsToReturnPerDigit);
