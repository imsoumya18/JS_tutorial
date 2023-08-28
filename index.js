const prompt = require("prompt-sync")();

let a = prompt("Enter a number ");
a = parseInt(a);

if (a % 2 == 0) console.log("Even");
else console.log("Odd");
