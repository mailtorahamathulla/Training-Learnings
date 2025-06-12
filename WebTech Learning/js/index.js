// let handleSubmit = (event) => {
//   event.preventDefault(); 

//   let name = document.getElementById("name").value;
//   let age = document.getElementById("age").value;
//   let mail = document.getElementById("mail").value;
//   let job = document.getElementById("job").value;

//   console.log(name, age, mail, job);

//   let table = document.getElementById("table");

//   let tr = document.createElement("tr");

//   let td1 = document.createElement("td");
//   td1.textContent = name;

//   let td2 = document.createElement("td");
//   td2.textContent = age;

//   let td3 = document.createElement("td");
//   td3.textContent = mail;

//   let td4 = document.createElement("td");
//   td4.textContent = job;

//   tr.appendChild(td1);
//   tr.appendChild(td2);
//   tr.appendChild(td3);
//   tr.appendChild(td4);

//   table.appendChild(tr);

  
//   document.getElementById("name").value = "";
//   document.getElementById("age").value = "";
//   document.getElementById("mail").value = "";
//   document.getElementById("job").value = "";
// };

// Events

// const grandparent = document.getElementById("grandparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// // Capturing phase
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("Grandparent - Capturing");
//   },
//   true // true means capturing phase
// );

// // Bubbling phase
// grandparent.addEventListener("click", () => {
//   console.log("Grandparent - Bubbling");
// });

// // Bubbling phase
// parent.addEventListener("click", () => {
//   console.log("Parent - Bubbling");
// });

// // Target phase
// child.addEventListener("click", (e) => {
//   console.log("Child - Clicked");

//   // Uncomment this to stop event from bubbling up
//   // e.stopPropagation(); 
// });

// const button = document.getElementById('btn');

// button.addEventListener('click', function(event) {
//   console.log('target:', event.target);         // Element clicked (could be <span> or <button>)
//   console.log('currentTarget:', event.currentTarget); // Always <button> (where listener is attached)
// });

// let list = document.getElementById("ul");
// list.addEventListener("click",(element)=>{
//   console.log(element.target)
//   console.log(element.currentTarget)
//   element.target.textContent = "Changed"
//   element.currentTarget.style="border"
// })


//! For of - to iterate every element in an array.

// let arr = [1,2,3,4,5,6,7,8,9,10];
// for(let num of arr){
//   console.log(num*2)
// }

//For in - to iterate each and every key and value pairs in an array

//  let obj = {
//   name : "Rahmath",
//   qualificatin:"Ece",
//   job:"Software Developer"
// }
// for(let key in obj){
//   // console.log(key)
//   console.log(obj[key])
// }

// let arr = [2,6,7,8,9,10]
// arr.forEach((val,index,arr)=>{
//   console.log(val)
//   if(index%2==0){
//     arr[index]=2
//   }
// })
// console.log(arr)

// let select = document.getElementById("select")
// let arr = ["Apple","Orange","Mango","Gauva"]

// for(i=0;i<arr.length;i++){
//   let option = document.createElement("option")
//   option.textContent = arr[i];
//   select.appendChild(option)
// }
// let j = arr.map((e)=>{
//   console.log(e)
//     return e+" jaanu"
// })

// console.log(j)

// let prom = new Promise((resolve,reject)=>{
//   let reach = true
//   if(reach) setTimeout(resolve,3000,"I am reached")
//     else reject("Not yet reached")
//   })

//Using asyn await

//  async function asyncState() {
//   console.log("Started")
//   res=await prom
//   console.log(res)
//   console.log("Ended")
//  }

//  asyncState()