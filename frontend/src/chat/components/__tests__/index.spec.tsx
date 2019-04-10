import React from 'react';
import { Provider } from 'react-redux';
import {Chat} from './../index.tsx';
import configureStore from 'redux-mock-store';

let props = {};
const mockStore = configureStore();

beforeEach(() => {
  props = {
    user: {},
    messages: [],
    sendMessage: jest.fn(),
    subscribeOnMessages: jest.fn(),
    getAllMessages: jest.fn(),
    classes: {}
  };
});

describe('Chat component', () => {
  [{}, undefined].forEach(user => {
    it(`check the login menu, where user = ${user}`, () => {
      props.user = user;

      const wrapper = renderer.create(
        <Provider store={mockStore({})}><Chat {...props} /></Provider>
      ).toJSON();
  
      expect(wrapper).toMatchSnapshot();
    });
  })
});
