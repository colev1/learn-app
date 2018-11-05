import React, { Component } from 'react';
import Question from './Question.js';


class QuestionsContainer extends Component {
  constructor(props) {
    super(props);
  } 

  loadSavedQuestions = (event) => {
    event.preventDefault();
    let items = localStorage.getItem("3");
    console.log(items)
  }

  render() {
    let questions = this.props.questionsData.map(question => {
      if (question.id === this.props.questionCount) {
        return (
        <Question category={question.category} jquery={question.jquery} vanilla={question.vanilla} id={question.id} incrementQuestionCount={this.props.incrementQuestionCount} /> 
        );
      }
    });
    return (
      <div className = "question-container"> 
      <div>
        <button className = "save-button" onClick={this.loadSavedQuestions} > show saved questions </button>
          
        </div>
        <p> {questions} </p>
      </div>
      )
  }
}

export default QuestionsContainer;