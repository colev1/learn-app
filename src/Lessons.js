import React, { Component } from 'react';
import LessonItem from './LessonItem.js';
import image from './images/jquery.gif';


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
        {lessons} 
      </div>)
  }
}

export default Lessons;