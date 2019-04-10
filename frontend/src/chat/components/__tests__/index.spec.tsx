import React from 'react';
import { Provider } from 'react-redux';
import { Chat } from './../index';
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
  it(`check the login is enabled`, () => {
    props.user = undefined;

    const wrapper = renderer.create(
      <Provider store={mockStore({})}><Chat {...props} /></Provider>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it(`check the input form is enabled`, () => {
    props.user = {};

    const wrapper = renderer.create(
      <Provider store={mockStore({})}><Chat {...props} /></Provider>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
