import { useContext, useState } from "react";
import Products from "../components/Products";
import { AddProductContext } from "../context/addProductContext";
import { ProductsData } from "../data/ProductsData";
import { Box, Typography, Stack, Avatar, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddProduct from "../components/form/AddProduct";

const Puma = () => {
  const [products, setProducts] = useState(ProductsData.puma);
  const { addProduct, setAddProduct } = useContext(AddProductContext);

  const handleDelete = (arg: number) => {
    const filteredProduts = products.filter((_, index) => index !== arg);
    setProducts(filteredProduts);
    ProductsData.puma = [...filteredProduts];
  };

  return (
    <>
      <Box
        sx={{
          width: "100",
          height: "100",
          bgcolor: "black",
          px: 6,
          pt: 4,
          pb: 10,
        }}
      >
        <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 4 }}>
          <Avatar
            alt="User"
            src="https://images.puma.net/images/fn/~global~others~logosforexternalpartners~PUMA-clothes-shoes-accessories-for-women-men-kids.jpg"
            sx={{ width: "100px", height: "100px" }}
          />
          <Typography variant="h2" color="white">
            <strong>Puma RD</strong>
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ alignItems: "center" }}
        >
          {products.map((product, index) => (
            <Products
              img={product.img}
              name={product.name}
              price={product.price}
              brand={product.brand}
              shop={product.shop}
              index={index}
              handleDelete={handleDelete}
            />
          ))}

          <Box>
            <IconButton
              aria-label="Add"
              onClick={() => {
                setAddProduct(true);
                ProductsData.puma = [...products];
              }}
              sx={{ color: "rgba(255, 255, 255, 0.5)", p: 0 }}
            >
              <AddCircleIcon sx={{ fontSize: "50px", color: '#66BFBF' }} />
            </IconButton>
          </Box>
        </Stack>
      </Box>
      <AddProduct
        products={products}
        setProducts={setProducts}
        shop={"Puma RD"}
        storage={ProductsData.puma}
      />
    </>
  );
};

export default Puma;
