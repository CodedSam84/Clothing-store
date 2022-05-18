import React from 'react';
import CardComponent from '../card/card.component';
import "./cards-container.styles.scss";

const CardsContainer = ({categoryList}) => {

  return (
    <div className="categories-container">
      { categoryList.map((category) =>
        {
          const {id} = category;
          return (
            <CardComponent category={category} key={id}/>
          )
        }
      )
      }
    </div>
  )
}

export default CardsContainer;
