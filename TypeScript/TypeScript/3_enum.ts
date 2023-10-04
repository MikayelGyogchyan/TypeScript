/*
Enums allow a developer to define a set of named constants. Using 
enums can make it easier to document intent, or create a set of 
distinct cases. TypeScript provides both numeric and string-based 
enums.
*/
enum Membership {
  Hopar1, // 0 
  Hopar2, // 1
  Hopar3  // 2
}

const membership = Membership.Hopar2
const membershipReverse = Membership[2]

console.log(membership) // 1
console.log(membershipReverse) // Hopar3

//
enum SocialMedia {
  VK = 'Vk',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
}

const social = SocialMedia.INSTAGRAM
console.log(social) // INSTAGRAM

