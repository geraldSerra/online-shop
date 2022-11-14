import { useContext, useState } from "react";
import Products from "../components/Products";
import { AddProductContext } from "../context/addProductContext";
import { ProductsData } from "../data/ProductsData";
import { Box, Typography, Stack, Avatar, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddProduct from "../components/form/AddProduct";

const Mango = () => {
  const [products, setProducts] = useState(ProductsData.mango);
  const { addProduct, setAddProduct } = useContext(AddProductContext);

  const handleDelete = (arg: number) => {
    const filteredProduts = products.filter((_, index) => index !== arg);
    setProducts(filteredProduts);
    ProductsData.mango = [...filteredProduts];
  };

  return (
    <>
      <Box
        sx={{
          width: "100",
          height: "100",
          bgcolor: "#FFF2F2",
          px: 6,
          pt: 4,
          pb: 10,
        }}
      >
        <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 4 }}>
          <Avatar
            alt="User"
            src="https://brandemia.org/contenido/subidas/2014/03/mang_port.jpg"
            sx={{ width: "100px", height: "100px" }}
          />
          <Typography variant="h2" color="black">
            <strong>MANGO RD</strong>
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
                ProductsData.mango = [...products];
              }}
              sx={{ color: "rgba(255, 255, 255, 0.5)", p: 0 }}
            >
              <AddCircleIcon sx={{ fontSize: "50px", color: "#66BFBF" }} />
            </IconButton>
          </Box>
        </Stack>
      </Box>
      <AddProduct
        products={products}
        setProducts={setProducts}
        shop={"MANGO RD"}
        storage={ProductsData.mango}
      />
    </>
  );
};

export default Mango;
