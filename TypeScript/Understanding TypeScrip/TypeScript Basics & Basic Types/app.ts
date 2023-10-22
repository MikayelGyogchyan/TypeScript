
const person = {
  name: 'Mikayel',
  age: 24,
  hobbies: ['Sports', 'Cooking'] // hobbies: string[]
}

// console.log(person.name);

let favoriteActivities: string[] 
favoriteActivities = ['Sports']

let favoriteActivitiesAny: any[] 
favoriteActivitiesAny = ['Sports', 1]

for(const hobby of person.hobbies) {
  console.log(hobby); // Sports Cooking
  console.log(hobby.toUpperCase()); // SPORTS COOKING
}


