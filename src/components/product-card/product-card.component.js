import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./product-card.styles.scss";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const ProductCard = ({product}) => {
  const { name, imageUrl, price } = product;
  
  const { addItemToCart} = useContext(CartContext);

  const handleClick = () => addItemToCart(product);
  
  return (
    <div onClick={handleClick} className="product-card-container">
      <img src={imageUrl} alt={name}/>
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;