import React from "react";
import NavbarHome from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import City from './components/City'
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import {withRouter } from './utilities/withRouter'

const CityD = withRouter(City)


function App() {
  return (
    <>
    <BrowserRouter>
    
      <NavbarHome />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cities" element={<Cities />}></Route>
        <Route path="/cities/:city" element={<CityD />}></Route>

      </Routes>
      
      <Footer />

    </BrowserRouter>
    </>
  );
}

export default App;
