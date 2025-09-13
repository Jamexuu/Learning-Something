// Hi will appear after 3 seconds
setTimeout(function() {
  console.log("HIII" );
}, 3000);


const numbers = [1, 2, 3, 4, 5, 6];
const squared = numbers.map(function (num){
  return Math.pow(num, 2);
});

const cubed = numbers.map(function (num){
  return Math.pow(num, 3);
});

const checkEven = numbers.filter(function (num){
  return num % 2 === 0;
})

const checkOdd = numbers.filter(function (num){
  return num % 2 !== 0;
});

console.log(squared);
console.log(cubed);
console.log(checkEven);
console.log(checkOdd);

// Using Arrow Functions
const squaredArrow = numbers.map(num => Math.pow(num, 2));
console.log(squaredArrow);



