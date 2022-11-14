import { createContext } from "react";

export interface AddProductContextInt {
  addProduct: boolean;
  setAddProduct: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddProductContext = createContext<AddProductContextInt>({
  addProduct: false,
  setAddProduct: () => {},
});
