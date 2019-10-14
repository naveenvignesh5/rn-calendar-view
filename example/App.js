import React from 'react';
import {StatusBar, SafeAreaView, Text, StyleSheet} from 'react-native';
import TimePicker from './components/TimePicker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
});

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>RN Timer Picker</Text>
        <TimePicker />
      </SafeAreaView>
    </>
  );
};

export default App;
