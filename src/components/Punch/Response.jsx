import React from 'react';

import { punchResponse } from '@/types';

import Code from '@/components/_ui/Code';

const Response = ({ response, ...props }) => (
  <Code error={response.error} {...props}>
    <pre>{JSON.stringify(response, null, 2)}</pre>
  </Code>
);

Response.propTypes = {
  response: punchResponse
};

export default Response;
