// Constructors in js

function person (name, age, yearInUniversity){
  this.name = name;
  this.age = age;
  this.yearInUniversity = yearInUniversity;
  this.greet =  function() {console.log(`Hello, my name is ${this.name}`) }
}

const john = new person("John Doe", 19, 3);
console.log(john.name);
console.log(john.age);
console.log(john.yearInUniversity);
john.greet();

const jane = new person("Jane Smith", 20, 4);
console.log(jane.name);
console.log(jane.age);
console.log(jane.yearInUniversity);
jane.greet();




