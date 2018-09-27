import React, { Fragment } from 'react';
import { Subscribe } from 'unstated';
import UserContainer from '@/components/User/UserContainer';

import Button from '@/components/_ui/Button';

const Punch = () => (
  <Subscribe to={[UserContainer]}>
    {user => (
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <Button size="small" onClick={() => user.resetInformation()}>
          resetar
        </Button>
      </div>
    )}
  </Subscribe>
);

export default Punch;
