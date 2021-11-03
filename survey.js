const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = []
rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  answers.push(answer);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    answers.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      answers.push(answer);
      rl.question('What\'s your favourite thing to eat? ', (answer) => {
        answers.push(answer);
        rl.question('Which sport is your absolute favourite? ', (answer) => {
          answers.push(answer);
          rl.question('What is your superpower? ', (answer) => {
            answers.push(answer);
            console.log(answers)
            console.log(`${answers[0]} enjoys listening to ${answers[2]} while ${answers[1]}. ${answers[0]} also loves to eat ${answers[4]} and play or watch ${answers[3]}. ${answers[0]}'s superpower is ${answers[5]}'`);
            rl.close();
          })
        })
      })
    });
  });
});


