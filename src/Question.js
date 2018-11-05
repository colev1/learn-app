import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: '',
      userInput: ''
    }
  }

  checkAnswer = (event) => {
    event.preventDefault();
    (this.state.userInput === this.props.jquery) ? 
       this.setState({
        correct: true
      }) : this.setState({
      correct: false
    });
      setTimeout(() => {
        this.props.incrementQuestionCount(event);
      },4000)
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    const isCorrect = this.state.correct;
    let responseToAnswer;
    if (isCorrect) {
      responseToAnswer = "that is correct!"
    } else  if (isCorrect === false){
      responseToAnswer = "that is incorrect!";
    } else {
      responseToAnswer = 'translate this line of code from vanilla JS to jquery:'
    }
  
    return (
      <div className = "question-card"> 
        <h4> category: {this.props.category} 
        </h4>
        
        <h3> {this.props.vanilla}
        </h3>
        <p>
        {responseToAnswer}
        </p>
        <form className = "input-form" id="answer-form" onSubmit={this.checkAnswer}>
          <input className = "answer-input" placeholder="Type answer here..." onChange={this.handleChange} />
          <div>
          <button className = "skip-ans-btn" onClick={this.props.incrementQuestionCount}> skip question </button>
          <button className ="submit-ans-btn"  type="submit" value="submit"> submit </button>
          </div>
        </form> 
        </div>
      )
  }
}



export default Question;