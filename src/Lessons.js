import React, { Component } from 'react';

class Lessons extends Component {
  constructor(props) {
    super(props);
  } 
  render() {
    let lessons = this.props.lessonsData.map(lesson => {
      return (<li> {lesson.title} </li>);
    });
    return (<ul> {lessons} </ul>)
  }
}

export default Lessons;