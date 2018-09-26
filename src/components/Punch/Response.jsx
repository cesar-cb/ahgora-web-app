import React from 'react';

import Code from '@/components/_ui/Code';

const Response = ({ children }) => (
  <Code>
    <pre>{JSON.stringify(children)}</pre>
  </Code>
);

export default Response;
