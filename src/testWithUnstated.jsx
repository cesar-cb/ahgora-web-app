import React from 'react';
import { Provider } from 'unstated';

export default ({ children, containers }) => <Provider inject={[...containers]}>{children}</Provider>;
