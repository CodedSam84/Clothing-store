import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({item}) => {
  const { name, quantity, imageUrl, price } = item;
  const { removeCartItem, addItemToCart, updateItemQuantity } = useContext(CartContext);

  const handleRemoveItem = () => removeCartItem(item);
  const handleIncreaseQuantity = () => addItemToCart(item);
  const handleReduceQuantity = () => updateItemQuantity(item);
 
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="quantity-adjust" onClick={handleIncreaseQuantity}>
          &#43;
        </div>
        <span className="value">{quantity}</span>
        <div className="quantity-adjust" onClick={handleReduceQuantity}>
          &#45;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleRemoveItem}>&#215;</div>
    </div>
  );
};

export default CheckoutItem;