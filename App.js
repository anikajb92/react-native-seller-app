import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, SafeAreaView } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  // const handlePress = () => console.log("text pressed");
  const [count, setCount] = useState(0);
  const addCounter = () => {
    setCount(count + 1)
  } 
  const reduceCounter = () => {
    setCount(count - 1)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Add" onPress={() => addCounter()}></Button>
      <Button title="Subtract" onPress={reduceCounter}></Button>
      <Text style={styles.countText}>Count: {count}</Text>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    color: 'red'
  }
});
