// Object Types

// const person: {
//   name: string,
//   age: number
// } = {
//   name: 'Mikayel',
//   age: 24
// }

const person2 = {
  name: 'Mikayel',
  age: 24,
  hobbies: ['Sports', 'Cooking'] // hobbies: string[]
}

console.log(person2.name);
// console.log(person.name);

/*
Nested Objects & Types
Of course object types can also be created for nested objects.
let favoriteActivities: string[] 
favoriteActivities = ['Sports']

Let's say you have this JavaScript object:
let favoriteActivitiesAny: any[] 
favoriteActivitiesAny = ['Sports', 1]

const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
for(const hobby of person.hobbies) {
  console.log(hobby); // Sports Cooking
  console.log(hobby.toUpperCase()); // SPORTS COOKING
}
This would be the type of such an object:

{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
So you have an object type in an object type so to say.
*/