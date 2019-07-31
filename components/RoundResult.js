import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function RoundResult(props) {
    return(
        <View>
            <View style={styles.resultGroup}>
                <Text style={styles.resultWin}>Win: {props.roundWin} ({props.percentWin}%)</Text>
                <Text style={styles.resultLose}>Lose: {props.roundLose} ({props.percentLose}%)</Text>
                <Text style={styles.resultDraw}>Draw: {props.roundDraw} ({props.percentDraw}%)</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    resultGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    resultWin: {
        color: 'green',
        fontWeight: '400'
    },
    resultLose: {
        color: 'red',
        fontWeight: '400'
    },
    resultDraw: {
        color: 'blue',
        fontWeight: '400'
    }
});
export default RoundResult;