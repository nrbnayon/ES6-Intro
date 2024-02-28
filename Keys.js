const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

console.log(glass);

// object keys / property
const keys = Object.keys(glass); // [ 'name', 'color', 'price', 'isCleaned' ]
console.log(keys);

// object values -[ 'glass', 'golden', 12, true ]

const values = Object.values(glass);

console.log(values);

// object entries - property and values this array of array or 2D array

// [
//   ["name", "glass"],
//   ["color", "golden"],
//   ["price", 12],
//   ["isCleaned", true],
// ];

const pair = Object.entries(glass);
console.log(pair);

// object delete property

delete glass.isCleaned;

console.log(glass);

const { isCleaned, ...shortGlass } = glass;
console.log(shortGlass);

// object freeze

Object.freeze(glass);

glass.source = "Bangladesh";

console.log(glass);
