function Person(fName, lName, age){
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
}

let james = new Person("James", "Francis", 18);
// console.log(james);
let output = document.getElementById("output");
output.innerHTML = `My name is ${james.firstName} ${james.lastName} and I am ${james.age} years old.`;

Object.values(james).forEach(ako => {
    output.innerHTML += `<li>${ako}</li>`;
});

let things = ["keyboard", "mouse", "monitor"];

things.forEach(thing => {
    output.innerHTML += `<li>${thing}</li>`;
});

const cars = [{"Honda":"Civic"}, 
                {"Toyota": "Corolla"},
                {"Ford": "Raptor"}];

cars.push({"Audi": "A4"});

const hobbies = new Array(10);

// console.log(cars.toString());
// document.getElementById("arrayDemo").innerHTML = cars;

for (let key = 0; key < cars.length; key++){
    for (let model in cars[key]) {
        document.getElementById("arrayDemo").innerHTML += `<li>${model}: ${cars[key][model]}</li>`;
    }
}

const currDate = new Date();
console.log((currDate.getMonth() + 1) + "-" + currDate.getDate() + "-" + currDate.getFullYear());

//self-invoking function
(function invokeMe() {
    console.log("Hello from the invoked function!");
})();

