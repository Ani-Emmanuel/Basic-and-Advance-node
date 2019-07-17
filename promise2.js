var delay = (second) => new Promise((resolve)=>{
    setTimeout(resolve, second*1000);
});

var task = [
    delay(4),
    delay(6),
    delay(4),
    delay(3),
    delay(5),
    delay(7),
    delay(9),
    delay(3),
    delay(10),
    delay(2),
    delay(11),
    delay(1),
]

class PromiseQuene{
    constructor(promises=[],concurrentCount=1){
        this.concurrent = concurrentCount;
        this.total = promises.length;
        this.toDo = promises;
        this.running = [];
        this.completed = [];
    }

    get runAnother(){
        return (this.running < this.concurrent) && this.toDo.length;
    }

    run(){
        while(this.runAnother){
            var promise = this.toDo.shift();
            promise.then(()=>{
                this.completed.push(this.running.shift)
                this.run()
            })

            this.running.push(promise)
        }
    }
}

var delayQuene = new PromiseQuene(task, 2);
delayQuene.run();