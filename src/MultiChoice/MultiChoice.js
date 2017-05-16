import React, { Component } from 'react';
import styles from './MultiChoice.css'

class MultiChoice extends Component {
  render () {
    return (
      <div>
        {this.props.answers.map((answer, k) => <button className="submit" key={k} onClick={() => this.props.updateSelected(answer)}>{answer}</button>)}
        <br />
        <p>You have selected: {this.props.selectedAnswer}</p>
        <button className="submit" onClick={this.props.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default MultiChoice;