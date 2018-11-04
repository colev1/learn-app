import React, { Component } from 'react';

class LessonItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLessonInfo: false
    }
  } 

  showLessonInfo = (event) => {
    event.preventDefault();
    if (this.state.showLessonInfo) {
      this.setState({
      showLessonInfo: false
      })
    } else {
      this.setState({
      showLessonInfo: true
    })
    }
  }

  render() {
    if (this.state.showLessonInfo) {
      return (
      <div className = "list-item"> 
        <h2> {this.props.lessonTitle} </h2>
        <p> {this.props.lessonInfo} </p>
        <button onClick={this.showLessonInfo}> show less </button>
        </div>
        )
    } else {
      return  (
      <div className = "list-item"> 
      <h2> {this.props.lessonTitle} </h2>
        <button onClick={this.showLessonInfo}> show more </button>
      </div>
      );
    }
  }
}



export default LessonItem;