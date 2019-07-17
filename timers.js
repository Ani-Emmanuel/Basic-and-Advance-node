const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;


const incl = ()=>{
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime) * 100)
    // console.log(p)
    // console.log(currentTime)
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting.....${p}%`)
}

const finishTime = () =>{
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0)
    console.log("Done")
}
 
const interval = setInterval(incl,waitInterval);

setTimeout(finishTime, waitTime);