### **RN-Calendar-View**

Simple Calendar based Date picker for react native.

#### **Installation**

```shell
npm i -s rn-calendar-view
```

#### **Props**

<table style="text-align: center;">
  <tr>
    <th>Prop</th>
    <th>Type</th>
    <th>Required</th>
    <th>Default Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>primaryColor</td>
    <td>String</td>
    <td>No</td>
    <td>#FAFAFA</td>
    <td>Primary Color for buttons, dates</td>
  </tr>
  <tr>
    <td>primaryTextColor</td>
    <td>String</td>
    <td>No</td>
    <td>#333333</td>
    <td>Primary Text Color for buttons, dates</td>
  </tr>
  <tr>
    <td>secondaryColor</td>
    <td>String</td>
    <td>No</td>
    <td>#000AAA</td>
    <td>Color for buttons, dates on active state</td>
  </tr>
  <tr>
    <td>secondaryTextColor</td>
    <td>String</td>
    <td>No</td>
    <td>#FFFFFF</td>
    <td>Text Color for buttons, dates on active state</td>
  </tr>
  <tr>
    <td>onDateChange</td>
    <td>Function</td>
    <td>No</td>
    <td>#FFFFFF</td>
    <td>Text Color for buttons, dates on active state</td>
  </tr>
</table>

#### **Example**

```javascript
import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
import { Calendar } from 'rn-calendar-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 20,
  },
});

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Date Picker</Text>
          <Calendar
            onDateChange={obj => Alert.alert('You have picked', `${obj.date}-${obj.month}-${obj.year}`)}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
```

##### **Output**

<img src="https://raw.githubusercontent.com/naveenvignesh5/rn-calendar-view/master/demo.gif" width="220px">
