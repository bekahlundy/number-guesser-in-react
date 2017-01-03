import React from 'react';
import ReactDom from 'react-dom';

const HintMessage = ({lastGuess, randomNumber}) => {

  if (lastGuess < 0 || lastGuess > 100) {
    return(
      <div>make sure you enter a number between 1 and 100!</div>
    )
  } else if (lastGuess > randomNumber) {
    return(
      <div>
        <p>Sorry, that guess is too high. Try a lower number.</p>
      </div>
    )
  } else if (lastGuess < randomNumber) {
    return(
      <div>
        <p>Sorry, that guess is too low. Try a higher number.</p>
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
      <div> </div>
    )
  }
}

export default HintMessage;
