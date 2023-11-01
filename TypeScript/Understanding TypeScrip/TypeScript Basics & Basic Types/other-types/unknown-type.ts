// The "unknown" Type

let userInput: any
let userName1: string

userInput = 5
userInput = 'Mikayel'
userName1 = userInput 

//

let userInput2: unknown
let userName2: string

userInput2 = 5
userInput2 = 'Mikayel'
// userName2 = userInput2 // error

//

let userInput3: unknown
let userName3: string

userInput3 = 5
userInput3 = 'Mikayel'
if(typeof userInput3 === 'string') {
  userName3 = userInput3 
}

