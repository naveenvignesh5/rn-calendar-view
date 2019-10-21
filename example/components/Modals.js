import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Modal from 'react-native-modal';
import {DAYS_SHORT} from './constants';
import {ThemeContext} from '../themeContext';

const styles = StyleSheet.create({
  modalWrapper: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  line: {
    width: '100%',
    height: 1,
  },
});

class MonthModal extends Component {
  state = {};
  render() {
    const {...modalProps} = this.props;
    const modalStyle = [styles.modalWrapper, {backgroundColor: '#FFF'}];
    const lineStyle = [
      styles.line,
      {backgroundColor: this.context.activeDayBackgroundColor},
    ];
    return (
      <View>
        <Modal {...modalProps}>
          <View style={modalStyle}>
            {DAYS_SHORT.map((day, i) => (
              <>
                <Text key={`text_${i}`} style={styles.monthText}>
                  {day}
                </Text>
                {i !== DAYS_SHORT.length - 1 && (
                  <View key={`line_${i}`} style={lineStyle} />
                )}
              </>
            ))}
          </View>
        </Modal>
      </View>
    );
  }
}

MonthModal.contextType = ThemeContext;

const YearModal = () => (
  <View>
    <Modal>
      <View style={styles.modalWrapper}>
        <Text>Month Modal</Text>
      </View>
    </Modal>
  </View>
);

const DatePickerModal = ({children, isVisible = false}) => {
  return (
    <View>
      <Modal isVisible={isVisible}>{children}</Modal>
    </View>
  );
};

export {MonthModal, YearModal, DatePickerModal};
