const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


rl.question("What is your name buddy: ", answer=>{
    console.log(`hey ${answer} how are you`);
})