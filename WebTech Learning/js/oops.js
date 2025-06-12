//Object - A Collection of data in the pair of key and value, Used to store and organise the data.
//the keys are called properties and values can be anything numbers, strings, functions, arrays, other objects, etc.
// let user = {
//     userName:"Ramesh",
//     age:"23",
//     login(){
//         console.log(`${this.userName} : Login`)
//     },
//     logout(){
//         console.log(`${this.userName} : Log out`)
//     }
// }
// user.login()
// console.log(user.userName,user.age)

//CLASS - A Blueprint for creating objects, lets you define properties (data) and methods (functions) that the created objects will have.

// class User{
//     //static variable and methods belong to the class itself, not to instances of the class. This means you can call them without creating an object (instance) of that class.
//     static numberofUsers = 0;
//     constructor(name,age){
//             //instance variables    
//         this.name = name
//         this.age = age
//         User.numberofUsers++
//     }
//     static totalusers(){
//         console.log(`Total number of Users = ${User.numberofUsers}`)
//     }
//     login(){
//         console.log(`Hello, ${this.name} you have been logged in!
//             Age :${this.age}`)
//     }
//     logout(){
//        console.log(`Hello, ${this.name} you have been logged out!
//             Age :${this.age}`)
//     }
// }

// let user1 = new User('Jameela Banu',21)
// let user2 = new User('Rahamathulla',23)
// console.log(user1.name)
// console.log(user2.name)
// console.log(user1)
// console.log(user2)
// // user1.login()
// // user2.login()
// // user1.logout()
// // user2.logout()

// User.totalusers()

// //Inheritance - Acquiring the properties of one class to another class.
// //ES6
// class PaidUser extends User{
//     message(){
//         console.log("You are a Paid 'USER'")
//     }
//     //Overriding
//     login(){
//         console.log(`Hello ${this.name}! Thanks for logged in`)
//         return this
//     }
// }
// console.log("-----------Inheritance-----------")
// let paidUser1 = new PaidUser("Jaanu",21)
// let paidUser2 = new PaidUser("Rahhu",23)
// paidUser1.login()
// paidUser2.login()
// paidUser1.message()

// //method chaining - is a programming pattern where multiple methods are called on the same object in a single line, one after another. This is possible when each method returns the object itself (this), allowing the next method to be called.
// console.log("---------Method Chaining---------")
// paidUser1.login().message()
// paidUser2.login().message()


//Prototype - Every JavaScript function (which includes constructors) has a prototype property. This prototype is an object from which instances inherit methods and properties.
function User(name,id){
   this.name = name
   this.id=id
}
User.prototype.login = function(){
    console.log('hi..',this.name)
    console.log("You're logged in")
}
let user1=new User("Rahmath",18)
user1.login()

//get set