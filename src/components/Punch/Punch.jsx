import React, { Fragment } from 'react';
import { Subscribe } from 'unstated';
import UserContainer from '@/components/User/UserContainer';
import PunchContainer from '@/components/Punch/PunchContainer';

import Response from '@/components/Punch/Response';
import ResetInfo from '@/components/Punch/ResetInfo';

import Button from '@/components/_ui/Button';
import Loader from '@/components/_ui/Loader';
import Container from '@/components/_ui/Container';
import Spacer from '@/components/_ui/Spacer';

const Punch = () => (
  <Subscribe to={[PunchContainer, UserContainer]}>
    {(punch, user) => {
      const { account, password, id } = user.state.information;

      return (
        <Container>
          {punch.state.loading && <Loader />}

          <ResetInfo />

          <h1 style={{ textAlign: 'center', width: '100%' }}>
            Olá
            {' '}
            {user.state.information.name}
          </h1>
          <Button id="punch" size="big" full onClick={() => punch.do({ account, password, id })}>
            Bater Ponto!
          </Button>
          <Spacer margin={[20, 0, 0, 0]} />
          {punch.state.response && <Response response={punch.state.response} />}
        </Container>
      );
    }}
  </Subscribe>
);

export default Punch;
