import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

function GameStatus(props) {
    if(props.status === 'You Win'){
        return <Text style={styles.statusWin}>Round {props.totalRound} : {props.status}</Text>
    }    
    if(props.status === 'You Lose'){
        return <Text style={styles.statusLose}>Round {props.totalRound} : {props.status}</Text>
    }
    return <Text style={styles.statusTie}>Round {props.totalRound} : {props.status}</Text>
}

const styles = StyleSheet.create({
  statusTie: {
    fontSize: 25,
    fontWeight: '600',
    color: 'blue'
  },
  statusWin: {
    fontSize: 25,
    fontWeight: '600',
    color: 'green'
  },
  statusLose: {
    fontSize: 25,
    fontWeight: '600',
    color: 'red'
  },
});
export default GameStatus;