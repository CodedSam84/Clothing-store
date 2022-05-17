import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOPen: false,
  setIsCartOPen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
  removeCartItem: () => {},
  cartQuantity: 0,
  cartPrice: 0,
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

const reduceItemQuantity = (itemToRemove, cartItems) => {
  if (itemToRemove.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }

  return cartItems.map((item) => item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item 
   );
};

const filterItemsFromCart = (itemToRemove, cartItems) => cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);


export const CartProvider = ({children}) => {
  const [ isCartOPen, setIsCartOPen ] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);
  const [ cartQuantity, setCartQuantity ] = useState(0);
  const [ cartPrice, setCartPrice ] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(updateCart(productToAdd, cartItems));
  }

  const updateItemQuantity = (itemToRemove) => {
    setCartItems(reduceItemQuantity(itemToRemove, cartItems));
  };

  const removeCartItem = (itemToRemove) => {
    setCartItems(filterItemsFromCart(itemToRemove, cartItems));
  };

  useEffect(() => {
    const totalQuantity = cartItems.reduce((previousSum, currentValue) => previousSum + currentValue.quantity, 0)
    setCartQuantity(totalQuantity);
  }, [cartItems]);

  useEffect(() => {
    const totalPrice = cartItems.reduce((previousSum, currentValue) => previousSum + (currentValue.price * currentValue.quantity), 0)
    setCartPrice(totalPrice);
  }, [cartItems]);

  const value = { isCartOPen, setIsCartOPen, cartItems, addItemToCart, cartQuantity, updateItemQuantity, removeCartItem, cartPrice };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}