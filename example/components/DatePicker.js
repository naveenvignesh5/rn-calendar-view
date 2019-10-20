import React, {Component, createContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Day from './Day';
import Header from './Header';
import {DEFAULT} from '../default';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: DEFAULT.dayBackgroundColor,
    borderRadius: 10,
  },
  headerTextContainer: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  headerText: {
    fontWeight: 'bold',
    // fontSize: 11,
  },
});

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

class DatePicker extends Component {
  static defaultProps = {
    onDateChange: () => {},
  };

  constructor(props) {
    super(props);
    this.today = new Date(Date.now());
    this.state = {
      date: this.today.getDate(),
      month: this.today.getMonth() + 1,
      year: this.today.getFullYear(),
    };

    this.propContext = createContext({
      onPrevPress: this.onPrevPress,
      onNextPress: this.onNextPress,
    });
  }

  onPrevPress = () => {
    this.setState(prevState => {
      let {month, year} = prevState;

      if (month === 1) {
        year -= 1;
        month = 12;
      } else {
        month -= 1;
      }

      return {
        month,
        year,
      };
    });
  };

  onNextPress = () => {
    this.setState(prevState => {
      let {month, year} = prevState;

      if (month === 12) {
        year += 1;
        month = 1;
      } else {
        month += 1;
      }

      return {
        month,
        year,
      };
    });
  };

  selectDate = selectedDate => {
    this.setState(
      {
        date: selectedDate,
      },
      () => {
        let {date, month, year} = this.state;
        this.props.onDateChange({
          date,
          month,
          year,
        });
      },
    );
  };

  daysInMonth = (month, year) => 32 - new Date(year, month, 32).getDate();

  renderCalendar = (month, year) => {
    month -= 1;
    let firstDay = new Date(year, month).getDay();
    let calender = [];
    let date = 1;

    for (let i = 0; i < 5; i += 1) {
      let days = [];

      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDay) {
          days.push(<Day key={`${i}${j}`} />);
        } else if (date > this.daysInMonth(month, year)) {
          days.push(<Day key={`${i}${j}`} />);
          // break;
        } else {
          days.push(
            <Day
              selected={this.state.date === date}
              onDayPress={d => this.selectDate(d)}
              day={date}
              key={`${i}${j}`}
            />,
          );
          date += 1;
        }
      }

      calender.push(
        <View key={i} style={styles.row}>
          {days}
        </View>,
      );
    }

    calender.unshift(
      <View key="label" style={styles.headerContainer}>
        {DAYS.map((day, i) => (
          <View key={`label_${i}`} style={styles.headerTextContainer}>
            <Text style={styles.headerText}>{day}</Text>
          </View>
        ))}
      </View>,
    );

    return calender;
  };

  render() {
    const {month, year} = this.state;
    return (
      <View>
        <Header
          onNextPress={this.onNextPress}
          onPrevPress={this.onPrevPress}
          month={month}
          year={year}
        />
        {this.renderCalendar(month, year)}
      </View>
    );
  }
}

export default DatePicker;
