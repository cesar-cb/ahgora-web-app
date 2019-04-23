import React, { Component } from 'react';

import { userContainerType } from '@/types';

import UserContainer from '@/components/User/UserContainer';
import withContext from '@/components/HOCs/withContext';

import Container from '@/components/_ui/Container';
import Main from '@/components/_ui/Main';

import User from '@/components/User/User';
import Punch from '@/components/Punch/Punch';
import ResetInfo from '@/components/Punch/ResetInfo';

class App extends Component {
  static propTypes = {
    UserContainer: userContainerType,
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
      <div>
        <Main>
          <ResetInfo />

          <Container
            center
            fullPage
          >
            {information && <Punch />}
            {!information && <User />}
          </Container>
        </Main>
      </div>
    );
  }
}

export default withContext([UserContainer], App);
