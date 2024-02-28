//data access using chain address

const data = [
  {
    id: 1,
    name: "abul",
    address: "Kochu Khet",
  },
];

console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    { id: 1, name: "laptop", price: 65000 },
    { id: 2, name: "laptop mac", price: 165000 },
    { id: 3, name: "laptop mac", dham: 165000 },
  ],
};

// find 2nd data price

console.log(products.data[1].price);

// find 3rd data price

console.log(products.data[2]?.price); // ? optional chaining important and powerful
