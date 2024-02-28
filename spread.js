const math = Math.max(16, 5, 23, 45);

const numbers = [3, 6, 8, 9, 5, 2, 55, 1, 6];
const arrayMax = Math.max(...numbers); // spread remove array from number

console.log(...numbers);
console.log(arrayMax);
console.log(math);

// use spread operator to copy

const nums = [4, 5, 87, 9];

const nums2 = [...nums, 81];

nums2.push(15);
console.log(nums);
console.log(nums2);
