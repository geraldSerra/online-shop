import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import { CardActionArea } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { cart } from "./NavBar";
import { NavBar } from "./NavBar";

interface ProductsProps {
  title: string;
  img: string;
  price: number;
  brand: string;
  shop: string;
  ProductDelete?: (arg: any) => void;
}

function Products({ title, img, price, brand, shop }: ProductsProps) {
  const [productInCart, setProductInCart] = useState(false);

  const addToCart = () => {
    setProductInCart(true);
    cart.push(
      shop + " • " + "RD$" + price.toString() + " - " + brand + " " + title
    );
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "block",
        bgcolor: "rgba(255, 255, 255, 1)",
        width: { xs: "flex", sm: "200px" },
        p: 0,
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="190" image={img} />
        <CardContent>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="end"
          >
            <Typography
              sx={{ color: "Gray" }}
              gutterBottom
              variant="h6"
              component="div"
              fontFamily="roboto"
              textAlign="center"
              fontSize="15px"
            >
              {brand}
            </Typography>
            <Typography
              sx={{ color: "Black" }}
              gutterBottom
              variant="h5"
              component="div"
              fontFamily="roboto"
              textAlign="center"
            >
              {title}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "Black" }}
            gutterBottom
            textAlign="center"
          >
            RD${price}
          </Typography>
        </CardContent>

        <Stack direction="row" justifyContent="space-between">
          <IconButton aria-label="add to cart" onClick={() => addToCart()}>
            <ShoppingCartRoundedIcon />
          </IconButton>

          {/* <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton> */}
        </Stack>
      </CardActionArea>
    </Card>
  );
}

export default Products;
