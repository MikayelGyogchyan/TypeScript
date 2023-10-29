function combine(input1: number | string, input2: number | string) {
  let result
  if(typeof input1 === 'number' && typeof input2 === 'number') { // always works with numbers
    result = input1 + input2;
  } else { // always works with strings 
    result = input1.toString() + input2.toString();
  }
  return result;
}

const  combineAges = combine(30, 26);
console.log(combineAges); // 56

const  combineNames = combine('Max', "Joe");
console.log(combineNames); // MaxJoe



 
