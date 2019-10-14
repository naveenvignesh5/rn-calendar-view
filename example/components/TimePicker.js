import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Day from './Day';

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
});

class TimePicker extends Component {
  state = {};

  daysInMonth = (month, year) => 32 - new Date(year, month, 32).getDate();

  renderCalendar = (month, year) => {
    let firstDay = new Date(year, month).getDay();
    let calender = [];
    let date = 1;

    for (let i = 0; i < 6; i += 1) {
      let days = [];

      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDay) {
          days.push(<Day key={`${i}${j}`} />);
        } else if (date > this.daysInMonth(month, year)) {
          break;
        } else {
          days.push(<Day key={`${i}${j}`} />);
          date += 1;
        }
      }

      calender.push(
        <View key={i} style={styles.row}>
          {days}
        </View>,
      );
    }

    return calender;
  };

  render() {
    return <View>{this.renderCalendar(12, 2012)}</View>;
  }
}

export default TimePicker;
