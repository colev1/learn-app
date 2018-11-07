import React, { Component } from 'react';
import Lessons from './Lessons.js';
import QuestionsContainer from './QuestionsContainer.js';
import './styles/_main.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lessonsData: [],
      questionsData: [],
      questionCount: Math.floor(Math.random() * 30) + 1
    }
  }
    componentDidMount = () => {
      fetch("https://memoize-datasets.herokuapp.com/api/v1/jquery")
      .then(response => response.json())
      .then(jQuery => {
        this.setState({
          lessonsData: jQuery.jQuery.lessons,
          questionsData: jQuery.jQuery.questions
        });
      })
      .catch(error => console.log(error));
    }

    incrementQuestionCount = () => {

      if (this.state.questionCount < 30 ) {
       var count = this.state.questionCount + 1 
      } else {
        var count = 1;
      }
      this.setState({
        questionCount: count
      })
      console.log(this.state.questionCount)
    }
  
  render() {
    return (
      <div className="app-container">
        <Lessons lessonsData={this.state.lessonsData} />
        <QuestionsContainer questionsData = {this.state.questionsData} incrementQuestionCount={this.incrementQuestionCount} questionCount={this.state.questionCount}/>
      </div>
    );
  }
}

export default App;
