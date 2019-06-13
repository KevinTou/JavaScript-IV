// CODE here for your Lambda Classes
/*

Person Class

*/
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

const drSeuss = new Person({
  name: "Dr. Seuss",
  age: 999,
  location: "Whoville"
});

console.log(drSeuss.speak());

const willyWonka = new Person({
  name: "Willy Wonka",
  age: 0,
  location: "the Chocolate Factory"
});

console.log(willyWonka.speak());

const doug = new Person({
  name: "Doug",
  age: 12,
  location: "Bluffington"
});

console.log(doug.speak());
