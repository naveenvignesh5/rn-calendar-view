import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ThemeContext} from './themeContext';

const styles = StyleSheet.create({
  dayWrapper: {
    padding: 5,
  },
  dayContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    width: 40,
  },
  dayTextStyle: {
    fontWeight: 'bold',
  },
});

class Day extends Component {
  state = {};
  render() {
    const {
      selected,
      onDayPress = () => {},
      day,
      activeDayColor = this.context.activeDayColor,
      activeDayBackgroundColor = this.context.activeDayBackgroundColor,
    } = this.props;

    const dayContainerStyle = [styles.dayContainer];
    const dayTextStyle = [
      styles.dayTextStyle,
      {color: selected ? activeDayColor : this.context.dayColor},
    ];

    if (day) {
      dayContainerStyle.push({
        backgroundColor: selected
          ? activeDayBackgroundColor
          : this.context.dayBackgroundColor,
      });
    }

    return (
      <View style={styles.dayWrapper}>
        <TouchableOpacity
          onPress={() => onDayPress(day)}
          style={dayContainerStyle}>
          <Text style={dayTextStyle}>{day}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Day.contextType = ThemeContext;

export default Day;
