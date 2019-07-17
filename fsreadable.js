const {createReadStream, createWriteStream} = require('fs');

const Readstream = createReadStream('./bmx.mp4',{//highWaterMark:123344
});
const writeStream = createWriteStream('copy.mp4', {//highWaterMark:123344
} )

Readstream.on("data", data=>{
   const result = writeStream.write(data);
   if(!result){
       console.log("backpressure");
        Readstream.pause();
   }
});

writeStream.on("drain",()=>{
    console.log("drained")
    Readstream.resume();
})
Readstream.on("end", ()=>{
    writeStream.end()
});
Readstream.on("error", error=> {
    console.log("An error occured")
    console.error(error)
});

writeStream.on("close",()=>{
    console.log("file read successfully!")
})