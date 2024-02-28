const products = [
  { id: 1, name: "lenevo", price: 65000 },
  { id: 2, name: "lenev", price: 15000 },
  { id: 3, name: "leno", price: 5000 },
  { id: 4, name: "levo", price: 6000 },
  { id: 5, name: "enevo", price: 165000 },
];

// similar

// class has some properties, method

class Teacher {
  // price = 500;
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    //method
    console.log(` ${this.name} sir subject ${this.subject}`);
  }
}

const teacher = new Teacher("Nayon", "ICT");
teacher.lecture();

//

class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("Car can run");
  }
}

class Bus extends Vehicle {
  constructor(name, price, seat, ticketPrice) {
    super(name, price);
    this.seat = seat;
    this.ticketPrice = ticketPrice;
  }
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.price = age;
  }
  sleep() {
    console.log(`Sleeping now ${this.name}`);
  }
  activity() {
    this.sleep();
  }
}

const kodom = new Person("Kodom Ali", 21);

console.log(kodom);
kodom.sleep();
const badam = new Person("Badam Ali", 23);
badam.activity();
