import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'unstated';
import { stub } from 'sinon';

import User from '@/components/User/User';
import UserContainer from '@/components/User/UserContainer';

let user;
let tree;

const state = {
  name: 'test user',
  account: '123',
  password: '@b$c',
  id: 'sd4e9wd512'
};

beforeEach(() => {
  localStorage.clear();

  user = new UserContainer();

  tree = mount(
    <Provider inject={[user]}>
      <User />
    </Provider>
  );
});

describe('User', () => {
  describe('Component', () => {
    test('should save correct information', () => {
      tree.find('input#name').simulate('input', { target: { value: state.name, name: 'name' } });
      tree.find('input#account').simulate('input', { target: { value: state.account, name: 'account' } });
      tree.find('input#password').simulate('input', {
        target: { value: state.password, name: 'password' }
      });
      tree.find('input#id').simulate('input', { target: { value: state.id, name: 'id' } });

      expect(tree.find('User').instance().state).toEqual(state);
    });

    test('should call setInformation with correct params', () => {
      const spy = stub(user, 'setInformation');

      tree
        .find('User')
        .instance()
        .setState(state);

      tree.find('#form').simulate('submit');

      expect(spy.calledOnceWith(state)).toBeTruthy();
    });
  });

  describe('Container', () => {
    test('should has correct initial state', () => {
      expect(user.state.information).toBeNull();
      expect(user.state.error).toBeFalsy();
    });

    test('should call localstorage.setItem', () => {
      user.setInformation(state);

      expect(localStorage.setItem).toBeCalledWith('name', state.name);
      expect(localStorage.setItem).toBeCalledWith('account', state.account);
      expect(localStorage.setItem).toBeCalledWith('password', state.password);
      expect(localStorage.setItem).toBeCalledWith('id', state.id);
    });

    test('should call localstorage.getItem', () => {
      user.initInformation();

      expect(localStorage.getItem).toBeCalledWith('name');
      expect(localStorage.getItem).toBeCalledWith('account');
      expect(localStorage.getItem).toBeCalledWith('password');
      expect(localStorage.getItem).toBeCalledWith('id');
    });

    test('should call localstorage.removeItem', () => {
      user.resetInformation();

      expect(localStorage.removeItem).toBeCalledWith('name');
      expect(localStorage.removeItem).toBeCalledWith('account');
      expect(localStorage.removeItem).toBeCalledWith('password');
      expect(localStorage.removeItem).toBeCalledWith('id');
    });

    test('should save information on state', async () => {
      await user.setInformation(state);

      expect(user.state.information).toEqual(state);
    });

    test('should clear state on resetInformation', async () => {
      await user.setInformation(state);

      await user.resetInformation();

      expect(user.state.information).toBeNull();
    });

    test('should call initInformation and set state', async () => {
      await user.setInformation(state);

      await user.initInformation();

      expect(user.state.information).toEqual(state);
    });
  });
});
