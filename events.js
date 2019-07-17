const events = require("events")
const emitter = new events.EventEmitter();

emitter.on("customeEvent:", (message, user)=>{
    console.log(`${user} ${message}`)
})

process.stdin.on("data", data=>{
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customeEvent", "GoodBye", "Process")
        process.exit();
    }

    emitter.emit('customeEvent', input, "Terminal");
})



