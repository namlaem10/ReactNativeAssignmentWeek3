import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CHOICES } from '../constants'

function ButtonGroup(props) {
  return(
    CHOICES.map(item => {
      return(
        <TouchableOpacity key={item.name} style={styles.button} onPress={() => props.onPressBtn(item.name)}>
          <Text style={styles.txtBtn}>{item.name}</Text>
        </TouchableOpacity>
      );
    })
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'pink',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10, 
    borderRadius: 15,
    width: 120,
    alignItems: 'center'
  },
  txtBtn: {
    fontSize: 18,
    fontWeight: '600'
  }
});
export default ButtonGroup;