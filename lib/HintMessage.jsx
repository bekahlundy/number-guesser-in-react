import React from 'react';
import ReactDom from 'react-dom';

const HintMessage = ({lastGuess, randomNumber}) => {
  if (lastGuess > randomNumber) {
    return(
      <div>
        <p>you guessed too high</p>
      </div>
    )
  } else if (lastGuess < randomNumber) {
    return(
      <div>
        <p>you guessed too low</p>
      </div>
    )
  } else if (lastGuess = randomNumber) {
    return(
      <div>
        <p>you got it!!!!</p>
      </div>
    )
  } else {
    return(
      <div>  </div>
    )
  }

}

export default HintMessage;
