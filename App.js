import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonGroup, GameStatus, PlayerCard, RoundResult} from './index';
import { CHOICES, randomComputerChoice, getRoundOutcome  } from './constants';


let totalRound = 0;
let roundWin = 0;
let roundLose = 0;
let roundDraw = 0;
let percentWin = 0;
let percentLose = 0;
let percentDraw = 0;
export default class Week3 extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerChoice: {},
      computerChoice: {},
      status: '',
    }
  }
  chooseBtn = playerChoice => {
    const foundChoice = CHOICES.find(choice=>choice.name === playerChoice)
    const computerChoice = randomComputerChoice();
    const status = getRoundOutcome(foundChoice, computerChoice)
    totalRound++;
    if(status == "You Win") roundWin++;
    else if(status == "You Lose") roundLose++;
    else roundDraw++;
    percentWin = (roundWin/totalRound)*100;
    percentLose = (roundLose/totalRound)*100;
    percentDraw = (roundDraw/totalRound)*100;
    this.setState({
      playerChoice: foundChoice,
      computerChoice: computerChoice,
      status: status,
    });
  };
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.statusWrapper}>
          <Text style={styles.titleGame}>SCISSORS-ROCK-PAPER</Text>
          <GameStatus status={this.state.status} totalRound={totalRound} />
        </View>
        <View style={styles.resultWrapper}>
          <RoundResult 
            roundWin={roundWin}
            roundLose={roundLose}
            roundDraw={roundDraw}
            percentWin={percentWin.toFixed(2)} 
            percentLose={percentLose.toFixed(2)} 
            percentDraw={percentDraw.toFixed(2)}
          />
        </View>
        <View style={styles.playerWrapper}>
          <PlayerCard playerName="PLAYER" choice={this.state.playerChoice}/>
          <PlayerCard playerName="COMPUTER" choice={this.state.computerChoice}/>
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonGroup onPressBtn={this.chooseBtn}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6F8C6',
    fontFamily: 'sans-serif-thin',
  },
  statusWrapper: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleGame: {
    fontSize: 30,
    fontWeight: '600',
    color: 'black'
  },
  resultWrapper: {
    flex: 0.05,
  },
  playerWrapper: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonWrapper: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
});
