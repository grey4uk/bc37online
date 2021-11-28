import React from 'react';

const ValuePainter = ({ value }) => {
  console.log('Render value>>>');
  return <p>{value}</p>;
};

export default ValuePainter;
