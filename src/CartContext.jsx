import { createContext, useState } from "react";
import { data } from "./Data.js";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [totalAmt, setTotalAmt] = useState(0);
  return (
    <CartContext.Provider
      value={{ total, setTotal, data,totalAmt, setTotalAmt }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;