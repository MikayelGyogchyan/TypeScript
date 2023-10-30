type Combinable = number | string 
type ConversionDescriptor = "as-number" | "as-text" 
   
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
  ) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result; 
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combineNames = combine("Max", "Joe", "as-text");
console.log(combineNames); 



//

/*
Type Aliases & Object Types
Type aliases can be used to "create" your own types. You're not limited 
to storing union types though - you can also provide an alias to a 
(possibly complex) object type.

For example:
*/
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
// This allows you to avoid unnecessary repetition and manage types centrally.
// For example, you can simplify this code:

function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

// To:

type User2 = { name: string; age: number };
 
function greet2(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder2(user: User, checkAge: number) {
  return checkAge > user.age;
}