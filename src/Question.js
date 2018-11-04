import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = "question-card">  
        <h4> category: {this.props.category} 
      </h4>
        <h3> {this.props.vanilla}
      </h3>
      <form className = "input-form">
        <input className = "answer-input" placeholder="type-answer-here"/>
        <button onClick={this.props.incrementQuestionCount} type="submit"> submit answer </button>
      </form>
      </div>
      )
  }
}



export default Question;