/*
The same function can work with different types.
*/

const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['Hello', 'Vladilen']

function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)
/*
Here we have indicated some generic Type that will adapt to the 
correspondingly specific content that is in this array
*/