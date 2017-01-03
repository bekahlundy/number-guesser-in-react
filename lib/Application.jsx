import React from 'react';
import ReactDom from 'react-dom';
import HeaderSection from './HeaderSection.jsx'
import InputSection from './InputSection.jsx'
import DisplaySection from './DisplaySection.jsx'
import HintMessage from './HintMessage.jsx'

export default class Application extends React.Component {
  constructor() {
    super()
    this.state = {
      lastGuess: '',
      randomNumber: null,
    }
  }

  componentDidMount() {
    const random = Math.floor(Math.random() * 100)
    console.log(random)
    this.setState({ randomNumber: random})
  }


  updateState(input) {
    this.setState({ lastGuess: input})
  }

  render() {
    return(
      <div>
        <header className='HeaderSection'>
          <HeaderSection word1='Number' word2='Guesser'/>
        </header>
        <section className='InputSection'>
          <InputSection updateState={this.updateState.bind(this)}
          lastGuess={this.state.lastGuess}/>
        </section>
        <section className='DisplaySection'>
          <DisplaySection lastGuess={this.state.lastGuess}
          randomNumber={this.state.randomNumber}/>
        </section>
      </div>
    )
  }
}
