import { createContext } from "react";
import { cartProps, CartProducts } from "../data/ShopsData";

export interface contextInt {
  cart: cartProps[];
  setCart: React.Dispatch<React.SetStateAction<cartProps[]>>;
}

export const CartListContext = createContext<contextInt>({
  cart: CartProducts.cart,
  setCart: () => {},
});
