import { useContext, useState } from "react";
import { CartProducts } from "../data/ShopsData";
import { CartListContext } from "../context/CartListContext";
import { ProductsProps } from "../features/models/ProductsProps";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  CardActionArea,
  IconButton,
  Alert,
  Dialog,
  Button,
  Tooltip,
  Box,
} from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

const Products = ({
  name,
  img,
  price,
  brand,
  shop,
  index,
  handleDelete,
}: ProductsProps) => {
  const { cart, setCart } = useContext(CartListContext);
  const [alert, setAlert] = useState(false);

  const addToCart = () => {
    setCart([
      ...cart,
      {
        name: name,
        img: img,
        price: price,
        brand: brand,
        shop: shop,
      },
    ]);
    setAlert(true);
    CartProducts.cart.push({
      name: name,
      img: img,
      price: price,
      brand: brand,
      shop: shop,
    });
  };

  const BuyAlert = () => {
    return (
      <Dialog open={alert} onClose={() => setAlert(false)}>
        <Alert severity="success" onClose={() => setAlert(false)}>
          This item was added to Cart List!
        </Alert>
      </Dialog>
    );
  };

  return (
    <>
      <BuyAlert />
      <Card
        sx={{
          minWidth: 200,
          maxWidth: 200,
          minHeight: 380,
          maxHeight: 380,
          display: "block",
          bgcolor: "rgba(255, 255, 255, 1)",
          width: { xs: "flex", sm: "200px" },
          p: 0,
        }}
      >
        <CardActionArea>
          <CardMedia component="img" height="190" image={img} />
          <Box sx={{ height: "100%" }}>
            <Typography
              sx={{ color: "Gray", py: 0.5 }}
              variant="h6"
              fontFamily="roboto"
              textAlign="center"
              fontSize="15px"
            >
              {brand}
            </Typography>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ height: "82px", px: 1 }}
            >
              <Typography
                sx={{ color: "Black" }}
                variant="h6"
                fontFamily="roboto"
                textAlign="center"
                fontWeight="440"
                lineHeight="20px"
              >
                {name}
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
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              sx={{ alignContent: "end" }}
            >
              <Button
                endIcon={<ShoppingCartOutlinedIcon />}
                onClick={() => {
                  addToCart();
                }}
                sx={{
                  textTransform: "none",
                  color: "#3C4048",
                  bgcolor: "#FBDF07",
                  borderRadius: 10,
                  m: 1,
                  "&:hover": {
                    bgcolor: "#FBCB0A",
                  },
                }}
              >
                Add to Cart
              </Button>

              <Tooltip title="Delete this product">
                <IconButton
                  aria-label="delete"
                  onClick={handleDelete ? () => handleDelete(index) : undefined}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Products;
