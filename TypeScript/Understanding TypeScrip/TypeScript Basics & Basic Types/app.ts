// any

enum Role { ADMIN, READ_ONLY, AUTHOR} // default //  Role.ADMIN = 0, Role.READ_ONLY = 1, Role.AUTHOR = 2

const person2 = {
  name: "Mikayel",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

if(person2.role === Role.ADMIN) { // role: number
  console.log('Is ADMIN'); // Is ADMIN'
}

let favoriteActivities: any[] // array of something
favoriteActivities = ['Sports', 5]

/*
We can use any as a fallback, where we have same kind of data where we 
really can't know which kind of data will be stored in there.
*/