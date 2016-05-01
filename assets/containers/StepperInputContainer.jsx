import React from 'react';

import { default as StepperInput } from '../components/StepperInput';

class StepperInputContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.defaultValue };

    this.handleRightButtom = this.handleRightButtom.bind(this);
    this.handleLeftButtom = this.handleLeftButtom.bind(this);
  }

  handleRightButtom () {
    this.setState(
      { value: (parseInt(this.state.value, 10) + 1).toString() }
    );
  }

  handleLeftButtom () {
    this.setState(
      { value: (parseInt(this.state.value, 10) - 1).toString() }
    );
  }

  render() {
    return (
      <StepperInput defaultValue={this.state.value}
                    handleLeftButtom={this.handleLeftButtom}
                    handleRightButtom={this.handleRightButtom}
      />
    );
  }
}
StepperInputContainer.propTypes = {
  defaultValue: React.PropTypes.string,
};
StepperInputContainer.defaultValue = {
  defaultValue: '32',
};

export default StepperInputContainer;
