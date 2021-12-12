import React,{useEffect} from "react";
import NavbarHome from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import City from './pages/City'
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import {withRouter } from './utilities/withRouter'
import { useSelector,useDispatch } from "react-redux";
import usuarioActions from "./redux/actions/usuarioActions"

const CityD = withRouter(City)


function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  useEffect(() => {
     dispatch(usuarioActions.loggearDesdeStorage(token))
  },[])
  const usuario = useSelector(store => store.usuariosReducer.usuario)
  // let mail = null
  // if(usuario.length > 0){
  //   mail = usuario
  // }

  return (
    <>
    <BrowserRouter>
    
      <NavbarHome />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cities" element={<Cities />}></Route>
        <Route path="/cities/:city" element={<CityD  />}></Route>
        {!usuario &&<Route path="/Signup" element={<SignUp />}></Route>}
        {!usuario &&<Route path="/Signin" element={<SignIn />}></Route>}
        <Route path="*" element={<Home />}></Route>
      </Routes>
      
      <Footer />

    </BrowserRouter>
    </>
  );
}

export default App;
