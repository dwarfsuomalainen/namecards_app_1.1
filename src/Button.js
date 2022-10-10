import React from 'react';
import { Button } from 'react-bootstrap';

const buttonStyle = {
  margin: '5px',
  color: 'white',
  cursor: 'pointer',
};

const Button1 = ({ label, handleClick }) => (
  <Button>
  <button
    className="btn btn-default"
    style={buttonStyle}
    onClick={handleClick}
  >
    {label}
  </button></Button>
);

export default Button1;