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

  componentWillMount() {
    let storedIdeas = [];
    for (var i=1; i<localStorage.length+1; i++) {
    var currentIdea = JSON.parse(localStorage.getItem(`"${[i]}"`));
      storedIdeas.push(currentIdea);
    }
    this.setState({
      storedIdeas: storedIdeas
    })
  }

  loadSavedQuestions = (event) => {
    event.preventDefault();
    let storedIdeas = [];
    for (var i=1; i<localStorage.length+1; i++) {
    var currentIdea = JSON.parse(localStorage.getItem(`"${[i]}"`));
      storedIdeas.push(currentIdea);
    }
    console.log(storedIdeas)
    this.setState({
      showStoredIdeas: !this.state.showStoredIdeas
    });
  }

  clearSavedQuestions = (event) => {
    event.preventDefault();
    for (var i=1; i<localStorage.length+1; i++) {
          // var currentIdea = JSON.parse(localStorage.getItem(`"${[i]}"`));
          localStorage.removeItem(`"${[i]}"`)
        }
    this.setState({
      storedIdeas: []
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
        <Question category={question.category} savedQuestion={false} jquery={question.jquery} vanilla={question.vanilla} id={question.id} incrementQuestionCount={this.props.incrementQuestionCount} storeIdeas={this.storeIdeas}/> 
        );
      }
    });

    if (this.state.storedIdeas.length > 0) {
      console.log(this.state.storedIdeas.length);
      var correctQuestions = this.state.storedIdeas.map((question) => {
            return (<Question className="stored-question" category={question.category} savedQuestion={true}jquery={question.jquery} vanilla={question.vanilla} id={question.id} incrementQuestionCount={this.props.incrementQuestionCount} storeIdeas={this.storeIdeas}/>);
          });
    }
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
      <button className = "save-button close-button" onClick={this.clearSavedQuestions} > clear saved questions </button>
        <h1 className= "stored-questions-header"> saved questions </h1> 
        <button className = "save-button" onClick={this.loadSavedQuestions} > hide saved questions </button>
      </div>

        <ul className="stored-questions-container"> 

        {correctQuestions} </ul>
        <p> {questions} </p>
      </div>
      )
      }
  }
}

export default QuestionsContainer;