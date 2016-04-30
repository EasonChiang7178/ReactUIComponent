import React from 'react';

const HelloWorld = ({message}) => {
  return (
    <h1> Hello, {message} </h1>
  );
};
HelloWorld.propTypes = {
  message: React.PropTypes.string,
};
HelloWorld.defaultProps = {
  message: 'World!',
};


export default HelloWorld;
