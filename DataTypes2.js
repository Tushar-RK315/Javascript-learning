// primitive dataTypes :- string, number, boolean, undefined, null, symbol, bigint.
// non-primitive dataTypes :- object, array, function.
// JavaScript is a dynamically typed language.
// const score = 100;
// const scoreValue = 100.3;
// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail;

// const id = Symbol('7601');
// const anotherId = Symbol('7601');

// console.log(id === anotherId);

// const bignum = 123n;
// console.log(typeof(bignum));

// console.log(typeof 42); // "number"
// console.log(typeof "Hello"); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" (a known quirk in JavaScript)
// console.log(typeof Symbol("id")); // "symbol"
// console.log(typeof function() {}); // "function"
// console.log(typeof { key: "value" }); // "object"

// console.log(typeof []); // "object"
// console.log(typeof new Date()); // "object"

//TODO:- start second part of the next chapter
// JavaScript implementations commonly use stack and heap memory, but the language
// specification does not require a particular memory layout.

// 1. Stack memory is commonly used for function calls and execution contexts.
// 2. Heap memory is commonly used for objects, including arrays and functions.
// Variables holding objects contain references to those objects; assigning one
// variable to another copies the reference, not the object.

let myName = "Tushar Roy Chaudhury";
let anothername = myName;

console.log(anothername);
