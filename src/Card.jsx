import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // Optional: Add a CSS file for styling

const Card = ({ img, text, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={img} alt="Card" width="50%" className="card-img" />
      <h1 className="card-text">{text}</h1>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
