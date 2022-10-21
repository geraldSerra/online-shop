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

const Puma = () => {
  const [products, setProducts] = useState([
    {
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/387769/03/sv01/fnd/IND/fmt/png",
      title: "Vegas TX",
      price: 4000,
      brand: "Puma",
    },
    {
      img: "https://falabella.scene7.com/is/image/FalabellaPE/16821206_1?wid=800&hei=800&qlt=70",
      title: "T-shirt",
      price: 2500,
      brand: "Puma",
    },
    {
      img: "https://www.viu.mx/img/310/300/resize/P/U/PUMA01087_x1.jpg",
      title: "Mochila",
      price: 2900,
      brand: "Puma",
    },
    {
      img: "https://mister-mango.omni.la/ProductCatalog/Workspace.CWDQQL6GUIJMS/ProductCatalog.C4CS6OOOVFGJY/1500x1500/C4CXCECTMUMEG.jpg",
      title: "Abrigo",
      price: 6000,
      brand: "Puma",
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_609289-MLM42133016973_062020-O.jpg",
      title: "Gorra",
      price: 1100,
      brand: "Puma",
    },
  ]);

  const [form, setForm] = useState(false);

  const ProductDelete = (index) => {
    console.log("delete");
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
    <Box sx={{ width: "100", height: "100vh", bgcolor: "black", p: 6 }}>
      <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 3 }}>
        <Avatar
          alt="User"
          src="https://images.puma.net/images/fn/~global~others~logosforexternalpartners~PUMA-clothes-shoes-accessories-for-women-men-kids.jpg"
          sx={{ width: 100, height: 100 }}
        />
        <Typography variant="h2" color="white">
          <strong>Puma RD</strong>
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
            shop="Puma RD"
            ProductDelete={ProductDelete(index)}
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

export default Puma;
