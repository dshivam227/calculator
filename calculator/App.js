import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import MainScreen from './views/MainScreen';
import introScreen from './views/IntroScreen';
export default function App() {
  const [isloaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, timeout);
  return (

    <View style={styles.container}>
      {isloaded? <MainScreen/> : <IntroScreen/>};
    </View>
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
