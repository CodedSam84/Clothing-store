import React from 'react';
import "./category-item.styles.scss";

const CategoriesWrapper = ({categoryList}) => {

  return (
    <div className="categories-container">
      { categoryList.map((category) =>
        {
          const {title, id, imageUrl} = category;

          return (
            <div key={id} className="category-container">
              <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}/>
              <div className="category-body-container">
                <h2>{title}</h2>
                <p>shop now</p>
              </div>
            </div>
          )
          
        }
      )
      }
    </div>
  )
}

export default CategoriesWrapper;
