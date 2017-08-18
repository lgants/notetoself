import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  // NOTE react shortcut: <Form inline={true}> === <Form inline>
  render() {
    return (
      <div>
        <h2>Note to Self</h2>
        <Form inline>
          <FormControl onChange={event => this.setState({text: event.target.value})}/>
          {' '}
          <Button onClick={() => {console.log(this.state.text)}}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
