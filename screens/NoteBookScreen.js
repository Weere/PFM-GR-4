// import React, {useState} from 'react'
// import { Radio, RadioGroup, Text } from '@ui-kitten/components';
// import { View, StyleSheet } from 'react-native';
// const NoteBookScreen = props => {

//     const [selectedIndex, setSelectedIndex] = React.useState(0);

//     return(
//         <View style={styles.container}>
//             <React.Fragment>
//                 <Text category='h6'>
//                 {`Selected Option: ${selectedIndex + 1}`}
//                 </Text>

//                 <RadioGroup
//                 selectedIndex={selectedIndex}
//                 onChange={index => setSelectedIndex(index)}>
//                 <Radio>Option 1</Radio>
//                 <Radio>Option 2</Radio>
//                 <Radio>Option 3</Radio>
//                 </RadioGroup>

//             </React.Fragment>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: 'blue'
//     }
// });

// export default NoteBookScreen;

///////
import React from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

const NoteBookScreen = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  return (
   // <Layout style={styles.container} level='1'>
      <Select
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title='Option 1'/>
        <SelectItem title='Option 2'/>
        <SelectItem title='Option 3'/>
      </Select>
    //</Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
  },
});

export default NoteBookScreen;