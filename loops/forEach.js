const numbers = [1, 3, 25, 2345, 1];

const res = numbers.forEach((n) => n * 2);
console.log(res); // undefined
const rest = numbers.forEach((n) => {
  return n * 2;
});
console.log(res);
