import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Shops = () => {
  return (
    <Box sx={{ flexGrow: 1, mx: 10, my: 5 }}>
      <Typography variant="h2" color="#16213E" sx={{ mb: 5 }}>
        <strong>Choose the best store for you!</strong>
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
        columnSpacing={5}
      >
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          sm={6}
          md={3}
        >
          <Link to="/Puma">
            <IconButton onClick={() => {}} sx={{ p: 0 }}>
              <Avatar
                alt="User"
                src="https://yt3.ggpht.com/ytc/AMLnZu-958nknFKv2iFaKl2vciXTS-vRF_8EA4XZagDCQQ=s900-c-k-c0x00ffffff-no-rj"
                sx={{ width: 200, height: 200 }}
              />
            </IconButton>
          </Link>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          sm={6}
          md={3}
        >
          <Link to="/Bravo">
            <IconButton onClick={() => {}} sx={{ p: 0 }}>
              <Avatar
                alt="User"
                src="https://supermercadosbravo.talentclue.com/system/files/logo_bravo_5.5_picas_1594385428.png"
                sx={{ width: 200, height: 200 }}
              />
            </IconButton>
          </Link>
        </Grid>

        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          sm={6}
          md={3}
        >
          <Link to="/Nacional">
            <IconButton onClick={() => {}} sx={{ p: 0 }}>
              <Avatar
                alt="User"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUF6Dka8W7sJYLuko5KJqJFpU9k2cVFTkuA&usqp=CAU"
                sx={{ width: 200, height: 200 }}
              />
            </IconButton>
          </Link>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          sm={6}
          md={3}
        >
          <Link to="/Jumbo">
            <IconButton onClick={() => {}} sx={{ p: 0 }}>
              <Avatar
                alt="User"
                src="data:image/png;base64,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"
                sx={{ width: 200, height: 200 }}
              />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Shops;
