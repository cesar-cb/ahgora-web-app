import React from 'react';

import Label from '@/components/_ui/Label';
import Input from '@/components/_ui/Input';

const TextBox = ({label, ...props}) => (
  <Label style={{ marginBottom: '20px' }}>
    {label}
    <Input {...props} />
  </Label>
)

export default TextBox;
