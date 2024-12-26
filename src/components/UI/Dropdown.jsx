import React from 'react';
import './Dropdown.module.css';

const Dropdown = ({ options = [], onChange, defaultValue }) => {
  return (
    <select className="dropdown" onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option.value || option}>
          {option.label || option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;