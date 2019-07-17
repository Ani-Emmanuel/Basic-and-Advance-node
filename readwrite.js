const { Readable } = require('stream')
const peak = [
"Tallac",
"Ralston",
"Rubicon",
"Twin Peacks",
"Castle Peacks",
"Rose",
"Freal Peak"
];



class StreamFromArray extends Readable{
    constructor(array){
        super({encoding:"UTF-8"});
        this.array = array;
        this.index = 0
    }
    
    _read(){
       // if(this.index <= this.array.length){
            const chunk = this.array[this.index];
            this.push(chunk);
            this.index += 1;
        // }else{
        //     this.push(null)
        // }
    }
} 

const readStream = new StreamFromArray(peak);
readStream.on("data", chunk => console.log(chunk));
readStream.on("close", ()=> console.log("Done!"))