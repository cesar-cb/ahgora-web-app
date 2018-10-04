import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { Provider, Subscribe } from 'unstated';
import tck from 'tickedoff';

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

describe('Punch', () => {
  test('should have correct initial state', () => {
    const punch = new PunchContainer();

    expect(punch.state.response).toEqual(null);
    expect(punch.state.loading).toEqual(false);
    expect(punch.state.error).toEqual(null);
  });
  test('should pass correct response props', async done => {
    const punch = new PunchContainer();
    const user = new UserContainer();

    const response = {
      error: false,
      message: 'generic message',
      response: 'generic response'
    };

    await user.setState({
      information: {
        name: 'test user',
        account: '456',
        password: '159',
        id: '1231k24gb'
      }
    });

    await punch.setState({
      response
    });

    const tree = mount(
      <Provider inject={[punch, user]}>
        <Punch />
      </Provider>
    );

    const responseProps = tree.find(Response).prop('response');

    defer(() => expect(responseProps).toEqual(response), done);
  });
});
