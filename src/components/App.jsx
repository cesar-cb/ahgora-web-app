import React, { Component } from 'react';
import loadable from 'react-loadable';
import PropTypes from 'prop-types';

import { userContainerType } from '@/types';

import UserContainer from '@/components/User/UserContainer';
import withContext from '@/components/HOCs/withContext';

import Container from '@/components/_ui/Container';
import Main from '@/components/_ui/Main';
import Loader from '@/components/_ui/Loader';

const User = loadable({
  loader: () => import('@/components/User/User'),
  loading: Loader
});

const Punch = loadable({
  loader: () => import('@/components/Punch/Punch'),
  loading: Loader
});

class App extends Component {
  static propTypes = {
    UserContainer: userContainerType
  };

  componentWillMount() {
    const { UserContainer } = this.props;
    const { initInformation } = UserContainer.value;

    initInformation();
  }

  render() {
    const { UserContainer } = this.props;
    const { information } = UserContainer.value.state;

    return (
      <Main>
        <Container>
          {information && <Punch />}
          {!information && <User />}
        </Container>
      </Main>
    );
  }
}

export default withContext([UserContainer], App);
