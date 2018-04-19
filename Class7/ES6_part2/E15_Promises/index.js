const p = new Promise((resolve, reject) => {
  if (true) {
    resolve(/* value */); // fulfilled successfully
  } else {
    reject(/* reason */); // error, rejected
  }
});

p.then(
  val => console.log("Promise Resolved", val),
  err => console.log("Promise Rejected", err)
);

const hello = new Promise((resolve, reject) => {
  resolve("Hello");
});

hello
  .then(str => `${str} World`) //Hello World
  .then(str => `${str}!`) // Hello World!
  .then(str => console.log(str)); // Hello World!

const pa = new Promise((resolve, reject) => {
  resolve(1);
});

const eventuallyAdd1 = val =>
  new Promise((resolve, reject) => {
    resolve(val + 1);
  });

pa
  .then(eventuallyAdd1) // 2
  .then(eventuallyAdd1) // 3
  .then(val => console.log(val)); // 3
