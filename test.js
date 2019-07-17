const readline = require("readline");


let questions = [
    'What is your name? ',
    'What would you like to do? ',
    'What is you preferred programming language? '
];


const [one] = questions;

// readline.questions(one,()=>{
//     console.log("i ")
// })
readline.moveCursor(0)
readline.moveCursor(9,console.log("i hav e"))

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout})

rl.prompt("hi");
rl.write("hello world")

readline.cursorTo(0)