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

const data = [
  'Developer',
  'Designer',
  'Product Manager',
];

const NoteBookScreen = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  const displayValue = data[selectedIndex.row];

  const renderOption = (title) => (
    <SelectItem title={title}/>
  );

  return (
    <Layout style={styles.container} level='1'>

      <Select
        style={styles.select}
        placeholder='Default'
        value={displayValue}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        {data.map(renderOption)}
      </Select>

    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 192,
  },
  select: {
    flex: 1,
    margin: 2,
  },
});

export default NoteBookScreen;