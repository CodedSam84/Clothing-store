import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOPen, setIsCartOPen, cartQuantity } = useContext(CartContext);

  const toggleHandler = () => setIsCartOPen(!isCartOPen);

  return (
    <CartIconContainer onClick={toggleHandler}>
      <ShoppingIcon/>
      <ItemCount>{cartQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;