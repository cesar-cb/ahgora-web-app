import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';
import { injectGlobal } from 'styled-components';

import App from '@/components/App';

injectGlobal`
  html,
  body {
    font-family: 'SF Mono', monospace;
    padding: 0;
    margin: 0;
  }
`;

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
