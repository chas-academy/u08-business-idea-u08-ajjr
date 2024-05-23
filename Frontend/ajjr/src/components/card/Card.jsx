import React from "react";
import "../card/card.css";

const Card = ({ className, title, text }) => (
  <div className={`card ${className}`}>
    <div className="card__content">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </div>
  </div>
);

export default Card;
