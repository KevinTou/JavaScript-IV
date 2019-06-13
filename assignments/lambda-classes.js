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

const willyWonka = new Person({
  name: "Willy Wonka",
  age: 0,
  location: "the Chocolate Factory"
});

const doug = new Person({
  name: "Doug",
  age: 12,
  location: "Bluffington"
});

/*

Instructor Class

*/

class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }

  modifyGrade(student) {
    let positiveOrNegative = Math.round(Math.random());
    let randomInt = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    if (positiveOrNegative === 0) {
      randomInt = randomInt * -1;
    }
    student.grade = student.grade + randomInt;
    return student.grade;
  }
}

const dan = new Instructor({
  name: "Dan",
  age: Infinity,
  location: "Denver",
  specialty: "Relentless Debugger",
  favLanguage:
    "JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia",
  catchPhrase: "If you can do the thing, you can get paid to do the thing!"
});

const yoda = new Instructor({
  name: "Yoda",
  age: 900,
  location: "Dagobah",
  specialty: "Jedi Master",
  favLanguage: "Unknown",
  catchPhrase: "May the force be with you!"
});

const miyagi = new Instructor({
  name: "Mr. Miyagi",
  age: 86,
  location: "Los Angeles",
  specialty: "Karate",
  favLanguage: "Japanese",
  catchPhrase:
    "No such thing as bad student, only bad teacher. Teacher say, student do."
});

/*

Student Class

*/

class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = props.grade;
  }

  listsSubjects() {
    return this.favSubjects.forEach(subject => {
      console.log(subject);
    });
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }

  graduate() {
    if (this.grade >= 70) {
      return `Congratulations! You can graduate!`;
    } else {
      return `Work on more assignments!`;
    }
  }
}

const kevin = new Student({
  name: "Kevin",
  age: 28,
  location: "California",
  previousBackground: "Table Games Dealer",
  className: "WEB21",
  favSubjects: ["Html", "CSS", "JavaScript"],
  grade: 50
});

const isaiah = new Student({
  name: "Isaiah",
  age: 18,
  location: "Florida",
  previousBackground: "High School last month",
  className: "Web21",
  favSubjects: ["Html", "CSS", "JavaScript"]
});

const joscelyn = new Student({
  name: "Joscelyn",
  age: 29,
  location: "California",
  previousBackground: "English teacher",
  className: "WEB21",
  favSubjects: ["computer science", "philosophy", "English"]
});

/*

Project Manager Class

*/

class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}'`;
  }
}

const brandon = new ProjectManager({
  name: "Brandon",
  age: 34,
  gradClassName: "WEB18",
  favInstructor: "Professor Lambda",
  location: "Maine",
  specialty: "Redux",
  favLanguage: "JavaScript, C++, Python.",
  catchPhrase: "You shall not pass!"
});

const mary = new ProjectManager({
  name: "Mary",
  age: 24,
  gradClassName: "WEB18",
  favInstructor: "Josh Knell",
  location: "New York",
  specialty: "Express and Node.js",
  favLanguage: "Javascript",
  catchPhrase: "That looks AWESOME"
});

const christian = new ProjectManager({
  name: "Christian",
  age: 32,
  gradClassName: "WEB18",
  favInstructor: "Every Instructor in Lambda",
  location: "Seattle, WA",
  specialty: "Data Structures & Algorithms",
  favLanguage: "JavaScript",
  catchPhrase: "Dont forget your daily commit."
});
