import { Box, Container } from "@mui/material";
import { useState } from "react";
import ThanksToBuy from "./components/ThanksToBuy";
import { AddProductContext } from "./context/addProductContext";
import { AdminModeContext } from "./context/AdminModeContext";
import { CartListContext } from "./context/CartListContext";
import { PurchasedContext } from "./context/PurchasedContext";
import { cartProps, CartProducts } from "./data/ShopsData";
import { RoutesComponent } from "./features/settings/routes/routes";

const App = () => {
  const [cart, setCart] = useState<cartProps[]>(CartProducts.cart);
  const [purchased, setPurchased] = useState<boolean>(false);
  const [addProduct, setAddProduct] = useState<boolean>(false);
  const [admin, setAdmin] = useState<boolean>(false);

  return (
    <>
      <AdminModeContext.Provider value={{ admin, setAdmin }}>
        <AddProductContext.Provider value={{ addProduct, setAddProduct }}>
          <PurchasedContext.Provider value={{ purchased, setPurchased }}>
            <CartListContext.Provider value={{ cart, setCart }}>
              <ThanksToBuy />
              <RoutesComponent />
            </CartListContext.Provider>
          </PurchasedContext.Provider>
        </AddProductContext.Provider>
      </AdminModeContext.Provider>
    </>
  );
};

export default App;
