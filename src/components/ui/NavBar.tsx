import { useState, useContext } from "react";
import { CartListContext } from "../../context/CartListContext";
import Logo from "../../assets/Logo";
import User from "../User";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Stack,
  Tooltip,
  Dialog,
  Badge,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DrawerComponent from "./DrawerComponent";
import { AdminModeContext } from "../../context/AdminModeContext";

const pages = ["Deals", "More shops"];

const NavBar = () => {
  const { cart, setCart } = useContext(CartListContext);
  const { admin, setAdmin } = useContext(AdminModeContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <DrawerComponent open={openDrawer} close={closeDrawer} />
      <AppBar
        id="AppBar"
        position="relative"
        sx={{
          height: { xs: 70, md: 70 },
          color: "Gray",
          fontFamily: "roboto",
          textTransform: "none",
          justifyContent: "center",
          bgcolor: "white",
          transition: "0.3s",
          px: { xs: 1.5, md: 5 },
        }}
      >
        <Box sx={{ display: "flex", mx: "auto", width: "100%" }}>
          <Toolbar
            disableGutters
            sx={{ mx: 0, justifyContent: "space-between", width: "100%" }}
          >
            <Logo />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "inherit",
                flexGrow: 1,
                justifyContent: "left",
                mx: 5,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {}}
                  sx={{
                    my: 2,
                    px: 2,
                    color: "inherit",
                    display: "block",
                    textTransform: "inherit",
                    fontSize: "15px",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: "flex",
              fontFamily: "inherit",
              flexGrow: 1,
              justifyContent: "right",
              alignItems: "center",
              mx: 0,
            }}
          >
            {!admin && (
              <Box>
                <Tooltip title="Open Cart">
                  <Badge badgeContent={cart.length} color="primary">
                    <IconButton
                      aria-label="Cart"
                      sx={{
                        bgcolor: cart.length > 0 ? "#A8E890" : "action",
                        color: cart.length > 0 ? "green" : "action",
                      }}
                      onClick={() => {
                        setOpenDrawer(true);
                      }}
                    >
                      <ShoppingCartOutlinedIcon />
                    </IconButton>
                  </Badge>
                </Tooltip>
              </Box>
            )}
            <User />
          </Stack>
        </Box>
      </AppBar>
    </>
  );
};

export default NavBar;
