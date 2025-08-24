function Person(fName, lName, age){
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
}

let james = new Person("James", "Francis", 18);
let output = document.getElementById("output");
output.innerHTML = `My name is ${james.firstName} ${james.lastName} and I am ${james.age} years old.`;

Object.values(james).forEach(ako => {
    output.innerHTML += `<li>${ako}</li>`;
});

let things = ["keyboard", "mouse", "monitor"];

things.forEach(thing => {
    output.innerHTML += `<li>${thing}</li>`;
});

