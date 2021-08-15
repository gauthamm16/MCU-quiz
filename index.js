// Fanfiction quiz using nodejs CLI about Marvel Cinematic universe/multiverse😉
const readlineSync = require("readline-sync");
const chalk = require("chalk");
const log = console.log;
var score = 0;

function qna(q, a) {
  const quizAns = readlineSync.question(q);
  if (quizAns === a) {
    score++;
    log(chalk.green("Correct"));
  } else {
    log(chalk.red("Incorrect, Answer is:") + chalk.bgRedBright(a));
  }
}

lvlOne = {
  qOne: {
    question: "What was the first saga's finale movie name, Avengers:_____ \n",
    answer: "Endgame",
  },
  qTwo: {
    question: "Does Batman belong here\n",
    answer: "no",
  },
  qThree: {
    question: "Fill in the blank of the characcter's name, Dr._______\n",
    answer: "Strange",
  },
};

lvlTwo = {
  qFour: {
    question: "Number of Thor movies in the series\n",
    answer: "3",
  },
  qFive: {
    question: "Who is the main villan of the series\n",
    answer: "Thanos",
  },
  qSix: {
    question: "Who plays the role of Hulk in the series\n",
    answer: "Mark Ruffalo",
  },
};

lvlThree = {
  qSeven: {
    question: "How many actors have played Spiderman\n",
    answer: "3",
  },
  qEight: {
    question: "Who was the villan of the first Avengers movie\n",
    answer: "Loki",
  },
  qNine: {
    question: "What is name of Thor's hammer\n",
    answer: "mjolnir",
  },
};

qTen = {
  question:
    "Who is the coolest character in the MCU, though this is subjective, there is only one right answer\n",
  answer: "Iron man",
};

log(chalk.yellow("Welcome the the MCU quiz\n"));
const playerName = readlineSync.question("Lets start with your name: ");

log(chalk.yellowBright(" ----  Level 1  ----"));
qna(lvlOne.qOne.question, lvlOne.qOne.answer);
qna(lvlOne.qTwo.question, lvlOne.qTwo.answer);
qna(lvlOne.qThree.question, lvlOne.qThree.answer);
log(chalk.cyan("Your score after ROUND 1 is: ") + chalk.yellow(score));

qna(lvlTwo.qFour.question, lvlTwo.qFour.answer);
qna(lvlTwo.qFive.question, lvlTwo.qFive.answer);
qna(lvlTwo.qSix.question, lvlTwo.qSix.answer);
log(chalk.cyan("Your score after ROUND 2  is: ") + chalk.yellow(score));

qna(lvlThree.qSeven.question, lvlThree.qSeven.answer);
qna(lvlThree.qEight.question, lvlThree.qEight.answer);
qna(lvlThree.qNine.question, lvlThree.qNine.answer);
log(chalk.cyan("Your score after ROUND 3  is: ") + chalk.yellow(score));

qna(qTen.question, qTen.answer);
log(
  chalk.cyan("Your final score after all rounds  is: ") + chalk.yellow(score)
);

if (score < 8) {
  log(chalk.yellow("High scores"));
  log(chalk.red("Gautham\t") + chalk.cyan("10"));
  log(chalk.red("Rohaan\t") + chalk.cyan("8"));
  log(chalk.bgYellow(`${playerName}\t`) + chalk.bgYellow(`${score}`));
} else {
  log(chalk.yellow("High scores"));
  log(chalk.red("Gautham\t") + chalk.cyan("5"));
  log(chalk.bgYellow(`${playerName}\t`) + chalk.bgYellow(`${score}`));
  log(chalk.red("Rohaan\t") + chalk.cyan("4"));
}
