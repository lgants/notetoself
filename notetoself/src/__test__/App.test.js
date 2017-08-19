import React from 'react';
import { mount } from 'enzyme';
import App from '../components/App';

describe('App', () => {
  let app = mount(<App />);

  it('renders title', () => {
    expect(app.find('h2').text()).toEqual('Note to Self')
  });

  it('renders a clear button', () => {
    // find will find all elements with the specified property
    expect(app.find('.btn').at(1).text()).toEqual('Clear');
  });

  describe('when rendering the form', () => {
    it('renders a form', () => {
      expect(app.find('form').exists()).toBe(true);
    });

    it('renders a form control', () => {
      expect(app.find('.form-control').exists()).toBe(true);
    });

    it('renders a submit button', () => {
      expect(app.find('.btn').at(0).text()).toEqual('Submit');
    });
  });

  describe('when creating a note', () => {
    let testNote = 'test note';

    beforeEach(() => {
      app.find('.form-control').simulate('change', {
        target: { value: testNote }
      });
    });

    it('updates the text in state', () => {
      expect(app.state().text).toEqual(testNote);
    });

    describe('and submitting the new note', () => {
      beforeEach(() => {
        app.find('.btn').at(0).simulate('click');
      });

      it('adds the new note to state', () => {
        expect(app.state().notes[0].text).toEqual(testNote);
      });

      afterEach(() => {
        app.find('.btn').at(1).simulate('click');
      });

      describe('remounts the compontent', () => {
        let appTwo;

        beforeEach(() => {
          appTwo = mount(<App />);
        });

        it('reads the stored cookies', () => {
          expect(appTwo.state().notes).toEqual([{ text: testNote }])
        });
      });

      describe('and clicking the clear button', () => {
        beforeEach(() => {
          app.find('.btn').at(1).simulate('click');
        });

        it('clears the state', () => {
          expect(app.state().notes).toEqual([]);
        })
      });
    });
  });
});
