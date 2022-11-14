import { Dispatch, SetStateAction } from "react";
import { ProductsDataInt } from "../../data/ProductsData";

export interface AddProductProps {
  products: {
    name: string;
    img: string;
    price: number | undefined;
    brand: string;
    shop: string;
  }[];
  setProducts: Dispatch<
    SetStateAction<
      {
        name: string;
        img: string;
        price: number | undefined;
        brand: string;
        shop: string;
      }[]
    >
  >;
  shop: string;
  storage: ProductsDataInt[];
}
