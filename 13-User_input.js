// Type 1 is :- readline module in Node.js. It is used to accept user input from the command line.

//! Example 1: Accepting user input using readline module in Node.js. 
// const input1 = require ("readline");

// const r1 = input1.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// r1.question("Enter your name: ",(name)=>{
//     console.log(name);
//     r1.close();
// })

//Todo: Example 2: Accepting user input using readline module in Node.js . but we can perform multiple input using this method.
//Todo: program :- Add two numbers using readline module in Node.js.

// const input2 = require("readline");

// const r2 = input2.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// r2.question("Enter num1 : ",(num1)=>{
//     r2.question("Enter num2 : ",(num2)=>{
//         console.log(`Sum of ${num1} and ${num2} is : ${Number(num1)+Number(num2)}`);
//         r2.close();
//     })
// })


// Type 2 is :- use prompt , alert and confirm method in Node.js. It is used to accept user input from the command line.

// alert("your script is works!!")

// alert("Enter the value of a !!");
// let a = prompt("Enter a here ", "879");
// a = Number.parseInt(a);
// document.write(a);
// document.write("<br>");
// document.write(typeof a);

// confirm:- 
// alert ("Enter a value of b !!!!!")
// let b = prompt("Enter b here :- ");
// b = Number.parseInt(b);

// let write = confirm("Do you want to write the value of b in page ?");
// if(write){
//     document.write(b);
// }else{
//     document.write("You have not write the value of b in page !!");
// }

// we can use Modal in future to accept user input from the command line. Modal is a popup window that appears on the screen and asks the user for input. It can be used to accept user input in a more user-friendly way.