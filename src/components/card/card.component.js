import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundImage, Card, CategoryBodyContainer } from './card.styles.js';

const CardComponent = ({category}) => {
  const { title, imageUrl, route } = category;
  const navigateCategory = useNavigate();
  const categoryRouteHandler = () => navigateCategory(route);

  return(
    <Card onClick={categoryRouteHandler}>
      <BackgroundImage imageUrl= {imageUrl}/>
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>shop now</p>
      </CategoryBodyContainer>
    </Card>
  );
  
};

export default CardComponent;
