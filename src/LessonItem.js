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
      <div className = "list-item" onClick={this.showLessonInfo}> 
        <h2> {this.props.lessonTitle} </h2>
        <p> {this.props.lessonInfo} </p>
        </div>
        )
    } else {
      return  (
      <div className = "list-item" onClick={this.showLessonInfo}> 
      <h2> {this.props.lessonTitle} </h2>
      </div>
      );
    }
  }
}



export default LessonItem;