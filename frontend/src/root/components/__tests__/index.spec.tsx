import * as React from 'react';
import { Provider } from 'react-redux';
import { Chat, ChatProps } from './../index';
import configureStore from 'redux-mock-store';
import { User } from 'src/chat/scene/auth/state';
import renderer from 'react-test-renderer';

let props = {} as ChatProps;
const mockStore = configureStore();

beforeEach(() => {
  props = {
    user: {} as User,
    messages: [],
    sendMessage: jest.fn(),
    subscribeOnMessages: jest.fn(),
    getAllMessages: jest.fn(),
    classes: {} 
  } as ChatProps;
});

describe('Chat component', () => {
  it(`check the login is enabled`, () => {
    props.user = null;

    const wrapper = renderer.create(
      <Provider store={mockStore({})}><Chat {...props} /></Provider>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it(`check the input form is enabled`, () => {
    props.user = {} as User;

    const wrapper = renderer.create(
      <Provider store={mockStore({})}><Chat {...props} /></Provider>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
