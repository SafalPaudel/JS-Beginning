// Primitive
    // 7 Types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score  = 100
const scoreValue  = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

// const bigNumber = 34453868383928942n


// Reference ( Non-Primitive )
    // Array , Objects , Functions 


    const heroes = ["IronMan", "BatMan", "SpiderMan"]  //Array

 let myObj  = {
        name:"Safal",
        age: 20,
}

    const myFunction = function(){
        console.log("Hello World")
    }

    console.log(typeof bigNumber)
    console.log(typeof outsideTemp)
    console.log(typeof scoreValue )
    console.log(typeof myFunction)
    console.log(typeof heroes )
    console.log(typeof anotherId )

//***************************************************************

//  Stack  (Primitive) , Heap (Non-Primitive)

let myYoutubename = "SafalPaudel.com"

let anotherName = myYoutubename
anotherName = "MrBeast"

console.log(myYoutubename);
console.log(anotherName);

let user1 = {
    email : "user@gmail.com",
    esewa : "user@esewa"
}

let user2 = user1

user2.email = "safal@google.com"
console.log(user1.email);
console.log(user2.email);


// In Stack we get copy
// In Heap we ret references