// function log(msg){
//     console.log(msg+" this is typescript.")
// }
// log('Hello World!')
//Typescript compiler will convert the variable name according to its condition
// function letFun(){
//     for(let i = 0;i<5;i++){
//         console.log(i)
//     }
//     console.log("Finally : "= i)
// }
// letFun()
// DataTypes
//Can't assign a type string to a type number  
// let num = 1 //Has the number type when we didn't mention the type it will assign the type based upon the value.
// num = 'a'
//How assign datatype to a variable.
// let a:number;
// let b:string;
// let c:boolean;
// let d:any; //Any will act as a datatype which allows all the type of data. (If we not declared a value/type ts compiler will assign any)
// let e:number[] = [1,2,3,4,5,6] //Only number values can be added
// let f:any[] = [1,2,3,"Helo",true] //Can assign any value
// let userAge: undefined;
// let bigNumber: bigint
// let sym: symbol;
// let user: [string, number] = ["Alice", 25]
// let person: { name: string, age: number }
// function logMessage(): void { //used for the function that does not return any value
//   console.log("Hello, World!");
// }
// //enum - Enumeration used to define a set of named constants. It's used when you want to represent a fixed set of related values in your code.
// enum Day { //When we not declared value it will start from 0.
//   Monday,
//   Tuesday,
//   Wednesday
// }
// console.log(Day.Monday)
//parameters :  Default parameter and Optional paramater
// function param(a,b?,c="s"){
//   console.log(a+b+c)
// }
//Assertion : Its a way to manually tell/assert the type of the value to the typescript
//Syntax's : 1.Using Angular bracket 2.Using as key word
// let str: any =  "Jaanu";
// let len: number = (<string> str).length;
// let len2: number = (str as string).length;
// console.log(len)
// console.log(len2)
//Arrow Function : Short hand property of creating function
// let logIn = (message) => {
//     console.log(message)
//     return message;
// }
// logIn("hey human")
//Interface - A blueprint for an object structure.
// interface Point1{
//     x:number,
//     y:number,
//     z:string
// }
// let draw = (point:Point1)=>{
//     console.log(point.x)
//     console.log(point.y)
//     console.log(point.z)
// }
// // draw(x:22,y:32,z:'hello')
// draw({x:2,y:2,z:'Helo'})
// let s:[String,String,String] = ["str","kavi","sasi"]
// interface Login{
//     userName:string;
//     passWord:string;
//     phNo:number;
//     isCurrentWorker:boolean;
// }
// let userLogin = (user:Login)=>{
//         console.log(user.userName)
//         console.log(user.passWord)
// }
// userLogin({userName:"Rahmath",passWord:"rahamath123",phNo:987654,isCurrentWorker:false})
// interface Greet {
//   (name: string): string;
// }
// console.log(sayHello("Sam"))
// enum Day{
//   monday,
//   Tuesday,
//   Wednesday
// }
// function WhatDay(day){
//   console.log(Day[day])
// }
// WhatDay(2)
//Class - A blueprint to create object.
//  class User{
//   firstName:string
//   lastName:string
//   age:number
//   constructor(firstName:string,lastName:string,age:number){
//     this.firstName=firstName
//     this.lastName=lastName
//     this.age=age
//   }  
//   greet(){
//     return `Hello! ${this.firstName} ${this.lastName}`
//   }
//   getAge(){
//     return this.age
//   }
//  }
//  let user1 = new User("Bathul","Asmia",20)
//  let user2 = new User("Rahmath","R",23)
//  console.log(user1.greet())
//  console.log(user1.getAge()); 
//Inheritance - process of acquiring the properties one class to another class.
// class Admin extends User{
//     adminId:number
//     designation:string 
//   constructor(firstName:string,lastName:string,age:number,admId:number,designation:string){
//       super(firstName,lastName,age)
//       this.adminId=admId
//       this.designation=designation
//     }
//     greet(): string {
//       return `Hello Admin ${this.firstName} ${this.lastName}`
//     } 
// }
// let adimn1 = new Admin("Jane","Pinkman",22,101,"Reporting Manager");
// console.log(adimn1.greet())
//Closures :  A closure is a feature in JavaScript (and TypeScript) where an inner function has access to variables from its outer function’s scope, even after the outer function has finished executing.
// let Counter=()=>{
//     let count=0;
//     return {
//       increment : () =>{
//         count++;
//       },
//       getValue : () =>{
//         return count
//       },
//       decrement : () =>{
//         count--
//       }
//     }
// }
// let counter1 = Counter();
// counter1.increment()
// console.log(counter1.getValue())
// let counter2 = Counter();
// counter2.increment()
// counter2.increment()
// console.log(counter2.getValue())
//Access Modifiers
//private - Accessible only within the class
//public - 	Accessible from anywhere
//protected - Accessible within the class and its subclasses
//readonly - Not an access modifier, but makes a property immutable after initialization
//Encapsulation - Process of hiding the data members and showing only the functionality.
// var User = /** @class */ (function () {
//     function User(userName, userAge, userId) {
//         this.userName = userName;
//         this.userAge = userAge;
//         this.userId = userId;
//     }
//     User.prototype.getId = function () {
//         return this.userId;
//     };
//     User.prototype.getName = function () {
//         return this.userName;
//     };
//     User.prototype.getAge = function () {
//         return this.userAge;
//     };
//     User.prototype.setName = function (userName) {
//         this.userName = userName;
//     };
//     User.prototype.setAge = function (userAge) {
//         this.userAge = userAge;
//     };
//     User.prototype.setId = function (userId) {
//         this.userId = userId;
//     };
//     return User;
// }());
// var user1 = new User("Jaanu", 21, 121);
// var user2 = new User("Rahmath", 23, 122);
// console.log(user1.getName());
// user1.setName("Jameela");
// console.log(user1.getName());
