import React from 'react';
import ReactDom from 'react-dom';
import HintMessage from './HintMessage.jsx'

const DisplaySection = ({lastGuess, randomNumber}) => {
  
  if (lastGuess === '') {
    return(
      <div></div>
    )
  } else {
    return(
      <div>
        <p>your last guess was:</p>
        <p>{lastGuess}</p>
        <HintMessage lastGuess={lastGuess} randomNumber= {randomNumber}/>
      </div>
    )
  }
  }


export default DisplaySection;
