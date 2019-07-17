var fs = require('fs');
var {promisify} = require('util');

function delay (seconds, callback){
    if(seconds > 3){
        callback(new Error(`${seconds} seconds delay is too long`));
    }else{
        setTimeout(()=>{
            callback(null, `the ${seconds} seconds delay is over`)
        }, seconds*1000)
    }
}

// delay(2,(error,message)=>{
//     if(error){
//         console.log(error.message)
//     }
//     console.log(message);
// })
var writeFile = promisify(fs.writeFile);
var promiseDelay = promisify(delay);
promiseDelay(5).then(console.log).catch((error)=>console.log(error.message))

writeFile("sample.txt","God will prosper all that we do Amen")
.then(()=>console.log("successfully created"))
.catch((error)=>console.log(`error: ${error.message}`))

