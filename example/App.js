import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import DatePicker from './components/DatePicker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 20,
  },
});

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Date Picker</Text>
          <DatePicker onDateChange={obj => console.log(obj)} />
          <Text style={styles.title}>Time Picker</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
