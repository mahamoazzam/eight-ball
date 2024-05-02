let userName = 'Maha';
userName ? console.log(`Hello, ${userName}!`)
: console.log('Hello!');

const userQuestion = 'Will I get bubble tea today?';
console.log(`${userName} has asked - Will I get bubble tea today?`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0 :
  eightBall = 'Do not count on it';
  break;
  case 1 :
  eightBall = 'My sources say no';
  break;
  case 2 :
  eightBall = 'Outlook not so good';
  break;
  case 3 :
  eightBall = 'Cannot predict now';
  break;
  case 4 :
  eightBall = 'Reply hazy try again';
  break;
  case 5 :
  eightBall = 'Signs point to yes';
  break;
  case 6 :
  eightBall = 'It is decidedly so';
  break;
  case 7 :
  eightBall = 'It is certain';
  break;
}

console.log(eightBall);
