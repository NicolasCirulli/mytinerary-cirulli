import { BsTwitter,BsInstagram,BsFacebook } from "react-icons/bs";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <>
    
      <div className="footer_main">

      <div className="footer_iconos">
            <Link to="/">       <BsTwitter />               </Link>
            <Link to="/">       <BsInstagram/>         </Link>
            <Link to="/">       <BsFacebook />        </Link>
        </div>
      


        <div>
          <h2 className="footer_titulo">MyTinerary</h2>
        </div>
        <div className="footer_links">
          <Link to="/">Home</Link>
          <Link to="/cities">Cities</Link>
        </div>
      </div>
      <div className="copyright"><h3 className="text-center ">Copyright © - MYTINERARY All Rights Reserved.</h3></div>
    </>
  );
};

export default Footer;
