var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
console.log(person);
console.log(john);

john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);

var jane = {
    firstname: 'Jane'   
}

console.log(jane);

jane.__proto__ = person;
console.log(jane.getFullName());
console.log(jane.hasOwnProperty("lastname"))

person.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;   
}

console.log(john.getFormalFullName());
console.log(jane.getFormalFullName());