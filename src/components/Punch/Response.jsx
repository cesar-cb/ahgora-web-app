import React from 'react';
import PropTypes from 'prop-types';

import Code from '@/components/_ui/Code';

const Response = ({ children }) => (
  <Code>
    <pre>{JSON.stringify(children)}</pre>
  </Code>
);

Response.propTypes = {
  children: PropTypes.node.isRequired
};

export default Response;
