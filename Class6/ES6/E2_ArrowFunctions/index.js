// Classical Function Expression
/*function addition(a, b) {
  console.log(a + b);
  return a + b;
}*/

// Implementation with arrow function
const addition = (a, b) => {
  console.log(a + b);
  return a + b;
};

const additionSimple = (a, b) => a + b;

// With single argument, no parentheses required
const add5 = a => 5 + a;

const arr = ["apple", "banana", "orange"];

const breakfast = arr.map(fruit => {
  return fruit + "s";
});

//const breakfast = arr.map(fruit => fruit + 's'); Same as prev variable

console.log(breakfast); // ['apples', 'bananas', 'oranges']

function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;
  console.log(this.age);

  setInterval(() => {
    // In non-strict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
    console.log(this.age);
  }, 1000);

  setInterval(function growUp() {
    // In non-strict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();

const getFinalPrice = (price, tax = 0.7) => price + price * tax;
getFinalPrice(500); // 850
