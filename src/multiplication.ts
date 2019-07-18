import _ from "lodash";

export async function multiplication(
  highestNumToMultiply: number,
  quantity: number
) {
  const numA: number[] = [];
  const numB: number[] = [];
  while (numA.length < highestNumToMultiply) {
    const randomNum: number =
      Math.floor(Math.random() * highestNumToMultiply) + 1;
    if (_.indexOf(numA, randomNum) === -1) {
      numA.push(randomNum);
    } else {
      continue;
    }
  }
  while (numB.length < highestNumToMultiply) {
    const randomNum: number =
      Math.floor(Math.random() * highestNumToMultiply) + 1;
    if (_.indexOf(numB, randomNum) === -1) {
      numB.push(randomNum);
    } else {
      continue;
    }
  }
  // console.log("numA", numA);
  // console.log("numB", numB);
  return await createMultiplicationTable(numA, numB, quantity);
}

async function createMultiplicationTable(
  numA: number[],
  numB: number[],
  quantity: number
) {
  // if numA is single digit && numB is single digit then print a certain way
  return Promise.all(
    await numA.map(eachNumA =>
      combineWithOtherNumbers(eachNumA, numB, quantity)
    )
  );
}

async function combineWithOtherNumbers(
  eachNumA: number,
  numB: number[],
  quantity: number
) {
  // grab from the start of the array the number of quantity
  return _.take(
    await numB.map(eachNumB => printOutChart(eachNumA, eachNumB)),
    quantity
  );
}

function printOutChart(eachNumA: number, eachNumB: number) {
  if (eachNumA < 10 && eachNumB < 10) {
    return "\n\n" + "  " + eachNumA + "\n" + "x " + eachNumB + "\n" + "---";
  } else if (eachNumA < 10 && eachNumB === 10) {
    return "\n\n" + "  " + eachNumA + "\n" + "x" + eachNumB + "\n" + "---";
  } else if (eachNumA === 10 && eachNumB < 10) {
    return "\n\n" + " " + eachNumA + "\n" + "x " + eachNumB + "\n" + "---";
  } else if (eachNumA === 10 && eachNumB === 10) {
    return "\n\n" + " " + eachNumA + "\n" + "x" + eachNumB + "\n" + "---";
  }
}
