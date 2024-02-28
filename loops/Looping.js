const numbers = [1, 3, 4, 52, 34, 2];

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }

// for of for array and sometimes in string
for (const num of numbers) {
  console.log(num);
}

// for in for objects

const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

for (const key in glass) {
  const value = glass[key];
  console.log(key, value);
}
