import { Fragment } from "react";
import { useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";


const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);
  
  return (
    <Fragment>
      {
        Object.keys(categories).map((title) => {
          const products = categories[title].filter((_, indx) => indx < 4);

          return <CategoryPreview title={title} key={title} products={products}/>;
        })
      } 
    </Fragment>
  );
};

export default CategoriesPreview;