const readline = require("readline");
const { EventEmitter } = require("events")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

module.exports = (questions, done) =>{
    let answers = [];
    const [ firstquestion ] = questions;
    const emitter = new EventEmitter;
    const questionAnswered =  (answer) => {
        emitter.emit("answer", answer);
            answers.push(answer);
            if(answers.length < questions.length){
                rl.question(questions[answers.length], questionAnswered)
            }else{ 
                emitter.emit("complete", answers)
                done(answers) 
            }
        }
        rl.question(firstquestion, questionAnswered);
        return emitter;
}
