import React from 'react';
import PropTypes from 'prop-types';

import Code from '@/components/_ui/Code';

const Response = ({ response }) => (
  <Code>
    <pre>{JSON.stringify(response)}</pre>
  </Code>
);

Response.propTypes = {
  response: PropTypes.shape({})
};

export default Response;
