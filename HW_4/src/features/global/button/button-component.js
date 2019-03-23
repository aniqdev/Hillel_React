import React from 'react';

const Button = (props) => {
  const {children, onClick, btnClass } = props;
  return(
    <button
      className={btnClass}
      onClick={onClick}>
      {children}
    </button>
  )
};

export default Button;
