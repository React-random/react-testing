import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox/>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a text are that users can type in', () => {
    wrapped.find('textarea').simulate('change', {
        target: {value: 'new comment'}
    });

    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('when form is submitted, text area gets emtied', () => {
   wrapped.find('textarea').simulate('change', {
      target: {value: 'important text'}
   });

   wrapped.update();

   expect(wrapped.find('textarea').prop('value')).toEqual('important text');

   wrapped.find('form').simulate('submit');

   wrapped.update();

   expect(wrapped.find('textarea').prop('value')).toEqual('');
});

