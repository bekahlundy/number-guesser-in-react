import React from 'react';
import ReactDom from 'react-dom';

const DisplaySection = ({lastGuess}) => {
    return(
      <div>
        <p>your last was:</p>
        <p>{lastGuess}</p>
        <p>That is too ___, try again!</p>
      </div>
    )

}

export default DisplaySection;
