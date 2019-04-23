import React from 'react';
import { Subscribe } from 'unstated';
import UserContainer from '@/components/User/UserContainer';
import PunchContainer from '@/components/Punch/PunchContainer';

import Response from '@/components/Punch/Response';
import ResetInfo from '@/components/Punch/ResetInfo';

import Button from '@/components/_ui/Button';
import Loader from '@/components/_ui/Loader';
import Container from '@/components/_ui/Container';
import Spacer from '@/components/_ui/Spacer';
import Accordion from '@/components/_ui/Accordion';

const Punch = () => (
  <Subscribe to={[PunchContainer, UserContainer]}>
    {(punch, user) => {
      const {
        account,
        password,
        id,
        name,
      } = user.state.information;

      const { loading, response } = punch.state;

      const lastResponse = JSON.parse(localStorage.getItem('last_response'));

      return (
        <Container>
          {loading && <Loader />}

          <ResetInfo />

          <h1 id="hello" style={{ textAlign: 'center', width: '100%' }}>
            Olá
            {' '}
            {name}
          </h1>
          <Button id="punch" size="big" full onClick={() => punch.do({ account, password, id })}>
            Bater Ponto!
          </Button>
          <Spacer margin={[20, 0, 0, 0]} />
          {response && (
            <Response
              id="response"
              response={response}
            />
            )}
          <Spacer margin={[40, 0, 0, 0]} />
          {lastResponse && (
            <Accordion label="Última Batida">
              <Response
                id="lastResponse"
                response={lastResponse}
              />
            </Accordion>
          )}
        </Container>
      );
    }}
  </Subscribe>
);

export default Punch;
