"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
async function multiplication(highestNumToMultiply) {
    const numA = [];
    const numB = [];
    while (numA.length < highestNumToMultiply) {
        const randomNum = Math.floor(Math.random() * highestNumToMultiply) + 1;
        if (lodash_1.default.indexOf(numA, randomNum) === -1) {
            numA.push(randomNum);
        }
        else {
            continue;
        }
    }
    while (numB.length < highestNumToMultiply) {
        const randomNum = Math.floor(Math.random() * highestNumToMultiply) + 1;
        if (lodash_1.default.indexOf(numB, randomNum) === -1) {
            numB.push(randomNum);
        }
        else {
            continue;
        }
    }
    console.log("numA", numA);
    console.log("numB", numB);
}
exports.multiplication = multiplication;
//# sourceMappingURL=multiplication.js.map