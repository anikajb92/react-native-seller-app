import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, SafeAreaView } from 'react-native';
import {useState} from 'react';

export default function App() {
  // const handlePress = () => console.log("text pressed");
  const [counter, setCounter] = useState(0);
  const addCounter = () => {
    setCounter(counter ++)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Add"></Button>
      <Text>{counter}</Text>
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
});
