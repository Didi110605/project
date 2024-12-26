import React from 'react';
import './ButtonCard.module.css';

const Button = ({ variant = 'primary', children, onClick, disabled = false }) => {
  return (
    <button
      className={`btn ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;