import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';

class Selects extends Component {
  render() {
    let data = [
      { value: 'Banana', },
      { value: 'Mango', },
      { value: 'Pear' }];
    
    return (      
      <Dropdown        
      label='Favorite Fruit'        
      data={data}     
      animationDuration={255} 
      fontSize={16}
      labelFontSize={12}
      dropdownOffset={{top : 32, left : 0}}
      propsExtractor={()=>null}
      onChangeText={()=>{}}
      selectedItemColor='orange'
  		/>    
		);  
	}
}

export default Selects;