import React from 'react'
import {View, Button, Text, StyleSheet} from 'react-native';

export default function counter(props) {

  return (
     <View>
      <Button title="Add" onPress={() => props.addCounter()}></Button>
      <Button title="Subtract" onPress={() => props.reduceCounter}></Button>
      <Text style={styles.countText}>Count: {props.count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  countText: {
    color: 'red'
  }
});