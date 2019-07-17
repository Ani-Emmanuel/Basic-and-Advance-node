const { Readable } = require('stream');
const request = require("request");
const fs = require("fs");
 

class ReadObjectStreat extends Readable{
    constructor(object){
        super({objectMode: true});
        this.array = object;
        this.index = 0;
    }

    _read(){
        const chunk = object;
        //const chunk = this.array[this.index];
        this.index += 1;
        this.push(chunk);
    }
}

var object = []
 
// request("https://reqres.in/api/users",(err, res, body)=>{
//     if(err) throw err;

//     fs.writeFile('justtest.json',JSON.stringify(body),(err)=>{
//         if(err) throw err
//     })
request("https://reqres.in/api/users",(err, res, body)=>{
    if(err) console.log(err);
   
    // try {
        
    //     // fs.createWriteStream('justtest.txt',JSON.stringify(body),(err)=>{
    //     //     if(err) throw err
    //     // })
    //     fs.createWriteStream('justtest.json',JSON.stringify(body)).then(()=>{
    //         console.log("success")
    //     });

    // } catch (error) {
    //     new Error("sorry an error occured")
    // }
    //const readStream = new ReadObjectStreat(body)
    // readStream.on("data", data =>{
    //     console.log(object)
    // })

    // fs.createWriteStream('justtest.json',JSON.stringify(body)).then(()=>{
    //     console.log("success")
    // }).catch(err =>{
    //     console.error(err);
    // })



//     fs.writeFile('justtest.json',JSON.stringify(body)).then(()=>{
//        const readable = fs.createReadStream('./justtest.json');
//        readable.on("data", data =>{
//            object = JSON.parse(data);
//            console.log(data);
//        } )
//     }).catch(err =>{
//         console.error(err)
//     })

 
//console.log(typeof JSON.parse(body))

const body1 = JSON.parse(body)
fs.writeFile('justtest.json',JSON.stringify(body1),err=>{
 if(err) throw err;
})

const readable = fs.createReadStream('./justtest.json', "UTF-8");
      
     readable.on("data", data =>{
           object = JSON.parse(data);
           console.log(object);

         // const d = data.replace(/[\/|\\]/g,"");
          // console.log(( typeof d));
       } )

      

 })



