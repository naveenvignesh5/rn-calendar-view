import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Day from './Day';
import Header from './Header';

import {ThemeContext, DEFAULT_THEME} from './themeContext';
import {DAYS_SHORT} from './constants';
import {MonthModal, YearModal} from './Modals';

const DEFAULT = {
  dayBackgroundColor: '#FAFAFA',
  dayColor: '#333333',
  activeDayBackgroundColor: '#000AAA',
  activeDayColor: '#FFF',
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: DEFAULT.activeDayBackgroundColor,
    borderRadius: 10,
    marginVertical: 10,
  },
  headerTextContainer: {
    // flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  headerText: {
    color: DEFAULT.activeDayColor,
    fontWeight: 'bold',
  },
});

class Calendar extends Component {
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
      monthModalVisible: false,
      yearModalVisisble: false,
    };

    console.log(this.state);

    this.theme = {
      dayBackgroundColor:
        this.props.dayBackgroundColor || DEFAULT_THEME.dayBackgroundColor,
      dayColor: this.props.dayColor || DEFAULT_THEME.dayColor,
      activeDayBackgroundColor:
        this.props.activeDayBackgroundColor ||
        DEFAULT_THEME.activeDayBackgroundColor,
      activeDayColor: this.props.activeDayColor || DEFAULT_THEME.activeDayColor,
    };
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
        {DAYS_SHORT.map((day, i) => (
          <View key={`label_${i}`} style={styles.headerTextContainer}>
            <Text style={styles.headerText}>{day}</Text>
          </View>
        ))}
      </View>,
    );

    return calender;
  };

  toggleMonthModal = () => {
    this.setState(prevState => ({
      monthModalVisible: !prevState.monthModalVisible,
    }));
  };

  toggleYearModal = () => {
    this.setState(prevState => ({
      yearModalVisisble: !prevState.yearModalVisisble,
    }));
  };

  updateMonth = month => this.setState({month, monthModalVisible: false});

  updateYear = year => this.setState({year, yearModalVisisble: false});

  render() {
    const {month, year, monthModalVisible, yearModalVisisble} = this.state;
    return (
      <>
        <ThemeContext.Provider value={this.theme}>
          <Header
            onNextPress={this.onNextPress}
            onPrevPress={this.onPrevPress}
            onMonthPress={this.toggleMonthModal}
            onYearPress={this.toggleYearModal}
            month={month}
            year={year}
          />
          {this.renderCalendar(month, year)}
          <MonthModal
            onMonthPress={this.updateMonth}
            selectedMonth={month}
            isVisible={monthModalVisible}
            onBackdropPress={this.toggleMonthModal}
          />
          <YearModal
            selectedYear={year}
            onYearPress={this.updateYear}
            onBackdropPress={this.toggleYearModal}
            currentYear={year}
            isVisible={yearModalVisisble}
          />
        </ThemeContext.Provider>
      </>
    );
  }
}

export default Calendar;
