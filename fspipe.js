const {createReadStream,createWriteStream} = require("fs");

//const readStream = createReadStream('./text-sample.txt');
const writeStream = createWriteStream('test.txt');


// readStream.pipe(writeStream).on("error",err=>{
//     console.error(err)
// })


const action = process.stdin.pipe(writeStream);

if(action === "exit"){
    process.exit();
}