const parent = {
  foo() {
      console.log("Hello from the Parent");
  },
  add(a, b) {
    console.log(a + b);
  }
}

const child = {
  foo() {
      super.foo();
      super.add(3,2);
      console.log("Hello from the Child");
  }
}

Object.setPrototypeOf(child, parent);
console.log(child);
child.foo(); // Hello from the Parent
           // Hello from the Child