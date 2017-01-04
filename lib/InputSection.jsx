import React from 'react';
import ReactDom from 'react-dom';
import Button from './Button.jsx';
import DisplaySection from './DisplaySection.jsx'

export default class InputSection extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  handleChange(e) {
    let number = e.target.value
    this.setState({ input: number})
  }

  handleGuessClick() {
    this.props.updateState(this.state.input)
    console.log(this.state.input)
  }

  handleReset() {
    this.props.clearState();
    this.setState( {input: ''} )
  }


  render() {
    return(
      <div>
        <p>Please guess a number 1-100</p>
        <input
          className='input-feild'
          type='number'
          min='0'
          max='100'
          placeholder='Enter Your Guess'
          value={this.state.input}
          onChange={this.handleChange.bind(this)}></input>
        <Button
          className='guess-button'
          text='Guess' onClick={this.handleGuessClick.bind(this)}/>
        <Button
          className='clear-button'
          text='Clear'
          disabled = {!this.state.input}
          onClick={() => {
          this.setState({input: ''})
        }} />
        <Button
          className='reset-button'
          text='Reset'
          disabled = {!this.state.input}
          onClick={this.handleReset.bind(this)} />
      </div>
    )
  }
}
