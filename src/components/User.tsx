import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { AdminModeContext } from "../context/AdminModeContext";

const User = () => {
  const { admin, setAdmin } = useContext(AdminModeContext);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const settings = [
    {
      mode: "Customer",
      action: () => {
        setAdmin(false);
        handleCloseUserMenu();
      },
      clicked: !admin,
    },
    {
      mode: "Admin",
      action: () => {
        setAdmin(true);
        handleCloseUserMenu();
      },
      clicked: admin,
    },
  ];

  const handleCloseUserMenu = () => {
    setTimeout(() => {
      setAnchorElUser(null);
    }, 200);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <>
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
          <MenuItem
            key={setting.mode}
            onClick={setting.action}
            sx={
              setting.clicked
                ? {
                    color: "white",
                    bgcolor: "#00ADB5",
                    "&:hover": { bgcolor: "#00ADB5" },
                  }
                : {}
            }
          >
            <Typography textAlign="center">{setting.mode}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default User;
