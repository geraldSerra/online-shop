import { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, Menu, MenuItem, Stack, Tooltip } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SentimentVerySatisfiedRoundedIcon from "@mui/icons-material/SentimentVerySatisfiedRounded";
import DrawerComponent from "./DrawerComponent";
import Badge from "@mui/material/Badge";
import { CartListContext } from "../../context/CartListContext";
import Logo from "../../assets/Logo";

const pages = ["Deals", "More shops"];
const settings = ["Customer", "Admin"];

const NavBar = () => {
  const { cart, setCart } = useContext(CartListContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <>
      <DrawerComponent open={openDrawer} close={closeDrawer} />
      <AppBar
        id="AppBar"
        position="relative"
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
          px: 5,
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
            </Stack>

            <Box
              sx={{
                display: "block",
                px: 3,
              }}
            ></Box>
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
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};

export default NavBar;
