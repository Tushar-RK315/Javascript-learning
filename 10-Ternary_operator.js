//* Ternary operator :- The JavaScript ternary operator is a shorthand for if...else that uses the syntax condition ? exprIfTrue : exprIfFalse, returning one of two expressions based on a Boolean condition.

//* We use the ternary operator to write simple if...else conditions in a shorter and cleaner way
//* Main purpose: To reduce code and make simple conditional statements easier to write.


//Todo:   code :-

// let age = 10 ;

// if(age>=18){
//     document.write(`you are an adult because your age is :- ${age}`);
// }else{
//     document.write(`you are minor because your age is :- ${age}`);
    
// }  // this is simple if else condition which can be written in a single line using ternary operator:-


//! now we are using ternary operator to write the above code in a single line:-

// const age = 18;

// age>=18 ? document.write(`you are an adult because your age is :- ${age}`) : document.write(`you are minor because your age is :- ${age}`);

// age>=18 ? console.log('you are an adult'):console.log('you are minor');


//? give some grade use ternary operator basis on Number:-

// let score = 100;

// let grade = score>=90?"O":score>=80?"E":score>=70?"A":score>=60?"B":score>=50?"C":score>=40?"D":score>=30?"D-":"Fail";

// document.write(`your score is :- ${score} and your grade is :- ${grade}`);