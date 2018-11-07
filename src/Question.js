import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: '',
      userInput: '',
      id: this.props.id,
      vanilla: this.props.vanilla
    }
  }

  checkAnswer = (event) => {
    event.preventDefault();
    if(typeof(this.props.jquery) === 'string') {
      let userInput = this.state.userInput.replace(/"/g,"\'").replace(";", "");
      (userInput === this.props.jquery) ? 
       this.setState({
        correct: true
      }) : this.setState({
      correct: false
    });
    } else {
      (this.props.jquery.includes(this.state.userInput)) ? this.setState({
        correct: true
      }) : this.setState({
      correct: false
    });
      }
      setTimeout(() => {
        if(this.state.correct === false) {
          this.sendToStorage(this.props);
        }
        this.props.incrementQuestionCount();
      },1000)
  }

  deleteStoredQuestion = (event) => {
    event.preventDefault();

  }

  sendToStorage = () => {
    let object = this.props;
    const objectId = JSON.stringify(object.id);
    const obj = {
      id: object.id,
      category: object.category,
      vanilla: object.vanilla,
      jquery: object.jquery,
      correct: this.state.correct
    }
    localStorage.setItem(`"${objectId}"`, JSON.stringify(obj));
    this.props.storeIdeas(obj);
    this.props.incrementQuestionCount();
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
    if(this.props.savedQuestion === false) {
      return (
            <div className = "question-card"> 
            <i class="far fa-star" > </i>
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
          } else {
            return (
            <div className = "question-card stored-card"> 
            <i class="fas fa-trash-alt" onClick={this.deleteStoredQuestion}> </i>
              <h4> category: {this.props.category} 
              </h4>
              <h3> {this.props.vanilla}
              </h3>
             
              <form className = "input-form" id="answer-form">
                <div>
                <button className = "skip-ans-btn" onClick={this.props.practiceStoredQuestion}> practice question </button>
                </div>
              </form> 
              </div>
            ) 
          }
    
  }
}



export default Question;