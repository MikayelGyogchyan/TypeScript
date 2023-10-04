const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2 
const num: number = 3e10

const message: string = 'Hello Typescript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'Typescript']

// Tuple
const contact: [string, number] = ['Vladilen', 1234567]

// Any
let variable: any = 42 
// ...
variable = 'New String'
variable = []

// ====
function sayMyName(name: string): void {
  console.log(name)
}
sayMyName('Хайзенберг')

// Never
/*
TypeScript introduced a new type never, which indicates the values 
that will never occur.
The never type is used when you are sure that something is never 
going to occur. For example, you write a function which will not 
return to its end point or always throws an exception.
*/
function throwError(message: string): never {
  throw new Error(message)
}

function infinite(): never {
  while (true) {

  }
}
/*
In the above example, the throwError() function throws an error and 
infinite() function is always executing and never reaches an 
end point because the while loop never ends. Thus, never type is used 
to indicate the value that will never occur or return from a function.

Difference between never and void
The void type can have undefined or null as a value where as never 
cannot have any value.
*/
let something: void = null;
let nothing: never = null; // Error: Type 'null' is not assignable to type 'never'
/*
In TypeScript, a function that does not return a value, actually 
returns undefined. Consider the following example.
*/
function sayHi(): void { 
  console.log('Hi!')
}

let speech: void = sayHi();
console.log(speech); // undefined
/*
As you can see in the above example, speech is undefined, because the 
sayHi function internally returns undefined even if return type is 
void. If you use never type, speech:never will give a compile time 
error, as void is not assignable to never.
*/

// Type
type Login = string

const login: Login = 'admin'
// const login2: Login = 2

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true

type SomeType = string | null | undefined
/*
We will often see null | undefined, but to specify an empty type for 
functions, so a function that doesn't return anything we use 'void'.
*/