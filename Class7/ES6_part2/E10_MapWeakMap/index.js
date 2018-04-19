const myMap = new Map();

const keyString = "a string",
  keyObj = {},
  keyFunc = () => {};

const obj = {
    keyString: "a string",
    keyObj: {},
    keyFunc: () => {}
}

obj.keyString = "value associated with 'a string'";
console.log(obj.keyString)

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size); // 3

// getting the values
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

const w = new WeakMap();
//w.set('a', 'b');
// Uncaught TypeError: Invalid value used as weak map key

const o1 = {},
    o2 = () => {},
    o3 = window;

w.set(o1, 37);
w.set(o2, "azerty");
w.set(o3, undefined);

w.get(o3); // undefined, because that is the set value

w.has(o1); // true
w.delete(o1);
w.has(o1); // false
