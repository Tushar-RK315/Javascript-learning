/*
1. var
- var is function-scoped.
- You can declare the same variable multiple times.
- You can change its value.
*/

/*
let
- let is block-scoped ({}).
- You cannot declare the same variable twice in the same scope.
- You can change its value.
*/

// The const keyword in JavaScript is used to declare variables that should not change after their initial assignment.


const accountId = 760188;
let accountEmail = "tm667788@gmail.com";
var accountPassword = "T@#7601";
// accountCity = "Kolkata"; // accountCity is a global variable because it is not declared with var, let, or const.

// let accountState; //This is called variable declaration without initialization. let age; means the variable has no assigned value, so its value is undefined.

// accountId = 88; not allowed because accountId is a constant variable and cannot be reassigned.

// JavaScript Variable Rules:
// 1. Variable names can contain letters, digits, _, and $.
// 2. A variable name cannot start with a digit.
// 3. Variable names cannot contain spaces.
// 4. JavaScript keywords like let and var cannot be used as variable names.
// 5. Variable names are case-sensitive: age and Age are different.
// 6. Use let or const to declare variables.

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
