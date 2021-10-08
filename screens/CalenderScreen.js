import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Agenda, CalendarList } from 'react-native-calendars';
import { Avatar, Card } from 'react-native-paper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

// const timeToString = (time) => {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
// };

const RANGE = 24;
const initialDate = new Date();

const CalenderScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(null);
  const markedDates = {
    [selected]: {
      selected: true,
      disableTouchEvent: true,
      selectedColor: '#5E60CE',
      selectedTextColor: 'white'
    }
  };
  //const navigation = useNavigation();
  const onDayPress = ({ day, id }) => {
    //setSelected(day.dateString);
    setSelected(day);
  };

  useEffect(() => {
    if (!selected) {
      navigation.navigate("CalenderStack");
    } else {
      navigation.navigate("ExpensesScreen", { selectedDay: selected });
    }
  }, [onDayPress]);

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <CalendarList
          style={styles.calend}
          //testID={testIDs.calendarList.CONTAINER}
          current={initialDate}
          pastScrollRange={RANGE}
          futureScrollRange={RANGE}
          renderHeader={renderCustomHeader}
          theme={theme}
          onDayPress={onDayPress}
          markedDates={markedDates}
          horizontal
          pagingEnabled
          hideArrows={true}
          hideExtraDays={false}
        />
        <View>
          <Text style={{ paddingLeft: 10, paddingVertical: 10, fontWeight: 'bold', fontSize: 16 }}>Remainders</Text>
        </View>
        <View>
          <Text style={{ paddingLeft: 10, color: 'grey' }}>Bills</Text>
          <Text style={{ paddingLeft: 10 }}>Sun Feb 22 2010 00:00:00 GMT+0300 (EAT)</Text>
        </View>
        <View>
          <Text style={{ paddingLeft: 10, color: 'grey' }}>Shopping</Text>
          <Text style={{ paddingLeft: 10 }}>Sun Jan 01 2020 00:00:00 GMT+0300 (EAT)</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const theme = {
  'stylesheet.calendar.header': {
    dayHeader: {
      fontWeight: '600',
      color: '#48BFE3'
    }
  },
  'stylesheet.day.basic': {
    today: {
      borderColor: '#48BFE3',
      borderWidth: 0.8
    },
    todayText: {
      color: '#5390D9',
      fontWeight: '800'
    }
  }
};

function renderCustomHeader(date) {
  const header = date.toString('MMMM yyyy');
  const [month, year] = header.split(' ');
  const textStyle = {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 1,
    paddingBottom: 1,
    color: '#5E60CE',
    paddingRight: 5
  };

  return (
    <View style={styles.header}>
      <Text style={[styles.month, textStyle]}>{`${month}`}</Text>
      <Text style={[styles.year, textStyle]}>{year}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  calend: {
    height: 350
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5
  },
  month: {
    marginLeft: 5
  },
  year: {
    marginRight: 5
  }
});

export default CalenderScreen;