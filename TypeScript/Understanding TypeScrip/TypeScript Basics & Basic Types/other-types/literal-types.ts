// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: string
// ) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   if (resultConversion === "as-number") {
//     return +result;
//   } else {
//     return result.toString();
//   }
// }

// const combineAges = combine(30, 26, "as-number");
// console.log(combineAges); // 56

// const combineStringAges = combine("30", "26", "as-number");
// console.log(combineStringAges); // 3026

// const combineNames = combine("Max", "Joe", "as-text");
// console.log(combineNames); // MaxJoe


//
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" // we use a union type combined with literal types. Literal types are the types which are based on your core types string, number, but then you have a specific version of the type. And, so here we allow these 2 strings, not any string, but just these 2 strings. Any other string values will not be allowed.
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result; 
  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges); // 56

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges); // 56

const combineNames = combine("Max", "Joe", "as-text");
console.log(combineNames); // MaxJoe
