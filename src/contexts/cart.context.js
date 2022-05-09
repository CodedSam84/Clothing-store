import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOPen: false,
  setIsCartOPen: () => null,
});

export const CartProvider = ({children}) => {
  const [ isCartOPen, setIsCartOPen ] = useState(false);

  const value = { isCartOPen, setIsCartOPen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
