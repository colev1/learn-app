import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: null,
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
    })
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    return (
      <div className = "question-card"> 
        <h4> category: {this.props.category} 
      </h4>
        <p>
        rewrite this line of javascript using jQuery 
        </p>
        <h3> {this.props.vanilla}
        </h3>
        <form className = "input-form" id="answer-form" onSubmit={this.checkAnswer}>
          <input className = "answer-input" placeholder="type-answer-here" onChange={this.handleChange} />
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