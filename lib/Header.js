import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../themeContext';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    width: '100%',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  month: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  monthText: {
    fontWeight: 'bold',
  },
  year: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  yearText: {
    fontWeight: 'bold',
  },
});

class Header extends PureComponent {
  state = {};
  render() {
    let {
      month,
      year,
      onPrevPress,
      onNextPress,
      onMonthPress,
      onYearPress,
    } = this.props;

    month = month < 10 ? `0${month}` : month;

    const buttonStyle = [
      {backgroundColor: this.context.dayBackgroundColor},
      styles.button,
    ];

    return (
      <View style={styles.header}>
        <TouchableOpacity style={buttonStyle} onPress={onPrevPress}>
          <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onMonthPress}
          style={[
            {backgroundColor: this.context.dayBackgroundColor},
            styles.month,
          ]}>
          <Text style={[{color: this.context.dayColor}, styles.monthText]}>
            {month}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onYearPress}
          style={[
            {backgroundColor: this.context.dayBackgroundColor},
            styles.year,
          ]}>
          <Text style={[{color: this.context.dayColor}, styles.yearText]}>
            {year}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyle} onPress={onNextPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Header.contextType = ThemeContext;

export default Header;
