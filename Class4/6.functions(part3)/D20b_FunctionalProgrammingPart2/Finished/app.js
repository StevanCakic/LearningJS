function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }

  return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
  return item * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
  return item > 2;
});
console.log(arr3);

var checkPastLimit = function(limiter, item) {
  return item > limiter;
};
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

var checkPastLimitSimplified = function(limiter) {
  return function(limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);

// underscore
var arr6 = _.map(arr1, function(item) {
  return item * 3;
});
console.log(arr6);

var arr7 = _.filter([2, 3, 4, 5, 6, 7], function(item) {
  return item % 2 === 0;
});
console.log(arr7);

var arr8 = arr1.map(element => element * 3);
console.log(arr8);

var arr9 = arr8.filter(element => element > 3);
console.log(arr9);

var arr10 = [{ a: 2, b: 2 }, { a: 3, b: 4 }, { a: 10, b: 7 }];
var arr11 = arr10
  .filter(element => (element.a + element.b) % 2 !== 0)
  .map(element => element.a);
console.log(arr11);

const sum = arr1.reduce((prev, current) => prev + current, 0);
console.log(sum);

var arr = [];
for (let i = 0; i < arr1.length; i++) {
  arr.push(arr1[i] * 3);
}

console.log(arr);
