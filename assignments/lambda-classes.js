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

// Person Object creation/invocations
const drSeuss = new Person({
  name: "Dr. Seuss",
  age: 999,
  location: "Whoville"
});

console.log("name: ", drSeuss.name);
console.log("age: ", drSeuss.age);
console.log("location: ", drSeuss.location);
console.log("speak(): ", drSeuss.speak());

const willyWonka = new Person({
  name: "Willy Wonka",
  age: 0,
  location: "the Chocolate Factory"
});

console.log("name: ", willyWonka.name);
console.log("age: ", willyWonka.age);
console.log("location: ", willyWonka.location);
console.log("speak(): ", willyWonka.speak());

const doug = new Person({
  name: "Doug",
  age: 12,
  location: "Bluffington"
});

console.log("name: ", doug.name);
console.log("age: ", doug.age);
console.log("location: ", doug.location);
console.log("speak(): ", doug.speak());

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

// Instructor Object creation/invocations
const dan = new Instructor({
  name: "Dan",
  age: Infinity,
  location: "Denver",
  specialty: "Relentless Debugger",
  favLanguage:
    "JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia",
  catchPhrase: "If you can do the thing, you can get paid to do the thing!"
});

// console.log("specialty: ", dan.specialty);
// console.log("favLanguage: ", dan.favLanguage);
// console.log("catchPhrase: ", dan.catchPhrase);
// console.log("demo(): ", dan.demo("Javascript"));
// console.log(".grade(): ", dan.grade(kevin, "Javascript")); // Won't work unless you put them before student object creation
// console.log("modifyGrade(): ", dan.modifyGrade(kevin)); // Won't work unless you put them before student object creation

const yoda = new Instructor({
  name: "Yoda",
  age: 900,
  location: "Dagobah",
  specialty: "Jedi Master",
  favLanguage: "Unknown",
  catchPhrase: "May the force be with you!"
});

// console.log("specialty: ", yoda.specialty);
// console.log("favLanguage: ", yoda.favLanguage);
// console.log("catchPhrase: ", yoda.catchPhrase);
// console.log("demo(): ", yoda.demo("Javascript"));
// console.log(".grade(): ", yoda.grade(kevin, "Javascript")); // Won't work unless you put them before student object creation
// console.log("modifyGrade(): ", yoda.modifyGrade(kevin)); // Won't work unless you put them before student object creation

const miyagi = new Instructor({
  name: "Mr. Miyagi",
  age: 86,
  location: "Los Angeles",
  specialty: "Karate",
  favLanguage: "Japanese",
  catchPhrase:
    "No such thing as bad student, only bad teacher. Teacher say, student do."
});

// console.log("specialty: ", miyagi.specialty);
// console.log("favLanguage: ", miyagi.favLanguage);
// console.log("catchPhrase: ", miyagi.catchPhrase);
// console.log("demo(): ", miyagi.demo("Javascript"));
// console.log(".grade(): ", miyagi.grade(kevin, "Javascript")); // Won't work unless you put them before student object creation
// console.log("modifyGrade(): ", miyagi.modifyGrade(kevin)); // Won't work unless you put them before student object creation

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

// Student Object creation/invocations
const kevin = new Student({
  name: "Kevin",
  age: 28,
  location: "California",
  previousBackground: "Table Games Dealer",
  className: "WEB21",
  favSubjects: ["Html", "CSS", "JavaScript"],
  grade: 50
});

console.log("previousBackground: ", kevin.previousBackground);
console.log("className: ", kevin.className);
console.log("favSubjects: ", kevin.favSubjects);
console.log("grade: ", kevin.grade);
console.log("listsSubjects(): ");
kevin.listsSubjects();
console.log("PRAssignment(): ", kevin.PRAssignment("Javascript IV"));
console.log("sprintChallenge(): ", kevin.sprintChallenge("Javascript"));
console.log("graduate(): ", kevin.graduate());

const isaiah = new Student({
  name: "Isaiah",
  age: 18,
  location: "Florida",
  previousBackground: "High School last month",
  className: "Web21",
  favSubjects: ["Html", "CSS", "JavaScript"],
  grade: 90
});

console.log("previousBackground: ", isaiah.previousBackground);
console.log("className: ", isaiah.className);
console.log("favSubjects: ", isaiah.favSubjects);
console.log("grade: ", isaiah.grade);
console.log("listsSubjects(): ");
isaiah.listsSubjects();
console.log("PRAssignment(): ", isaiah.PRAssignment("Javascript IV"));
console.log("sprintChallenge(): ", isaiah.sprintChallenge("Javascript"));
console.log("graduate(): ", isaiah.graduate());

const joscelyn = new Student({
  name: "Joscelyn",
  age: 29,
  location: "California",
  previousBackground: "English teacher",
  className: "WEB21",
  favSubjects: ["computer science", "philosophy", "English"],
  grade: 85
});

console.log("previousBackground: ", joscelyn.previousBackground);
console.log("className: ", joscelyn.className);
console.log("favSubjects: ", joscelyn.favSubjects);
console.log("grade: ", joscelyn.grade);
console.log("listsSubjects(): ");
joscelyn.listsSubjects();
console.log("PRAssignment(): ", joscelyn.PRAssignment("Javascript IV"));
console.log("sprintChallenge(): ", joscelyn.sprintChallenge("Javascript"));
console.log("graduate(): ", joscelyn.graduate());

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
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

// ProjectManager Object creation/invocations
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

console.log("gradClassName: ", brandon.gradClassName);
console.log("favInstructor: ", brandon.favInstructor);
console.log("standUp(): ", brandon.standUp("web21"));
console.log("debugsCode(): ", brandon.debugsCode(kevin, "Javascript IV"));

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

console.log("gradClassName: ", mary.gradClassName);
console.log("favInstructor: ", mary.favInstructor);
console.log("standUp(): ", mary.standUp("web21"));
console.log("debugsCode(): ", mary.debugsCode(kevin, "Javascript IV"));

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

console.log("gradClassName: ", christian.gradClassName);
console.log("favInstructor: ", christian.favInstructor);
console.log("standUp(): ", christian.standUp("web21"));
console.log("debugsCode(): ", christian.debugsCode(kevin, "Javascript IV"));
