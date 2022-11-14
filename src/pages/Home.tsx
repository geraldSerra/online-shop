import { Box, Grid, Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { shops } from "../data/ShopsData";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: "100",
          height: "100",
          flexGrow: 1,
          px: 10,
          py: 5,
          bgcolor: "#EAF6F6",
        }}
      >
        <Box
          sx={{
            bgcolor: "#EAF6F6",
            borderRadius: 5,
            boxShadow: "8px 10px #00ADB5",
          }}
        >
          <Typography
            variant="h2"
            color="#16213E"
            textAlign="center"
            sx={{ mb: 10 }}
          >
            <strong>Choose the best store for you!</strong>
          </Typography>
        </Box>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
          columnSpacing={5}
        >
          {shops.map((shop) => (
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
              <Link to={"/" + shop.title}>
                <Avatar
                  alt={shop.title}
                  src={shop.icon}
                  sx={{
                    width: 200,
                    height: 200,
                    transition: "transform .3s",
                    "&:hover": {
                      transform: "scale(1.25)",
                    },
                  }}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
