
const person = {
  name: 'Mikayel',
  age: 24,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'] // role: (string | number)[]
}

person.role.push('admin')
person.role[1] = (10)

// Tuple

const person2: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string] // Tuple
} = {
  name: 'Mikayel',
  age: 24,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'] 
}

// person2.role[1] = (10) // error //  Type 'number' is not assignable to type 'string'
// person2.role.push('admin') // this will work. Push is an exception. TS can't catch this error
// person2.role = [0, 'admin', 'user'] // error

/*
The length is enforced if we assign like this, but not for a pushing.
*/
