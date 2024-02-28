const numbers = [1, 2, 3, 4, 5];

const doubleIt = (num) => num * 2;
const result = numbers.map(doubleIt);

console.log(result);

const output = numbers.map((n) => n * 2);

console.log(output);

const num2 = [12, 13, 41, 2];

const res = num2.map((n) => n ** 2);
console.log(res);

const aF1 = ["John", "Jane", "Mike", "Emily"];

const frnd = aF1.map((frnds) => frnds[0]); // frnds.lenght
console.log(frnd);
