import React from 'react';
import ReactDom from 'react-dom';

export default class HeaderSection extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.word1} {this.props.word2}</h1>
      </div>
    )
  }
}
