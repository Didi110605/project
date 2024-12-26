import React from 'react';
import './Banner.module.css';

const Banner = ({ text, buttonText, onClick }) => {
  return (
    <div className="banner">
      <span className="banner-text">{text}</span>
      <button className="banner-button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Banner;