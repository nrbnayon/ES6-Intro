const person = {
  name: "Kadam ali",
  job: "badam khai",
  "new property": "Bari koi",
};

// console.log(person.job);  // dot notation

console.log(person["job"]); // bracket notation

const prop = "job";

console.log(person[prop]); // bracket notation using variable name

console.log(person["new property"]);
