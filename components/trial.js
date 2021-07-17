import React, {useState} from 'react';
import {View, Button, Text, Platform, TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Trial = props => {
  const [date, setDate] = useState(new Date(2000, 0, 1));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    //const currentDate = selectedDate;
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
 
  const dateselected = date ? date.toString() : '';

  return (
    <View>
      <View style={styles.control}>
        <Text>Date Of Birth:</Text>
        <TouchableOpacity onPress={showDatepicker}>
            <Text style={styles.selectText}>Click to select date</Text>
        </TouchableOpacity>
      </View>
      
      {show ? (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      ) : <Text style={styles.textInput}>{dateselected}</Text>}
      
    </View>
  );
};
const styles = StyleSheet.create({
control: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
},
textInput: {
    textAlign: 'center',
    paddingBottom: 25
},
selectText: {
    color: 'blue'
}
});

//export {dateselected};
export default Trial;
//npm install @react-native-community/datetimepicker --save
