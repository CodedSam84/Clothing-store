import Button from "../button/button.component";
import "./product-card.styles.scss";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const ProductCard = ({product}) => {
  const { name, imageUrl, price } = product;
  console.log(product);
  const { addItemToCart} = useContext(CartContext);
  console.log(addItemToCart);

  const handleClick = () => addItemToCart(product);
  
  return (
    <div onClick={handleClick} className="product-card-container">
      <img src={imageUrl} alt={name}/>
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;