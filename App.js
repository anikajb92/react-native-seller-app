import { StyleSheet, Text, Button, SafeAreaView } from 'react-native';
import React, {useState} from 'react';
import Counter from './counter';
import { PostAdd } from '@material-ui/icons';

export default function App() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  const addCounter = () => {
    setCount(count + 1)
  } 
  const reduceCounter = () => {
    setCount(count - 1)
  }

  // const postData = () => {
  //   fetch('https://...', {
  //     method: POST, 
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({count})
  //   })
  // }

  // const getData = () => {
  //   return fetch('https://...')
  //   .then(response => response.json())
  //   .then(info => console.log(info))
  // }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello world</Text>
      <Counter 
        addCounter={addCounter} 
        reduceCounter={reduceCounter}
      />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
