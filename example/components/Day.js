import React, {memo} from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';
import {DEFAULT} from '../default';

const styles = StyleSheet.create({
  dayContainer: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
});

const Day = memo(
  ({
    day,
    onDayPress,
    selected = false,
    activeDayColor = DEFAULT.activeDayColor,
    activeDayBackgroundColor = DEFAULT.activeDayBackgroundColor,
  }) => {
    const dayContainerStyle = [styles.dayContainer];

    if (selected) {
      dayContainerStyle.push({
        color: activeDayColor,
        backgroundColor: activeDayBackgroundColor,
      });
    }

    return (
      <TouchableHighlight style={dayContainerStyle} onPress={onDayPress}>
        <Text>{day}</Text>
      </TouchableHighlight>
    );
  },
);

export default Day;
