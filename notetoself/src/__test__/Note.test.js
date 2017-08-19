import React from 'react';
import { mount } from 'enzyme';
import Note from '../components/Note';

const props = { note: { text: 'test note'} }

// first param is string with discription; second is arrow function to run tests
describe('Note', () => {
  const note = mount(<Note {...props}/>);

  it('renders note text', () => {
    // find list item tag text content and expect content to equal 'test note'
    expect(note.find('li').text()).toEqual(props.note.text)
  });
})
