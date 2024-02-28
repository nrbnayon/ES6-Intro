const actor = {
  name: "Anaato",
  age: 30,
  phone: "01933453453",
};

const { name, phone: mobile } = actor; // object destructure

console.log(name, mobile);

//array destructure

const numbersArray = [1, 3, 4, 2, 43];

const [a, b, c] = numbersArray;

console.log(a, b, c);

// Function destructure

function doubleThem(a, b) {
  return [a * 3, b * 3];
}
const [first, second] = doubleThem(3, 5);

console.log(first, second);
