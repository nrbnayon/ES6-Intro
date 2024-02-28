// Function Declaration

function add(a, b) {
  const result = a + b;
  return result;
}

//function expression
const add2 = function () {
  return a + b;
};

//arrow function

const arrowFunction = (a, b) => a + b;

const sum = arrowFunction(5, 90);
console.log(sum);
