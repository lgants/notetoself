import React, { Component } from 'react';

export default class Note extends Component {
  render() {
    return (
      <li className="list-group-item">
        {this.props.note.text}
      </li>
    )
  }
}
