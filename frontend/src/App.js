import React from "react";
import NavbarHome from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cities from "./pages/Cities";

import { BrowserRouter ,Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <NavbarHome />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cities" element={<Cities />}></Route>
      </Routes>
      
      <Footer />

    </BrowserRouter>
    </>
  );
}

export default App;
