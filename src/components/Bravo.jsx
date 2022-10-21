import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Products from "./Products";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";

import { Formik } from "formik";

const Bravo = () => {
  const [products, setProducts] = useState([
    {
      img: "https://www.bravo.com.do/wp-content/uploads/2021/05/banners-para-web-05.jpg",
      title: "Salami",
      price: 800,
      brand: "Bravo",
    },
    {
      img: "https://almacen.do/wp-content/uploads/2020/12/Cloro-LiCC81quido-Acel_-1gal-Front.jpg",
      title: "Cloro",
      price: 250,
      brand: "Acel",
    },
    {
      img: "https://almacen.do/wp-content/uploads/2020/05/Leche-Entera-Rica-Listamilk-1-L-Front.jpg",
      title: "Leche",
      price: 75,
      brand: "ListaMilk",
    },
  ]);

  const [form, setForm] = useState(false);

  const handleDelete = (arg) => {
    setProducts(products.filter((_, index) => index !== arg));
  };

  const Form = () => {
    if (form) {
      return (
        <Dialog open={form} sx={{ borderRadius: 10 }}>
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
              <strong>Add a Product</strong>
            </Typography>
            <Formik
              initialValues={{
                img: "",
                title: "",
                price: undefined,
                brand: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                // let json: object = JSON.stringify(values, null, 2);
                setProducts([...products, values]);
                setSubmitting(false);
                setForm(false);
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
                /* and other goodies */
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
                    label="Add a title"
                    variant="outlined"
                    type="text"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
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
                        setForm(false);
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
    }
  };

  return (
    <Box sx={{ width: "100", height: "100vh", bgcolor: "#DC5F00", p: 6 }}>
      <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 3 }}>
        <Avatar
          alt="User"
          src="data:image/png;base64,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"
          sx={{ width: 100, height: 100 }}
        />
        <Typography variant="h2" color="white">
          <strong>Bravo</strong>
        </Typography>
        <Form />
      </Stack>

      <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
        {products.map((product, index) => (
          <Products
            img={product.img}
            title={product.title}
            price={product.price}
            brand={product.brand}
            arg={index}
            handleDelete={handleDelete}
            shop="Bravo"
          />
        ))}

        <Box>
          <IconButton
            aria-label="Add"
            onClick={() => {
              setForm(true);
            }}
            sx={{ color: "rgba(255, 255, 255, 0.5)", p: 0 }}
          >
            <AddCircleIcon sx={{ fontSize: "50px" }} />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default Bravo;
