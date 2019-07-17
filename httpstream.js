const { createServer } = require("http")
const {createReadStream, stat, createWriteStream} = require("fs")
const {promisify} = require("util")

const file = "./bmx.mp4";
const fileInfo = promisify(stat);

const respondWithVideo = async (req,res)=>{

    const {size} = await fileInfo(file);
    const range = req.headers.range;
    
    if(range){
        let [start, end] = range.replace(/bytes=/,"").split('-');
        // console.log({"start": start, "end": end})
        start = parseInt(start,10);
        end = end ? parseInt(end,10) : size - 1;
        res.writeHead(206,{
            "Content-Range":`bytes ${start}-${end}/${size}`,
            "Accept-Range":"bytes",
            "Content-Length": (end - start) + 1,
            "Content-Type":"video/mp4"
        })
        createReadStream(file,{start,end}).pipe(res)
    }else{
        res.writeHead(200,
            {
                "Content-Type":"video/mp4", 
                "Content-Length":  size
            });
            createReadStream(file).pipe(res)
    }
    };

createServer((req,res)=>{
    if(req.method === "POST"){
        req.pipe(res)
        req.pipe(process.stdout)
        req.pipe(createWriteStream('CV.txt'))

    }else if(req.url === "/video"){
        respondWithVideo(req,res);
    }else{
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(`<form method="POST" action="/" enctype="multipart/form-data">
        <input type="file" name="upload-file">
        <button>upload file</button>
        </form>`)
    }
}).listen(3000,()=>console.log("connected at port - 3000"));