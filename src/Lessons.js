import React, { Component } from 'react';
import LessonItem from './LessonItem.js';


class Lessons extends Component {
  constructor(props) {
    super(props);
  } 
  render() {
    let lessons = this.props.lessonsData.map(lesson => {
      return ( <LessonItem lessonTitle={lesson.title} lessonInfo={lesson.info}/> );
    });
    return (
      <div className="lesson-container">
        <h1> JQUERY RULES </h1>
        <div> {lessons} </div>
      </div>)
  }
}

export default Lessons;