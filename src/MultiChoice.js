import React, { Component } from 'react';

class MultiChoice extends Component {
  render () {
    return (
      <div>
        {this.props.answers.map((answer, k) => <button key={k} onClick={() => this.props.updateSelected(answer)}>{answer}</button>)}
      </div>
    )
  }
}

export default MultiChoice;