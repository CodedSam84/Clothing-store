import React from 'react';
import "./card.component.scss";

const CardComponent = ({category}) => {
  const {title, imageUrl} = category;

  return(
    <div className="card">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}/>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
  
};

export default CardComponent;
