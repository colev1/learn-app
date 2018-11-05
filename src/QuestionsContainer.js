import React, { Component } from 'react';
import StoredQuestion from './StoredQuestion.js'
import Question from './Question.js';

class QuestionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    storedIdeas: [],
    showStoredIdeas: false
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
    this.setState({
      showStoredIdeas: !this.state.showStoredIdeas
    })
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
      let correctQuestions = this.state.storedIdeas.map((question) => {
            return (<Question className="stored-question" category={question.category} jquery={question.jquery} vanilla={question.vanilla} id={question.id} incrementQuestionCount={this.props.incrementQuestionCount} storeIdeas={this.storeIdeas}/>);
          });
      if (this.state.showStoredIdeas === false) {
        return (
      <div className = "question-container"> 
      <div>
        <button className = "save-button" onClick={this.loadSavedQuestions} > show saved questions </button>
        </div>
        <p> {questions} </p>
      </div>
      )
      } else {
        return (
      <div className = "question-container"> 
      <div>
        <button className = "save-button" onClick={this.loadSavedQuestions} > hide saved questions </button>
        </div>
        <ul> {correctQuestions} </ul>
      </div>
      )
      }
  }
}

export default QuestionsContainer;