let question = [
    'What is your name:',
    'What would you like to do:',
    'What is you preferred programming language"'
];


let ask = (i=0)=>{
    process.stdout.write(`\n${question[i]}\n `);
    process.stdout.write(`> `)
}

let answer = [];
process.stdin.on('data', data=>{
    answer.push(data.toString().trim());
    if(answer.length < question.length){
        ask(answer.length);
    }else{
        process.exit();
    }
});

process.on('exit', ()=>{
    const [name, activity, lang] = answer;
    console.log(`Hey ${name} Go do ${activity} and then write ${lang}`)
})


ask();