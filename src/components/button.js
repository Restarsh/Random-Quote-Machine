import React from 'react';

const Button = function({ buttonDisplayName, clickHandler }) {
  return <button onClick={clickHandler}>{buttonDisplayName}</button>;
};

export default Button;