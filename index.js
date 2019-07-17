// function hideString(str){
//     return str.replace(/[a-zA-Z]/g,'x');
// }
// var hidden = hideString('Hello World');
// console.log(hidden);

// function hideString(str, done){
//     process.nextTick(()=>{ 
//         done(str.replace(/[a-zA-Z]/g,'x'));
//     });
// }

// hideString("Hello World", (hiden)=>{
//     console.log(hiden)
// })

// console.log('DONE')

// function delay(sec, callback){
//     setTimeout(callback, sec*1000);
// }

// console.log("Starting timer")
// delay(2, ()=>{
//     console.log("Two Secs");
//     delay(1,()=>{
//         console.log("three Secs")
//         delay(1, ()=>{
//             console.log("four Secs")
//             })
//     });
// })


var delay = (sec) => new Promise((resolves,rejects)=>{
    if(sec > 3){
        rejects(new Error(`${sec} is too long`))
    }
   setTimeout(() =>{
    resolves('the long awaited delay has ended')
   }, sec*1000)
});

//delay(1).then((message) => delay(1).then(()=>{console.log(message)}))
delay(5).then(console.log)
.then(()=> 42)
.then((number)=>console.log(`the number is: ${number}`))
.catch((error)=> console.log(`the error is ${error}`));
console.log("timing")
