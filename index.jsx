import React from 'react';
import ReactDOM from 'react-dom';

import Punch from '@/components/Punch/Punch';

const App = () => <Punch />;

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
