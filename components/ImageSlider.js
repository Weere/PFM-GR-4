import React, { useState, useEffect } from 'react';
import Slideshow from 'react-native-slideshow';
import PropTypes from 'prop-types'

const SlideshowTest = props => {
  const [position, setPosition] = useState(1);
  const [interval, setInterval] = useState(null);
  const dataSource = [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: 'Title 2',
          caption: 'Caption 2',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: 'Title 3',
          caption: 'Caption 3',
          url: 'http://placeimg.com/640/480/any',
        },
      ]
    
    useEffect(() => {
      setInterval({position: position === dataSource.length ? 0 : position + 1})
  }, [2000])

 
  // componentWillUnmount() {
  //   clearInterval(this.state.interval);
  // }
 
    return (
    <Slideshow 
        data={dataSource}
        position={position}
        onPositionChanged={position => setPosition({ position })} />
    );
}


export default SlideshowTest;