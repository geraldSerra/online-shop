import { Dispatch, SetStateAction } from "react";

export interface ThanksToBuyProps {
  purchased: boolean;
  setPurchased: Dispatch<SetStateAction<boolean>>;
}
