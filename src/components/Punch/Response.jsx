import React from 'react';

import { punchResponse } from '@/types'

import Code from '@/components/_ui/Code';

const Response = ({ response }) => (
  <Code>
    <pre>{JSON.stringify(response)}</pre>
  </Code>
);

Response.propTypes = {
  response: punchResponse,
};

export default Response;
