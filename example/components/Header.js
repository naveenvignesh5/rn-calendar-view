import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DEFAULT} from '../default';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DEFAULT.dayBackgroundColor,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  month: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: DEFAULT.dayBackgroundColor,
    borderRadius: 10,
  },
  monthText: {
    color: DEFAULT.dayColor,
    fontWeight: 'bold',
  },
  year: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: DEFAULT.dayBackgroundColor,
    borderRadius: 10,
  },
  yearText: {
    color: DEFAULT.dayColor,
    fontWeight: 'bold',
  },
});

class Header extends PureComponent {
  state = {};
  render() {
    let {month, year, onPrevPress, onNextPress} = this.props;

    month = month < 10 ? `0${month}` : month;

    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={onPrevPress}>
          <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.month}>
          <Text style={styles.monthText}>{month}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.year}>
          <Text style={styles.yearText}>{year}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onNextPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
