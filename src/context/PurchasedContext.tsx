import { createContext } from "react";

export interface PurchasedContextInt {
  purchased: boolean;
  setPurchased: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PurchasedContext = createContext<PurchasedContextInt>({
  purchased: false,
  setPurchased: () => {},
});
