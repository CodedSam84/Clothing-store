import { Fragment } from "react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./category.styles.scss";

const Category = () => {
  const { categories } = useContext(CategoriesContext);
  const { category } = useParams();
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const products = categories[category];
    setProducts(products);
  }, [category, categories]);

  return (
    <Fragment>
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
      { 
        products && products.map((product) => <ProductCard key={product.id} product={product}/>)
      }
    </div>
    </Fragment>
  );
};

export default Category;