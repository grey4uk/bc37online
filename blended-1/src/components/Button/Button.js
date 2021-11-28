import React from 'react';

const Button = ({ handleClick }) => {
  return (
    <button type='button' onClick={handleClick}>
      CLICK ON ME
    </button>
  );
};

export default Button;
