import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons'

function PlayerCard(props) {
    return (
        <View style={styles.playerGroup}>
            <Text style={styles.player}>{props.playerName}</Text>
            <Image source = {props.choice.uri} resizeMode="contain" style={styles.image}/>
            <Text>CHOICE: {props.choice.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  playerGroup: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black'
  },
  image: {
    width: 175,
    height: 175,
  },
  player: {
    textDecorationLine: 'underline',
    fontSize: 25,
    fontWeight: '400',
    color: 'red',    
  }
});
export default PlayerCard;