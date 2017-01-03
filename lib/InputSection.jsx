import React from 'react';
import ReactDom from 'react-dom';
import Button from './Button.jsx';
import DisplaySection from './DisplaySection'

export default class InputSection extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      // lastGuess: '',
    }
  }

  handleChange(e) {
    let number = e.target.value
    this.setState({ input: number})
  }

  handleGuessClick() {
    // this.setState({ lastGuess: this.state.input })
    this.props.updateState(this.state.input)
    console.log(this.state.input)
  }

  handleResetChange() {
    console.log('reset?')
  }

  render() {
    return(
      <div>
        <input
          className='input-feild'
          type='number'
          placeholder='Enter Your Guess'
          value={this.state.input}
          onChange={this.handleChange.bind(this)}></input>
        <Button className='guess-button' text='Guess' onClick={this.handleGuessClick.bind(this)}/>
        <Button className='clear-button' text='Clear' onClick={() => {
          this.setState({input: ''})
        }}/>
        <Button className='reset-button' text='Reset' onClick={this.handleResetChange.bind(this)}/>
      </div>
    )
  }
}
