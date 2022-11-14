import { useState } from "react";
import { Stack } from "@mui/material";
import Item from "./Item";
import Purchase from "./Purchase";
import { PurchasedContext } from "../context/PurchasedContext";
import ThanksToBuy from "./ThanksToBuy";

export const Cart = () => {
  return (
    <>
      <Stack spacing={1}>
        <Purchase />
        <Item />
      </Stack>
    </>
  );
};

export default Cart;
