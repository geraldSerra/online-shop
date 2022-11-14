import { useContext } from "react";
import { Drawer, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CartListContext } from "../../context/CartListContext";
import Cart from "../Cart";

interface DrawerComponentProps {
  open?: boolean;
  close?: () => void;
}

const DrawerComponent = ({ open, close }: DrawerComponentProps) => {
  const { cart } = useContext(CartListContext);
  const matches = useMediaQuery(useTheme().breakpoints.up("sm"));

  return (
    <Drawer
      PaperProps={{
        sx: {
          width: { xs: "flex", sm: "32%" },
          height: { xs: "70%", sm: "85%" },
          px: 4,
          pt: 6,
          pb: 9,
        },
      }}
      open={open}
      anchor={matches ? "right" : "bottom"}
      onClose={close ? () => close() : undefined}
    >
      <Typography variant="h3" color="#256D85" sx={{ pb: 2 }}>
        Cart List
      </Typography>
      {cart.length > 0 ? (
        <Cart />
      ) : (
        <Typography variant="h6" textAlign="center">
          Add something to buy!
        </Typography>
      )}
    </Drawer>
  );
};

export default DrawerComponent;
