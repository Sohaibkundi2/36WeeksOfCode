// Examples for Week 1.2

// map
const numbs = [1, 2, 3, 4, 5];
const Squares = (numbs.map(n => {return n*n}))
console.log('Squares: ',  Squares)
// filter
console.log("filter:", nums.filter(n => n > 1));

// find
const items = [{ id: 1 }, { id: 2 }];
console.log("find:", items.find(item => item.id === 2));

// sort
const unsorted = [4, 1, 3];
console.log("sort:", unsorted.sort((a, b) => a - b));

// class
class Developer {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    return `Hi, I'm ${this.name}, a developer.`;
  }
}
const dev = new Developer("Sohaib");
console.log(dev.introduce());

// object
const person = {
  name: "Sohaib",
  greet() {
    console.log(`Hello from ${this.name}`);
  }
};
person.greet();
