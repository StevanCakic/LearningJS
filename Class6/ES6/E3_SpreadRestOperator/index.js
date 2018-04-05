function foo(x, y, z) {
  console.log(x, y, z);
}

let arr = [1, 2, 3];
foo(...arr); // 1 2 3
foo(arr[0], arr[1], arr[2]); // 1 2 3


const defaults = {avatar: 'placeholder.jpg', active: false}
const userData = {username: 'foo', avatar: 'bar.jpg'}

console.log({created: '2017-12-31',  ...defaults, ...userData})
// {created: "2017-12-31", avatar: "bar.jpg", active: false, username: "foo"}

const arr1 = [1, 2, 3];
const arr2 = [7, 8, 9];
console.log([...arr1, 4, 5, 6, ...arr2]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

function foo(...args) {
  console.log(args);
}
foo(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]