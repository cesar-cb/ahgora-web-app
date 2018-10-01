import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { Provider } from 'unstated'

import Punch from '@/components/Punch/Punch';
import PunchContainer from '@/components/Punch/PunchContainer';
import UserContainer from '@/components/User/UserContainer';

import Label from '@/components/_ui/Label'


describe('Punch', () => {
  describe('Container', () => {
    test('should have correct initial state', () => {
      const punch = new PunchContainer();

      expect(punch.state.response).toEqual(null);
      expect(punch.state.loading).toEqual(false);
      expect(punch.state.error).toEqual(null);
    });
    test('should change loading state', async () => {
      const punch = new PunchContainer();
      const user = new UserContainer();

      await user.setState({
        information: {
          name: 'test user',
          account: '456',
          password: '159',
          id: '1231k24gb',
        }
      })

      const Component = () => (
        <Provider inject={[punch, user]}>
          <Punch />
        </Provider>
      )

      const tree = mount(
        <Component />
      )

      expect(tree).toEqual('')

      tree.find('#punch').simulate('click');

      expect(punch.state.loading).toBeFalsy();
    })
  })
})
