import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {DEFAULT} from '../default';

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

const Day = props => {
  const {
    selected,
    onDayPress = () => {},
    day,
    activeDayColor = DEFAULT.activeDayColor,
    activeDayBackgroundColor = DEFAULT.activeDayBackgroundColor,
  } = props;

  const dayContainerStyle = [styles.dayContainer];
  const dayTextStyle = [
    styles.dayTextStyle,
    {color: selected ? activeDayColor : DEFAULT.dayColor},
  ];

  if (day) {
    dayContainerStyle.push({
      backgroundColor: selected
        ? activeDayBackgroundColor
        : DEFAULT.dayBackgroundColor,
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
};

export default Day;
