import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shops from "./Shops";
import Nacional from "./Nacional";
import Bravo from "./Bravo";
import Jumbo from "./Jumbo";
import Puma from "./Puma";

const Main = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shops />} />
          <Route path="/Puma" element={<Puma />} />
          <Route path="/Nacional" element={<Nacional />} />
          <Route path="/Bravo" element={<Bravo />} />
          <Route path="/Jumbo" element={<Jumbo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
