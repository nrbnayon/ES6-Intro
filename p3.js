const math = (array) => {
  let sum = 0;
  for (const number of array) {
    const square = number ** 2;
    sum += square;
  }
  return sum;
};

const nums = [1, 2, 3, 4, 5, 6];
const res = math(nums);
console.log(res);
