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

  componentDidMount() {
    let storedIdeas = [];
    for (var i=1; i<30; i++) {
    if (localStorage.getItem(`"${[i]}"`)) {
      var currentIdea = JSON.parse(localStorage.getItem(`"${[i]}"`));
      storedIdeas.push(currentIdea);
    }
    this.setState({
      storedIdeas: storedIdeas
    })
  }
}

  loadSavedQuestions = (event) => {
    event.preventDefault();
    let storedIdeas = [];
    for (var i=1; i<localStorage.length+1; i++) {
    var currentIdea = JSON.parse(localStorage.getItem(`"${[i]}"`));
      storedIdeas.push(currentIdea);
    }
    this.setState({
      showStoredIdeas: !this.state.showStoredIdeas
    });
  }

  clearSavedQuestions = (event) => {
    event.preventDefault();
    for (var i=0; i<31; i++) {
          let currentCard = JSON.stringify(i);
          localStorage.removeItem(`"${currentCard}"`);
        }
    this.setState({
      storedIdeas: []
    })
  }

  storeIdeas = (idea) => {
    if (!this.state.storedIdeas.includes(idea)) {
      this.setState({
      storedIdeas: [...this.state.storedIdeas, idea]
      })
    }
  }

  updateState = (removedObj) => {
    let currentStoredIdeas = this.state.storedIdeas;
    let index = currentStoredIdeas.indexOf(removedObj);
    console.log(currentStoredIdeas);
    console.log(removedObj)
    console.log(index);
    if(index != -1) {
      currentStoredIdeas.splice(index, 1)
    }


    this.setState({
      storedIdeas: currentStoredIdeas
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
      var correctQuestions = this.state.storedIdeas.map((question) => {
            return (<Question className="stored-question" category={question.category} savedQuestion={true}jquery={question.jquery} vanilla={question.vanilla} id={question.id} incrementQuestionCount={this.props.incrementQuestionCount} storeIdeas={this.storeIdeas} updateState={this.updateState}/>);
          });
    }
      if (this.state.showStoredIdeas === false) {
        return (
      <div className = "question-container"> 
      <div>
        <button className = "save-button" onClick={this.loadSavedQuestions} > show incorrect questions </button>
        </div>
        <p> {questions} </p>
      </div>
      )
      } else {
        return (
      <div className = "question-container">

      <div>
      <button className = "save-button close-button" onClick={this.clearSavedQuestions} > clear incorrect questions </button>
        <h1 className= "stored-questions-header"> incorrect questions </h1> 
        <button className = "save-button" onClick={this.loadSavedQuestions} > hide incorrect questions </button>
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