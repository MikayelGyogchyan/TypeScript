function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult1(num: number): void { 
  console.log('Result: ' + num);
}
// we can use undefined instead of void but we have to return 
// with viod we do not return
function printResult2(num: number): undefined { 
  console.log('Result: ' + num);
  return;
}

printResult1(add(5, 12))
// let somewhere: undefined


// Functions as Types

let combineValues: (a: number, b: number) => number

combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));


// Function Types & Callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
})

/*
Callback functions can return something, even if the argument on which 
they're passed does NOT expect a returned value.

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({data: 'Hi there!'});
}
 
sendRequest('Send this!', (response) => { 
  console.log(response);
  return true;
 });
*/

