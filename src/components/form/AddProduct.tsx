import { Dispatch, SetStateAction, useContext, useState } from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Dialog,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { AddProductContext } from "../../context/addProductContext";
import { AddProductProps } from "../../features/models/AddProductsProps";

const AddProduct = ({
  products,
  setProducts,
  shop,
  storage,
}: AddProductProps) => {
  const { addProduct, setAddProduct } = useContext(AddProductContext);

  console.log(products);

  return (
    <Dialog open={addProduct} sx={{ borderRadius: 10 }}>
      <Box
        sx={{
          maxWidth: "400px",
          bgcolor: "white",
          justifyItems: "center",
          boxShadow: 5,
          px: 5,
          py: 3,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          color="#003865"
          sx={{ py: 2 }}
        >
          <strong>Add Product</strong>
        </Typography>

        <Formik
          initialValues={{
            name: "",
            img: "",
            price: undefined,
            brand: "",
            shop: shop,
          }}
          //onSubmit
          onSubmit={(values, { setSubmitting }) => {
            setProducts([...products, values]);
            setSubmitting(false);
            setAddProduct(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                required
                helperText="Img of the Product"
                margin="dense"
                id="outlined-basic"
                label="URL img"
                variant="outlined"
                type="url"
                name="img"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.img}
              />

              <TextField
                fullWidth
                required
                helperText="Name of the Product"
                margin="dense"
                id="outlined-basic"
                label="Add a name"
                variant="outlined"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />

              <TextField
                fullWidth
                required
                helperText="Price of the Product"
                margin="dense"
                id="outlined-basic"
                label="Introduce the price"
                variant="outlined"
                type="number"
                name="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />

              <TextField
                fullWidth
                helperText="Price of the Product"
                margin="dense"
                id="outlined-basic"
                label="Your product brand"
                variant="outlined"
                type="text"
                name="brand"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.brand}
              />

              <Stack direction="row" justifyContent="space-between">
                <Button
                  type="submit"
                  variant="contained"
                  color="error"
                  sx={{ display: "block", my: 2 }}
                  onClick={() => {
                    setAddProduct(false);
                  }}
                >
                  Close
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  color="success"
                  sx={{ display: "block", my: 2 }}
                >
                  Add
                </Button>
              </Stack>
            </form>
          )}
        </Formik>
      </Box>
    </Dialog>
  );
};

export default AddProduct;
