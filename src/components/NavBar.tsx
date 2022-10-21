import React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { MenuItem } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Stack } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import { cart } from "../data/Cart";
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";

// import { useScrollPosition } from "../hooks/useScrollPosition";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Logo from "./Logo";
import { ChipArray } from "./ChipsArray";

const pages = ["Pricing", "More shops"];
const settings = ["Profile", "Account", "Logout"];

const NavBar = () => {
  const [productInCart, setProductInCart] = useState(false);

  useEffect(() => {
    setInterval(() => {
      {
        if (cart.length > 0) setProductInCart(true);
      }
    }, 250);
  });

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleDelete = () => {};

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = useState(false);

  interface Props {
    window?: () => Window;
    children: React.ReactElement;
  }

  const ScrollDown = (props: Props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  return (
    <>
      <AppBar
        id="AppBar"
        position="sticky"
        color="transparent"
        sx={{
          // bgcolor: '#43C6AC',
          width: "100%",
          height: { sm: 80, md: 70 },
          color: "Gray",
          fontFamily: "roboto",
          textTransform: "none",
          justifyContent: "center",
          zindex: "1",
          bgcolor: "white",
          backgroundAttachment: "fixed",
          transition: "0.2s",
          px: 10,
        }}
      >
        {/* Container */}
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
                  onClick={() => (
                    <Dialog open={true}>
                      This is a warning alert — check it out!
                    </Dialog>
                  )}
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
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "inherit",
                flexGrow: 1,
                justifyContent: "right",
                mx: 0,
              }}
            >
              <IconButton
                aria-label="Cart"
                sx={{
                  bgcolor: productInCart ? "#A8E890" : "action",
                  color: productInCart ? "green" : "action",
                }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Stack>
            <Box
              sx={{
                display: "block",
                px: 3,
              }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="User"
                    src="https://iconape.com/wp-content/png_logo_vector/avatar-10.png"
                    sx={{ width: 60, height: 60 }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: {
            width: { xs: "flex", sm: "30%" },
            height: { xs: "55%", sm: "85%" },
            px: 4,
            py: 9,
          },
        }}
        open={open}
        anchor="right"
        onClose={() => {
          setOpen(false);
        }}
      >
        <Typography variant="h3" color="#256D85">
          Cart List
        </Typography>
        {productInCart ? (
          <ChipArray data={cart} handleDelete={handleDelete} />
        ) : (
          <Typography variant="h6" textAlign="center" sx={{ py: 5 }}>
            Agrega algo para comprar
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          disabled={!productInCart}
          color="success"
          // onClick = {()=> (cart[0].pop)}
          sx={{ display: "block", my: 2 }}
        >
          Buy
        </Button>
      </Drawer>
    </>
  );
};

export default NavBar;
