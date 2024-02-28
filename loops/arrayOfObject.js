const products = [
  { id: 1, name: "lenevo", price: 65000 },
  { id: 2, name: "lenev", price: 15000 },
  { id: 3, name: "leno", price: 5000 },
  { id: 4, name: "levo", price: 6000 },
  { id: 5, name: "enevo", price: 165000 },
];
//map

const names = products.map((product) => product.name);
console.log(names);

//forEach
products.forEach((p) => console.log(p.id));

const expensive = products.filter((p) => p.price > 50000);
console.log(expensive);

// find

const affordable = products.find((p) => p.price < 50000);
console.log(affordable);

//reduce

const total = products.reduce((p, c) => p + c, 0);

console.log(total);
