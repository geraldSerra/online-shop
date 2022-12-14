import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <Stack direction="row" alignItems="center">
          <StoreIcon sx={{ color: "#16213E", fontSize: "40px" }} />

          <Typography
            variant="h4"
            sx={{
              display: { xs: "none", md: "flex" },
              color: "#16213E",
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecorationStyle: "none",
            }}
          >
            <strong>Online</strong>
          </Typography>

          <Typography
            variant="h4"
            sx={{
              display: { xs: "none", md: "flex" },
              color: "#00ADB5",
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecorationStyle: "none",
            }}
          >
            <strong>Shops</strong>
          </Typography>
        </Stack>
      </Link>
    </>
  );
};

export default Logo;
