// let score = 33;
// console.log(typeof score);

//  let age = "18";
// console.log(age);
// console.log(typeof(age));

// let years_of_old = Number(age);
// console.log(years_of_old);
// console.log(typeof(years_of_old)); //? that is called type conversion of javaScript

/*
! NaN problem
* suppose we are facing this problem :-

let num = "77abc";
console.log(num,"   typeof:-",typeof(num));

let valueInNumber = Number(num)
console.log(valueInNumber,"   typeof:-",typeof(valueInNumber));

Number("77abc") returns NaN because the string contains letters.
Its type is still "number" because NaN is a special numeric value in JavaScript.

*/
//! only for boolean conversion:- 
// * 1 => true
// * 0 => false
// * "" => false
// * "Tushar" => true

//! string to number conversion
/*
* Number("Tushar") returns NaN because the string contains text instead of a valid number.
* Its type is still "number" because NaN is a special numeric value in JavaScript.
* Number("") returns 0 because an empty string converts to zero in JavaScript. Its type changes from "string" to "number".

*/
// let age = "";
// console.log(age);
// console.log(typeof(age));

// let years_of_old = Number(age);
// console.log(years_of_old);
// console.log(typeof(years_of_old));

// let num = 87;
// let stringNumber = String(num);
// console.log(typeof(stringNumber),stringNumber);

