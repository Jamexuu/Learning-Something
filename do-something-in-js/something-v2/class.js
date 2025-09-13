class Product {
  constructor(name, price){
    this.name = name;
    this.price = price;
  }

  displayProduct(){
    console.log(`The ${this.name} costs ${this.price} PHP`);
  }

  addDrinks(mainProductPrice){
    return mainProductPrice + 12;
  }
}

const chickenJoy = new Product("Chicken Joy", 99);
const spaghetti = new Product("Spaghetti", 79);
const burgerSteak = new Product("Burger Steak", 89);

chickenJoy.displayProduct();
console.log('Drink Added to ' + chickenJoy.name + ' Total Price: ' + chickenJoy.addDrinks(chickenJoy.price) + ' PHP');
spaghetti.displayProduct();
console.log('Drink Added to ' + spaghetti.name + ' Total Price: ' + spaghetti.addDrinks(spaghetti.price) + ' PHP');
burgerSteak.displayProduct();
console.log('Drink Added to ' + burgerSteak.name + ' Total Price: ' + burgerSteak.addDrinks(burgerSteak.price) + ' PHP');