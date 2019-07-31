// CHOICES array
const CHOICES = [ 
    { 
      name: 'ROCK', 
      uri: require('./assets/rock.png')
    }, 
    { 
      name: 'PAPER',
      uri: require('./assets/paper.png')
    }, 
    { 
      name: 'SCISSORS', 
      uri: require('./assets/scissors.png')
    } 
];
const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];
const getRoundOutcome = (foundChoice, computerChoice) => {
    let resultTxt;
    if(foundChoice.name === 'ROCK')
      resultTxt = computerChoice.name === 'PAPER' ? 'You Lose' : 'You Win'
    if(foundChoice.name === 'PAPER')
      resultTxt = computerChoice.name === 'SCISSORS' ? 'You Lose' : 'You Win'
    if(foundChoice.name === 'SCISSORS')
      resultTxt = computerChoice.name === 'ROCK' ? 'You Lose' : 'You Win'
    if(foundChoice.name === computerChoice.name)
      resultTxt = 'Tie Game'
    return resultTxt;
  };
export { CHOICES, randomComputerChoice, getRoundOutcome };