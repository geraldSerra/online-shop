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

const Jumbo = () => {
  const [products, setProducts] = useState([
    {
      img: "https://ss237.liverpool.com.mx/xl/1066298982.jpg",
      title: "Tenis",
      price: 2900,
      brand: "Vans",
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_786479-MLA48643304793_122021-O.webp",
      title: "Pelota B",
      price: 4000,
      brand: "Wislon",
    },
    {
      img: "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio3-wireless/pdp/refresh2022/studio3-pdp-p02.png.large.2x.png",
      title: "Headphones",
      price: 5200,
      brand: "Beats",
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
    <Box sx={{ width: "100", height: "100vh", bgcolor: "#C21010", p: 6 }}>
      <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 3 }}>
        <Avatar
          alt="User"
          src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0019/3467/brand.gif?itok=5pI2dYBa"
          sx={{ width: 100, height: 100 }}
        />
        <Typography variant="h2" color="white">
          <strong>Jumbo - Lo máximo para comprar</strong>
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
            shop="Jumbo"
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

export default Jumbo;
