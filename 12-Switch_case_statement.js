// The switch statement is used to execute different blocks of code based on different conditions or matching values.


/*
let inputA = require('readline');

let User = inputA.createInterface({
    input:process.stdin,
    output:process.stdout
})

User.question("Enter a number between 1 and 7: ",(Day)=>{
    switch (Number(Day)) {
        case 1:
            console.log("Monday");
            break;
        case 2 :
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid input. Please enter a number between 1 and 7.");
            break;
    }

    User.close();
})
*/



/*
const input = require("readline");

const r1 = input.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter your marks: ", (marks) => {

    const score = Number(marks);

    switch (true) {
        case (score >= 90 && score <= 100):
            console.log("Your grade is: O");
            break;

        case (score >= 80):
            console.log("Your grade is: E");
            break;

        case (score >= 70):
            console.log("Your grade is: A");
            break;

        case (score >= 60):
            console.log("Your grade is: B");
            break;

        case (score >= 50):
            console.log("Your grade is: C");
            break;

        case (score >= 40):
            console.log("Your grade is: D");
            break;

        case (score >= 0):
            console.log("Fail");
            break;

        default:
            console.log("Invalid marks! Enter marks between 0 and 100.");
    }

    r1.close();
});

*/