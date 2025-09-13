const person = {
  name: "James",
  age: 19,
  favFood: "Pizza",
  greet: function() {console.log(`Hello I'm ${this.name}`);},
  displayFavFood: function(){ console.log(`My favorite food is ${this.favFood}`); }
}

console.log(person.name);
console.log(person.age);
console.log(person.favFood);
person.greet();
person.displayFavFood();