import React from 'react';

// import './StepperInput.scss';

const StepperInput = (props) => {
  return (
    <div className="stepperInput">
      <buttom onClick={props.handleLeftButtom}>-</buttom>
      <input type="text" value={props.defaultValue} readOnly />
      <buttom onClick={props.handleRightButtom}>+</buttom>
    </div>
  );
};
StepperInput.propTypes = {
  defaultValue: React.PropTypes.string,
  handleRightButtom: React.PropTypes.func,
  handleLeftButtom: React.PropTypes.func,
};
StepperInput.defaultValue = {
  defaultValue: '32',
  handleRightButtom: null,
  handleLeftButtom: null,
};

export default StepperInput;
