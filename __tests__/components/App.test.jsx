import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'unstated';
import App from '@/components/App';
import User from '@/components/User/User';
import Punch from '@/components/Punch/Punch';

import UserContainer from '@/components/User/UserContainer';

const information = {
  name: 'test user',
  account: '123',
  password: '@b$c',
  id: 'sd4e9wd512'
};

describe('App', () => {
  test('should render User when information is not present', async () => {
    const user = new UserContainer();

    const tree = await mount(
      <Provider inject={[user]}>
        <App />
      </Provider>
    );

    expect(tree.find(User)).toHaveLength(1);
  });

  test('should render Punch when information is present', async () => {
    const user = new UserContainer();

    await user.setState({ information });

    const tree = await mount(
      <Provider inject={[user]}>
        <App />
      </Provider>
    );

    expect(tree.find(Punch)).toHaveLength(1);
  });
});
