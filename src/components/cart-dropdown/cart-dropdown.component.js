import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { CartButton, CartDropdownContainer, CartDropdownItems, EmptyMessage } from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const handleClick = () => navigate("/checkout");

  return (
    <CartDropdownContainer>
      <CartDropdownItems>
        { cartItems.length? (cartItems.map((item) => <CartItem item={item} key={item.id}/>)): <EmptyMessage>Cart is Empty</EmptyMessage> }
      </CartDropdownItems>
      <CartButton onClick={handleClick}>Go to checkout</CartButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;