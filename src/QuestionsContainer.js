import React, { Component } from 'react';
import Question from './Question.js';


class QuestionsContainer extends Component {
  constructor(props) {
    super(props);
  } 
  render() {
    let questions = this.props.questionsData.map(question => {
      if (question.id === this.props.questionCount) {
        return (
        <Question category={question.category} jquery={question.jquery} vanilla={question.vanilla} id={question.id} incrementQuestionCount={this.props.incrementQuestionCount} /> 
        );
      }
    })
    return (
      <div className = "questionContainer"> {questions} 
      </div>)
  }
}

export default QuestionsContainer;