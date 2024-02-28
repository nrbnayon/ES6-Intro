// Js variables

// Var - no reason to use var
// Let - allow it to reassign
// Const - do not allow it to reassign

const money = 25;
//money = 50 -not allow
const rich = money + 25;

console.log(rich);

const numbers = [10, 30, 50, 100];
// numbers = [2,58,4] = not allow
numbers[1] = 40;
numbers.push(200, 300);
console.log(numbers);

// let

let count = 0;
count = count + 10;
console.log(count);

// Object

const student = {
  name: "Pakhi",
  age: 18,
};
student.name = "Moyur konthi";
console.log(student);

//reassign
let students = {
  name: "Pakhi",
  age: 18,
};
students = { name: "kala Buna" };
console.log(students);
