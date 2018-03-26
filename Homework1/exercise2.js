/*2.	Arrays:
a.	Create an array with some years where persons were born
b.	Create an empty array
c.	Use a loop to fill the array with the ages of the persons
d.	Use another loop to log into the console whether each person is of full age (18 or older) as well as their age
e.	Finallly, create a function called printFullAge which receives the vector of years as an argument, executes the steps b. c. and d. 
and return a vector of true/false boolean values: true if the person is of full age(>= 18 years) and false if not (<18 years)
f.	Call the function with two different vectors and store the resuls in two variables: full_1 and full_2

Examlpe input: [1965, 2008, 1992]
Example output: [true, false, true]
*/

var yearofBir = [1992, 2000, 1985];
function printFullAge(yearofBir) {
  var ages = [];
  var fullages = [];
  //fill array ages
  for (var i = 0; i < yearofBir.length; i++) {
    ages[i] = 2018 - yearofBir[i];
  }

  for (var i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      console.log("Person " + (i + 1) + " is full age");
      fullages.push(true);
    } else {
      console.log("Person " + (i + 1) + " is not 18 yet");
      fullages.push(false);
    }
  }
  return fullages;
}
var yearofBirth2 = [2010, 1875, 2005];
var full_1 = printFullAge(yearofBir);
var full_2 = printFullAge(yearofBirth2);

console.log(full_1);
console.log(full_2);
