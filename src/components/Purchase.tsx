import { useState, useContext, useEffect } from "react";
import { CartListContext } from "../context/CartListContext";
import { PurchasedContext } from "../context/PurchasedContext";
import { Box, Button, Typography } from "@mui/material";
import { CartProducts } from "../data/ShopsData";

const Purchase = () => {
  const { cart, setCart } = useContext(CartListContext);
  const { purchased, setPurchased } = useContext(PurchasedContext);

  const Total = () => {
    return cart.reduce(
      (accumulator, currentValue) =>
        accumulator + (currentValue.price ? currentValue.price : 0),
      0
    );
  };

  const Purchased = () => {
    CartProducts.cart = [];
    setCart([...CartProducts.cart]);
    setPurchased(true);
  };

  return (
    <>
      <Box>
        <Typography>
          Subtotal <strong>RD${Total()}</strong>
        </Typography>
      </Box>
      <Button
        onClick={() => {
          Purchased();
        }}
        sx={{
          textTransform: "capitalize",
          color: "#3C4048",
          bgcolor: "#FBDF07",
          "&:hover": {
            bgcolor: "#FBCB0A",
          },
        }}
      >
        Purchase ({cart.length} products)
      </Button>
    </>
  );
};

export default Purchase;
