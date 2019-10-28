import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';
import {MONTH_SHORT} from './constants';
import {ThemeContext} from './themeContext';

const styles = StyleSheet.create({
  monthModalWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  yearMonthWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'column',
    borderRadius: 10,
  },
  monthButton: {
    padding: 5,
    margin: 10,
    width: 70,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    borderRadius: 10,
  },
  monthText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  yearModalHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  yearLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  yearsWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});

class MonthModal extends Component {
  state = {};
  render() {
    const {selectedMonth = 0} = this.props;
    const {onMonthPress, ...modalProps} = this.props;
    const modalStyle = [styles.monthModalWrapper, {backgroundColor: '#FFF'}];

    return (
      <View>
        <Modal {...modalProps}>
          <View style={modalStyle}>
            {MONTH_SHORT.map((day, i) => (
              <TouchableOpacity
                onPress={() => onMonthPress(i + 1)}
                key={i.toString()}
                style={[
                  styles.monthButton,
                  i === selectedMonth - 1
                    ? {backgroundColor: this.context.activeDayBackgroundColor}
                    : null,
                ]}>
                <Text
                  key={`text_${i}`}
                  style={[
                    styles.monthText,
                    i === selectedMonth - 1
                      ? {color: this.context.activeDayColor}
                      : null,
                  ]}>
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
      </View>
    );
  }
}

MonthModal.contextType = ThemeContext;

class YearModal extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      yearEnd: this.props.currentYear,
      yearStart: this.props.currentYear - 9,
    };
  }

  handlePrevPress = () => {
    this.setState(prevState => ({
      yearStart: prevState.yearStart - 10,
      yearEnd: prevState.yearStart - 1,
    }));
  };

  handleNextPress = () => {
    this.setState(prevState => ({
      yearStart: prevState.yearEnd + 1,
      yearEnd: prevState.yearEnd + 10,
    }));
  };

  renderYearButtons = () => {
    const {yearStart, yearEnd} = this.state;
    const {onYearPress, selectedYear} = this.props;
    const years = [];

    for (let i = yearStart; i <= yearEnd; i += 1) {
      const buttonStyle = [
        styles.button,
        {
          backgroundColor:
            selectedYear === i
              ? this.context.activeDayBackgroundColor
              : this.context.dayBackgroundColor,
          marginTop: 10,
        },
      ];

      const buttonTextSyle = [
        styles.buttonText,
        {
          color:
            selectedYear === i
              ? this.context.activeDayColor
              : this.context.dayColor,
          width: '100%',
        },
      ];

      years.push(
        <TouchableOpacity
          style={buttonStyle}
          onPress={() => onYearPress(i)}
          key={i.toString()}>
          <Text style={buttonTextSyle}>{i}</Text>
        </TouchableOpacity>,
      );
    }

    return years;
  };

  render() {
    const {currentYear, ...modalProps} = this.props;

    const modalStyle = [styles.yearMonthWrapper, {backgroundColor: '#FFF'}];

    const buttonStyle = [
      styles.button,
      {backgroundColor: this.context.activeDayBackgroundColor},
    ];

    const buttonTextSyle = [styles.buttonText, {color: '#fff'}];

    const yearLabelText = [styles.yearLabel, {color: this.context.dayColor}];

    const {yearEnd, yearStart} = this.state;

    return (
      <View>
        <Modal {...modalProps}>
          <View style={modalStyle}>
            <View style={styles.yearModalHeader}>
              <TouchableOpacity
                style={buttonStyle}
                onPress={this.handlePrevPress}>
                <Text style={buttonTextSyle}>Prev</Text>
              </TouchableOpacity>
              <Text style={yearLabelText}>
                {yearStart} - {yearEnd}
              </Text>
              <TouchableOpacity
                onPress={this.handleNextPress}
                style={buttonStyle}>
                <Text style={buttonTextSyle}>Next</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.yearsWrapper}>{this.renderYearButtons()}</View>
          </View>
        </Modal>
      </View>
    );
  }
}

YearModal.contextType = ThemeContext;

const DatePickerModal = ({children, isVisible = false}) => {
  return (
    <View>
      <Modal isVisible={isVisible}>{children}</Modal>
    </View>
  );
};

export {MonthModal, YearModal, DatePickerModal};
