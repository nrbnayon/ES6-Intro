const difference = (x, y) => x - y;

const multiply = (x, y, z) => x * y * z;

const getAge = (person) => person.age; // implicit return

//Single or one parameter
const student = { name: "Kuddus", age: 25 };
const age = getAge(student);
console.log(age);

// const multi = difference(5, 5);
// console.log(multi);

const getThird = (numbers) => numbers[2];

const third = getThird([5, 80, 20, 55, 44]);
console.log(third);

const doubleIt = (num) => num * 2;

//No - parameter

const getPI = () => Math.PI;
console.log(getPI());

// large  arrow function. If you want to get anything returned from this function. then you have to use the return keyword
const doMath = (x, y, z) => {
  const sum = x + y + z;
  const multi = s * z;
  const result = sum * multi;
  return result;
};
