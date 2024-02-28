const numbers = [1, 3, 5, 7, 9];

const res = numbers.map((n) => n + 1);
console.log(res);

const numbers2 = [33, 50, 79, 8, 90, 101, 30];

const resu = numbers2.filter((n) => n % 10 === 0);

const resu2 = numbers2.find((n) => n % 10 === 0);

console.log(resu);
console.log(resu2);

const instructor = [
  {
    name: "nodi",
    age: 28,
    position: "Senior",
  },
  {
    name: "nodia",
    age: 25,
    position: "Junior",
  },
  {
    name: "nod",
    age: 23,
    position: "Senior",
  },
];

const senior = instructor.filter((p) => p.position === "Senior");

console.log(senior);

const reduceS = instructor.reduce((p, c) => ({ age: p.age + c.age }), {
  age: 0,
});

console.log(reduceS);
