import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";
import "./shop.styles.scss";


const Shop = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return (
    <div className="products-container">
      { products.map((product) => {
        const { id } = product;
        return <ProductCard key={id} product={product}/>
      }) }
    </div>
  );
};

export default Shop;