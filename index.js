const prompt = require("prompt-sync")();

// let num = Math.floor(Math.random() * 10);
// let guess = -1;
// let cnt = 1;

// while (guess != num) {
//   guess = prompt("Enter a number: ");

//   if (guess > num) {
//     console.log("Greater");
//   } else if (guess < num) {
//     console.log("Smaller");
//   } else {
//     console.log("You got it!!");
//     console.log("Your point = ", -cnt);
//   }

//   cnt++;
// }

let obj = {
  a: 3,
  b: 6,
  c: 7
};

console.table(obj);
