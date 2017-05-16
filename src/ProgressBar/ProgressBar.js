import React, { Component } from 'react';

class ProgressBar extends Component {
  render () {
    return (
    <div>
    <p>Progress: {this.props.current_step}/{this.props.question_length}</p>
    </div>
    
    )
  }
}

export default ProgressBar;
