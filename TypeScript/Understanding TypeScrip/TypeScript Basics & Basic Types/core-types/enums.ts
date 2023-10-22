// Enums

const ADMIN = 0
const READ_ONLY = 1
const AUTHOR = 2

const person5 = {
  name: "Mikayel",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: ADMIN
};

if(person5.role === ADMIN) { // role: number
  console.log('Is ADMIN'); // Is ADMIN'
}

// With Enums

enum Role { ADMIN, READ_ONLY, AUTHOR} // default //  Role.ADMIN = 0, Role.READ_ONLY = 1, Role.AUTHOR = 2
enum Role1 { ADMIN = 5, READ_ONLY, AUTHOR} // Role.ADMIN = 5, Role.READ_ONLY = 6, Role.AUTHOR = 7
enum Role2 { ADMIN = 5, READ_ONLY, AUTHOR = 33} // Role.ADMIN = 5, Role.READ_ONLY = 6, Role.AUTHOR = 33
enum Role3 { ADMIN = 'ADMIN', READ_ONLY = 44, AUTHOR = 33} // Role.ADMIN = "ADMIN", Role.READ_ONLY = 44, Role.AUTHOR = 33

const person6 = {
  name: "Mikayel",
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

if(person6.role === Role.ADMIN) { // role: number
  console.log('Is ADMIN'); // Is ADMIN'
}