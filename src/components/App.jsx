import React, { Component } from 'react';
import UserContainer from '@/components/User/UserContainer'
import withContext from '@/components/HOCs/withContext'

import User from '@/components/User/User'
import Punch from '@/components/Punch/Punch'

import Container from '@/components/_ui/Container'

class App extends Component {
  componentWillMount() {
    const { initInformation } = this.props.UserContainer.value;

    initInformation();
  }

  render() {
    const { information } = this.props.UserContainer.value.state;

    return(
      <Container>
        {information && <Punch />}
        {!information && <User />}
      </Container>
    )
  }
}

export default withContext([UserContainer], App);
