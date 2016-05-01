import React from 'react';
import ReactDOM from 'react-dom';

import { StepperInput } from './components';
import { StepperInputContainer } from './containers';

ReactDOM.render(
  <StepperInputContainer defaultValue="10" />,
  document.getElementById('entry-point')
);
