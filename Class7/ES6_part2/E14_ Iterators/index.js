const arr = [11,12,13];
const itr = arr[Symbol.iterator]();

itr.next(); // { value: 11, done: false }
itr.next(); // { value: 12, done: false }
itr.next(); // { value: 13, done: false }

itr.next(); // { value: undefined, done: true }

console.log(arr[0]);

function *infiniteNumbers() {
  let n = 1;
  while (true) {
      console.log(n);
      yield n++;
      if(n === 5){
        break;
      }
  }
  console.log('completed');
}

const numbers = infiniteNumbers(); // returns an iterable object

numbers.next(); // { value: 1, done: false }
numbers.next(); // { value: 2, done: false }
numbers.next(); // { value: 3, done: false }
numbers.next();
numbers.next();
numbers.next();
numbers.next();
numbers.next();
numbers.next();