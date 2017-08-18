import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = 'NOTES';


class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      notes: []
    };
  }

  componentDidMount() {
    this.setState({ notes: read_cookie(cookie_key) });
  }

  // NOTE ES6: (const notes = this.state.notes) === (const {notes} = this.state)
  // NOTE ES6: (this.setState({ notes: notes })) === (this.setState({ notes }))
  submit() {
    const { notes, text } = this.state;

    notes.push({ text });
    this.setState({ notes: notes })
    bake_cookie(cookie_key, this.state.notes);
  }

  // NOTE react shortcut: <Form inline={true}> === <Form inline>
  render() {
    return (
      <div>
        <div className="container">
          <h2>Note to Self</h2>
          <Form>
            <div className="input-group">
              <input className="form-control" type="text" placeholder="Search for..." onChange={event => this.setState({text: event.target.value})}/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="button" onClick={() => { this.submit()}}>Submit!</button>
              </span>
            </div>
          </Form>
          <br/>
          <ul className="list-group">
            {
              this.state.notes.map((note, i) => {
                return (
                  <Note key={i} note={note}/>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
