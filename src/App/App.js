import React, { Component } from 'react';
import Question from '../Question/Question';
import ProgressBar from '../ProgressBar/ProgressBar';
import MultiChoice from '../MultiChoice/MultiChoice';
import Results from '../Results/Results';

import styles from './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'No Answer Selected',
      score: 0
    };
    this.updateSelected = this.updateSelected.bind(this)
    this.submitAnswer = this.submitAnswer.bind(this)
    this.resetQuiz = this.resetQuiz.bind(this)
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
      },
      {
        question: 'How many states are there in Australia?',
        correct_answer: '6',
        possible_answers: ['5', '7', '6', '10']
      },
      {
        question: 'Which is not a programming language?',
        correct_answer: 'Lab',
        possible_answers: ['CHICKEN', 'python', 'racket', 'Lab']
      }
    ]
  }

  updateSelected (answer) {
    this.setState({
      selected: answer
    })
  }

  submitAnswer () {
    if (this.state.selected === this.quiz_data[this.state.progress].correct_answer) {
      this.setState({
        score: this.state.score + 1,
        progress: this.state.progress + 1,
        selected: 'No Answer Selected'
      })
    } else {
      this.setState({
        progress: this.state.progress + 1
      })
    }
  }

  resetQuiz () {
    this.setState({
      progress: 0,
      selected: 'No Answer Selected',
      score: 0
    })
  }

render() {
    return (
      <div className="App">
        <h2 className="App-intro quiz">Quiz App</h2>

        {this.state.progress < this.quiz_data.length ? (
          <div>
            <Question current_question={this.quiz_data[this.state.progress].question} />
            <ProgressBar current_step={this.state.progress + 1} question_length={this.quiz_data.length} />
            <MultiChoice 
              answers={this.quiz_data[this.state.progress].possible_answers}
              updateSelected={this.updateSelected}
              handleSubmit={this.submitAnswer}
              selectedAnswer={this.state.selected} />
          </div>
        )
        : (
        <Results score={this.state.score} handleReset={this.resetQuiz} end_message="Congratulations, you have finished!" />
         )}
      </div>
    );
  }
}

export default App;
