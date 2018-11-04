import React, { Component } from 'react';

class Lessons extends Component {
  constructor(props) {
    super(props);
  } 
  render() {
    let lessons = this.props.lessonsData.map(lesson => {
      return (<li> {lesson.title} </li>);
    });
    return (
      <div className="jquery-rules">
        <h1> JQUERY RULES </h1>
        <ul> {lessons} </ul>
      </div>)
  }
}

export default Lessons;