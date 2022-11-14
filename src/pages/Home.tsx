import { Box, Grid, Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { shops } from "../data/ShopsData";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#EAF6F6",
          width: "100",
          height: "100",
          flexGrow: 1,
          px: { xs: 3, md: 10 },
          py: { xs: 3, md: 5 },
        }}
      >
        <Box
          sx={{
            borderRadius: 5,
            boxShadow: "8px 10px #00ADB5",
          }}
        >
          <Typography
            variant="h2"
            color="#16213E"
            textAlign="center"
            sx={{
              transition: "0.3s",
              mb: { xs: 4, md: 10 },
              fontSize: { xs: "25px", md: "60px" },
            }}
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
              xs={6}
              sm={6}
              md={3}
            >
              <Link to={"/" + shop.title}>
                <Avatar
                  alt={shop.title}
                  src={shop.icon}
                  sx={{
                    width: { xs: 100, md: 200 },
                    height: { xs: 100, md: 200 },
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
