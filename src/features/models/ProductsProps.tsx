export interface ProductsProps {
  name: string;
  img: string;
  price: number | undefined;
  brand: string;
  shop: string;
  index: number;
  handleDelete?: (arg: any) => void;
}
