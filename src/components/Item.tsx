import { useContext } from "react";
import { Box, Typography, Button, Stack, Grid, Card } from "@mui/material";
import { CartProducts } from "../data/ShopsData";
import { CartListContext } from "../context/CartListContext";
import Counter from "./Counter";
// import { itemProps } from "../features/models/ItemProps";

const Item = () => {
  const { cart, setCart } = useContext(CartListContext);

  const handleDelete = (arg: number) => {
    const filteredCart = cart.filter((_, index) => index !== arg);
    setCart(filteredCart);
    CartProducts.cart = [...filteredCart];
  };

  return (
    <>
      <Stack direction="column" spacing={2}>
        {" "}
        {cart.map((item, index) => {
          return (
            <Card>
              <Grid
                container
                direction="row"
                spacing={0}
                sx={{
                  fontFamily: "Roboto",
                  alignContent: "center",
                  width: "100%",
                }}
              >
                <Grid item md={3}>
                  <Box sx={{ width: "100px", height: "100%" }}>
                    <img src={item.img} width="95px" height="90px" />
                  </Box>
                </Grid>

                <Grid item md={5}>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    sx={{
                      height: "100%",
                      pl: 1,
                    }}
                  >
                    <Typography gutterBottom variant="h5">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.brand}
                    </Typography>
                    <Typography variant="body2" color="h7">
                      {"RD$" + item.price}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item md={4}>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignContent="center"
                    sx={{
                      height: "100%",
                      pr: 3,
                    }}
                  >
                    <Counter handleDelete={handleDelete} index={index} />
                    <Button
                      variant="outlined"
                      sx={{ textTransform: "capitalize" }}
                      onClick={() => {
                        handleDelete(index);
                      }}
                    >
                      Delete
                    </Button>
                  </Stack>
                </Grid>
              </Grid>

              <Stack
                direction="column"
                spacing={0}
                sx={{
                  display: "flex",
                  justifyContent: "rigth",
                  fontFamily: "Roboto",
                  pr: 2,
                }}
              >
                <Box>
                  <Typography
                    sx={{ mb: 0.5, minWidth: 100 }}
                    variant="body2"
                    color="text.secondary"
                    textAlign="right"
                  >
                    <strong>{item.shop}</strong>
                  </Typography>
                </Box>
              </Stack>
            </Card>
          );
        })}
      </Stack>
    </>
  );
};

export default Item;
