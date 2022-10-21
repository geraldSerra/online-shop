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
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Logo from "./Logo";
import { ChipArray } from "./ChipsArray";
import SentimentVerySatisfiedRoundedIcon from "@mui/icons-material/SentimentVerySatisfiedRounded";

const pages = ["Deals", "More shops"];
const settings = ["Profile", "Account", "Logout"];

export let cart: string[] = [];

export const NavBar = () => {
  //States
  const [productInCart, setProductInCart] = useState(false);
  const [open, setOpen] = useState(false);
  const [chip, setChip] = useState(cart);
  const [thanks, setThanks] = useState(false);

  useEffect(() => {
    setInterval(() => {
      {
        if (chip.length > 0) {
          setProductInCart(true);
        }
      }
    }, 250);
  });

  const handleDelete = (arg: number) => {
    const newChips = chip.filter((_, index) => index !== arg);
    cart = newChips;
    setChip(cart);

    if (chip.length < 1) {
      setProductInCart(false);
    }
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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

  const Thanks = () => {
    return (
      <Dialog
        open={thanks}
        onClose={() => setThanks(false)}
        sx={{ borderRadius: 10 }}
      >
        <Box
          sx={{
            maxWidth: "400px",
            bgcolor: "white",
            justifyItems: "center",
            boxShadow: 5,
            px: 5,
            py: 3,
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            color="#003865"
            sx={{ py: 2 }}
          >
            <strong>
              Thanks for you purchase!{" "}
              <SentimentVerySatisfiedRoundedIcon
              sx={{color:"#00ADB5", fontSize:"80px"}}
                
                
              />
            </strong>
          </Typography>
        </Box>
      </Dialog>
    );
  };

  return (
    <>
      <Thanks />
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
        {chip.length > 0 ? (
          <ChipArray data={chip} handleDelete={handleDelete} />
        ) : (
          <Typography variant="h6" textAlign="center" sx={{ py: 5 }}>
            Add something to buy!
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          disabled={chip.length == 0 ? true : false}
          color="success"
          onClick={() => {
            cart = [];
            setChip(cart);
            setThanks(true);
          }}
          sx={{ display: "block", my: 2 }}
        >
          Buy
        </Button>
      </Drawer>
    </>
  );
};
