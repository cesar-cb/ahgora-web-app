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
      const { account, password, id, name } = user.state.information;
      const { loading, response } = punch.state;

      return (
        <Container>
          {loading && <Loader />}

          <ResetInfo />

          <h1 style={{ textAlign: 'center', width: '100%' }}>
            Olá
            {' '}
            {name}
          </h1>
          <Button id="punch" size="big" full onClick={() => punch.do({ account, password, id })}>
            Bater Ponto!
          </Button>
          <Spacer margin={[20, 0, 0, 0]} />
          {response && <Response id="response" response={response} />}
        </Container>
      );
    }}
  </Subscribe>
);

export default Punch;
