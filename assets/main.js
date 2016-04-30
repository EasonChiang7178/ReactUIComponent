import React from 'react';
import ReactDOM from 'react-dom';

import { HelloWorld } from './components';

ReactDOM.render(
  <HelloWorld message='here is the whole new world!'/>,
  document.getElementById('entry-point')
);
