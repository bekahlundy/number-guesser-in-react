import React from 'react';
import ReactDom from 'react-dom';
import HintMessage from './HintMessage.jsx'

const DisplaySection = ({lastGuess, randomNumber}) => {
    return(
      <div>
        <p>your last was:</p>
        <p>{lastGuess}</p>
        <HintMessage lastGuess={lastGuess} randomNumber= {randomNumber}/>
      </div>
    )

}

export default DisplaySection;
