import * as React from 'react';
import { MessageList, MessageListProps } from './../index';
import { User } from 'src/chat/scene/auth/state';
import renderer from 'react-test-renderer';
import { Message, Owner } from 'src/chat/state';

let props = {} as MessageListProps;

beforeEach(() => {
  props = {
    user: {id: 1, name: "Name"} as User,
    messages: [],
    classes: {} 
  } as MessageListProps;
});

describe('MessageList component', () => {
  it('draw my message', () => {
    props.messages = [
      {
        id: 1,
        text: "text1",
        date: new Date(),
        owner: props.user
      } as Message
    ]

    const wrapper = renderer.create(<MessageList {...props} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('draw a chat message', () => {
    props.messages = [
      {
        id: 1,
        text: "text1",
        date: new Date(),
        owner: {
          id: 321, name: "Name2"
        } as Owner
      } as Message
    ]

    const wrapper = renderer.create(<MessageList {...props} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
