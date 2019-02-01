import React from 'react';
import PropTypes from 'prop-types';

import Label from '@/components/_ui/Label';
import Input from '@/components/_ui/Input';

const TextBox = ({ label, ...props }) => (
  <Label style={{ marginBottom: '20px' }}>
    {label}
    <Input {...props} />
  </Label>
);

TextBox.propTypes = {
  label: PropTypes.string
};

export default TextBox;
