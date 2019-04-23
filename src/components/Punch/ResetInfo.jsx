import React from 'react';
import { Subscribe } from 'unstated';
import styled from 'styled-components';
import UserContainer from '@/components/User/UserContainer';

import Button from '@/components/_ui/Button';

const Wrapper = styled.div`
  background-color: #242F3F;
  display: flex;
  justify-content: flex-end;
  padding: 0.8em;
`;

const ResetInfo = () => (
  <Subscribe to={[UserContainer]}>
    {user => (
      <Wrapper>
        <Button id="reset" size="small" onClick={() => user.resetInformation()}>
          resetar
        </Button>
      </Wrapper>
    )}
  </Subscribe>
);

export default ResetInfo;
