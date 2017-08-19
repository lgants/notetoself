import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
      <li className="list-group-item">
        {this.props.note.text}
      </li>
    )
  }
}

export default Note;
