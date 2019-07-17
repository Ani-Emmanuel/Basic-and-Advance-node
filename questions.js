const collectAnswers = require('./libs/collectAnswer')
let questions = [
    'What is your name? ',
    'What would you like to do? ',
    'What is you preferred programming language? '
];

const answerEvent = collectAnswers(questions);

answerEvent.on("answer", answer => console.log(`You answer: ${answer}`))

answerEvent.on("complete", answers=>{
    console.log(`Thank you for your anwsers \n`);
    console.log(answers);
    process.exit();
})