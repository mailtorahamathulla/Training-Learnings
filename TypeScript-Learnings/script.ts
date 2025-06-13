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

// class User{
//   private userName:string;
//   private userAge: number;
//   private userId: number;

//   constructor(userName:string,userAge:number,userId:number){
//     this.userName = userName;
//     this.userAge = userAge;
//     this.userId = userId 
//   }
//   getId(){
//     return this.userId
//   }
//   getName(){
//     return this.userName
//   }
//   getAge(){
//     return this.userAge
//   }
//   setName(userName:string){
//       this.userName = userName;
//   }
//   setAge(userAge:number){
//     this.userAge=userAge;
//   }
//   setId(userId:number){
//     this.userId=userId
//   }
// }

// let user1 = new User("Jaanu",21,121);
// let user2 = new User("Rahmath",23,122);
// console.log(user1.getName())
// user1.setName("Jameela");
// console.log(user1.getName())


//Static Function
// A static function (or static method) is a function that is defined on a class itself, rather than on instances of the class.

//With help of class name only we can access the static functions
// class MathUtils {
//   // Static method: belongs to the class, not to any object
//   static add(a: number, b: number): number {
//     return a + b;
//   }

//   static multiply(a: number, b: number): number {
//     return a * b;
//   }
// }

// //Using the static methods directly from the class
// console.log(MathUtils.add(10, 20));       // Output: 30
// console.log(MathUtils.multiply(5, 6));    // Output: 30

// class Person {
//   name: string = "John";

//   static sayHello() {
//     // console.log(this.name);Error: 'name' is an instance property, not static
//   }
// }
//Static properties :
//A static property is a property that belongs to the class itself, not to instances of the class.

// class Counter {
//   static count: number = 0; // Static property

//   static increment() {
//     Counter.count++;
//     console.log(`Count is now: ${Counter.count}`);
//   }
// }

// // No need to create an object
// Counter.increment(); // Count is now: 1
// Counter.increment(); // Count is now: 2
// console.log(Counter.count); // Output: 2

//Generics - <T> as parameter
//Works with Functions, Interfaces, Classes, etc.

// function echo<T>(value: T): T {
//   return value;
// }

// console.log(echo(123));//T = number
// console.log(echo("Hello"));//T = string

// class DataStore<T> {
//   private data: T[] = [];

//   add(item: T) {
//     this.data.push(item);
//   }

//   getAll(): T[] {
//     return this.data;
//   }
// }

// const store = new DataStore<string>();
// store.add("apple");
// store.add("banana");

//Typecasting - Syntax as & <>
// let value: any = "TypeScript";
// let length1 = (value as string).length;// Treat 'value' as string
// let someValue: any = "Hello";
// let strLength: number = (<string>someValue).length;
// const input = document.getElementById("username") as HTMLInputElement;
// console.log(input.value); // Now 'value' is accessible

//Intersection Types - An intersection type in TypeScript is used to combine multiple types or interfaces into one.
// The resulting type must have all the properties from the combined types.

// interface Person {
//   name: string;
// }

// interface Employee {
//   employeeId: number;
// }

// type Staff = Person & Employee;

// const john: Staff = {
//   name: "John",
//   employeeId: 101
// };


//Decorator - A decorator is like a special sticker (@something) you put on a class, method, or property to add extra powers to it without changing the original code.

//CLass Decorator
// function Logger(constructor: Function) {
//   console.log("Class created:", constructor.name);
// }

// @Logger
// class User {}
// When User class is defined, logs: "Class created: User"

//Method Decorator
// function Log(target: any, key: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value;
//   descriptor.value = function (...args: any[]) {
//     console.log(`Called ${key} with args:`, args);
//     return original.apply(this, args);
//   };
// }

// class Calculator {
//   @Log
//   add(a: number, b: number) {
//     return a + b;
//   }
// }

// new Calculator().add(2, 3);
// Logs: Called add with args: [2, 3]

//Property Decorator

// function ReadOnly(target: any, key: string) {
//   Object.defineProperty(target, key, {
//     writable: false,
//   });
// }

// class Book {
//   @ReadOnly
//   title = "TypeScript";
// }

// const book = new Book();
// book.title = "JavaScript"; // Fails silently or throws error in strict mode
