import { BsTwitter,BsInstagram,BsFacebook } from "react-icons/bs";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <>
    
      <div className="footer_main">
      <div className="footer_iconos">
            <Link to="/"><BsTwitter />     </Link>
            <Link to="/"><BsInstagram/> </Link>
            <Link to="/"><BsFacebook /></Link>
        </div>
      


        <div>
          <h2 className="footer_titulo">MYTINERARY</h2>
        </div>
        <div className="footer_links">
          <Link to="/">home</Link>
          <Link to="/cities">cities</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
