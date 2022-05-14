import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOPen: false,
  setIsCartOPen: () => null,
  cartItems: [],
  addItemToCart: () => {},
});

const updateCart = (productToAdd, cartItems) => {
  const existingItem = cartItems.find(
    (item) => item.id === productToAdd.id
  )

  if (existingItem) {
   
   return cartItems.map((item) => item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item 
   );
  }

  return [ ...cartItems, { ...productToAdd, quantity: 1 } ];
}

export const CartProvider = ({children}) => {
  const [ isCartOPen, setIsCartOPen ] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(updateCart(productToAdd, cartItems));
  }


  const value = { isCartOPen, setIsCartOPen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Create storage for cart items
// Get product from product card
// Transform to cart item
// Check if cart item already present in storage(if yes, increase count, otherwise add item to storage)
// Return updated cart items in storage