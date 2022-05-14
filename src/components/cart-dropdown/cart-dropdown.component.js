import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        { cartItems.map((item) => {
          const { name, price, imageUrl, quantity } = item;

          return (
            <div>
              <h2>{name}</h2>
              <span>{quantity}</span>
            </div>
          );
        })
        }
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;