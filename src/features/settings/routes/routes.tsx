import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../../../pages/Home";
import Bravo from "../../../pages/Bravo";
import Jumbo from "../../../pages/Jumbo";
import Nacional from "../../../pages/Nacional";
import Puma from "../../../pages/Puma";
import NavBar from "../../../components/ui/NavBar";
import Mango from "../../../pages/Mango";

export const RoutesComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Puma" element={<Puma />} />
          <Route path="/Bravo" element={<Bravo />} />
          <Route path="/Nacional" element={<Nacional />} />
          <Route path="/Jumbo" element={<Jumbo />} />
          <Route path="/Mango" element={<Mango />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
