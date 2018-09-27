import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserContainer from '@/components/User/UserContainer';
import withContext from '@/components/HOCs/withContext';

import User from '@/components/User/User';
import Punch from '@/components/Punch/Punch';

import Container from '@/components/_ui/Container';
import Main from '@/components/_ui/Main';

class App extends Component {
  static propTypes = {
    UserContainer: PropTypes.func.isRequired
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
