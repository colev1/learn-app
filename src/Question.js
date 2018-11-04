import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>  {this.props.category} 
      <button onClick={this.props.incrementQuestionCount} />
      </div>
      )
  }
}



export default Question;