import React, { Component } from 'react';
import Question from './Question.js';


class QuestionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    storedIdeas: []
    }
  }



  loadSavedQuestions = (event) => {
    event.preventDefault();
    let storedIdeas = [];
    for (var i=1; i<localStorage.length+1; i++) {
    var currentIdea = JSON.parse(localStorage.getItem(`"${[i]}"`));
    if (currentIdea.correct === false) {
      storedIdeas.push(currentIdea);
      }
    }
    console.log(storedIdeas)
  }

  storeIdeas = (idea) => {
    this.setState({
      storedIdeas: [...this.state.storedIdeas, idea]
    })
  }

  render() {
    let questions = this.props.questionsData.map(question => {
      if (question.id === this.props.questionCount) {
        return (
        <Question category={question.category} jquery={question.jquery} vanilla={question.vanilla} id={question.id} incrementQuestionCount={this.props.incrementQuestionCount} storeIdeas={this.storeIdeas}/> 
        );
      }
    });
    let correctQuestions = this.props.questions
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