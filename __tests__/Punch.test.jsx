import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'unstated';
import tck from 'tickedoff';
import { stub } from 'sinon'

import Punch from '@/components/Punch/Punch';
import PunchContainer from '@/components/Punch/PunchContainer';
import UserContainer from '@/components/User/UserContainer';

import Response from '@/components/Punch/Response';

const defer = (fn, done) => {
  return tck(() => {
    fn();
    done();
  });
};

let punch;
let user;

let tree;

const accountInformation = {
  account: '456',
  password: '159',
  id: '1231k24gb'
};

const fullInformation = Object.assign({}, accountInformation, {
  name: 'test user'
});

const response = {
  error: false,
  message: 'generic message',
  response: 'generic response'
};

beforeEach(async () => {
  punch = new PunchContainer();
  user = new UserContainer();

  await user.setState({
    information: fullInformation,
  });

  await punch.setState({
    response,
  });

  tree = mount(
    <Provider inject={[punch, user]}>
      <Punch />
    </Provider>
  );
});

describe('Punch', () => {
  test('should has correct initial state', () => {
    const punch = new PunchContainer();

    expect(punch.state.response).toEqual(null);
    expect(punch.state.loading).toEqual(false);
    expect(punch.state.error).toEqual(null);
  });

  test('should pass correct response props', done => {
    const responseProps = tree.find(Response).prop('response');

    defer(() => expect(responseProps).toEqual(response), done);
  });

  test('should call do with correct params', () => {
    const spy = stub(punch, 'do');

    tree.find('button#punch').simulate('click');

    expect(spy.calledOnceWith(accountInformation)).toBeTruthy();
  });
});
