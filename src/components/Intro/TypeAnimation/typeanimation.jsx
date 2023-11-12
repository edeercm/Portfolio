import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import GraphemeSplitter from 'grapheme-splitter';

const typeanimation = () => {

  const splitter = new GraphemeSplitter();

  return <>
    <TypeAnimation
      splitter={(str) => splitter.splitGraphemes(str)}
      sequence={['Creativiti', 850, 'Hello', 850, 'Hallo', 850, 'Ciao', 850]}
      style={{ 
        fontFamily: 'Mayeka Regular Demo, sans-serif',   
        fontSize: '7.5rem',  
        fontWeight: '', 
        letterSpacing: '1rem', 
        color: '#D9DBDE' 
      }}
      speed={{ type: 'keyStrokeDelayInMs', value: 75 }}
      //repeat={Infinity}
    />
  </>
}

export default typeanimation