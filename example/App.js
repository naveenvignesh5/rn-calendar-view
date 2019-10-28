import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
// import DatePicker from './components/DatePicker';
import { Calendar } from 'rn-calendar-view';

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
          <Calendar
            onDateChange={obj => Alert.alert('You have picked', `${obj.date}-${obj.month}-${obj.year}`)}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
