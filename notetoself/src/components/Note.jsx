import React, { Component } from 'react';

export default class Note extends Component {
  render() {
    return (
      <li className="list-group-item" key={this.props.key}>
        {this.props.note.text}
      </li>
    )
  }
}
