import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated'
import { ìnjectGlobal, injectGlobal } from 'styled-components'

import App from '@/components/App';

injectGlobal`
  html,
  body {
    font-family: 'SF Mono', monospace;
  }
`

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
