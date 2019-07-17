const fs = require('fs');
const http = require('http');
const file = './bmx.mp4';

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'video/mp4'});
    fs.createReadStream(file)
    .pipe(res)
    .on('error',console.error)
}).listen(3000,()=>{
    console.log("server started")
})