// const checkEvenLength = (names) => {
//   const results = [];
//   for (const name of names) {
//     results.push(name.length % 2 === 0);
//   }
//   return results;
// };
// const names = ["John", "Jane", "Mike", "Emily"];

// const results = checkEvenLength(names);
// console.log(results);

// 2nd

// const checkEvenLength = (names) => {
//   return names.map((name) => name.length % 2 === 0);
// };
// const names = ["John", "Jane", "Mike", "Emily"];

// const results = checkEvenLength(names);
// console.log(results);

// 3rd
const p2 = (f1) => {
  let even = [];
  for (const f of f1) {
    if (f.length % 2 === 0) {
      even.push(f);
    }
  }
  return even;
};

const aF1 = ["John", "Jane", "Mike", "Emily"];
const result = p2(aF1);

console.log(result); // Output: ['John', 'Jane', 'Emily']
