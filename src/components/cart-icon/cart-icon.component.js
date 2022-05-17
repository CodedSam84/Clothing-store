import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOPen, setIsCartOPen, cartQuantity } = useContext(CartContext);

  const toggleHandler = () => setIsCartOPen(!isCartOPen);

  return (
    <div onClick={toggleHandler} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{cartQuantity}</span>
    </div>
  );
};

export default CartIcon;