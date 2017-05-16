import React, { Component } from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import MultiChoice from './MultiChoice';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'No Answer Selected'
    };
    this.updateSelected = this.updateSelected.bind(this)
    this.quiz_data = [
      {
        question: 'What is the meaning of life?',
        correct_answer: '42',
        possible_answers: ['Love', 'Money', 'Javascript', '42']
      },
      {
        question: 'Who is the best coding YouTuber?',
        correct_answer: 'FunFunFunction',
        possible_answers: ['Coding Train', 'FunFunFunction', 'Young Lamb', 'Wes Bos']
      }
    ]
  }

  updateSelected (answer) {
    this.setState({
      selected: answer
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Quiz </h1>
        <Question current_question={this.quiz_data[this.state.progress].question} />
        <ProgressBar current_step={this.state.progress + 1} question_length={this.quiz_data.length} />
        <MultiChoice 
          answers={this.quiz_data[this.state.progress].possible_answers} 
          updateSelected={this.updateSelected} />
      </div>
    );
  }
}

export default App;
