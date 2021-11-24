import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer_main bg-oscuro">
        <div className="footer_iconos">
          <Link to="/">
            {" "}
            <BsTwitter className="texto-naranja fs-3" />{" "}
          </Link>
          <Link to="/">
            {" "}
            <BsInstagram  className="texto-naranja fs-3"/>{" "}
          </Link>
          <Link to="/">
            {" "}
            <BsFacebook className="texto-naranja fs-3" />{" "}
          </Link>
        </div>

        <div>
          <h2 className="footer_titulo"><span className="texto-naranja">MyTinerary</span></h2>
        </div>
        <div className="footer_links">
          <Link to="/" className="texto-naranja fs-3">Home</Link>
          <Link to="/cities" className="texto-naranja fs-3">Cities</Link>
        </div>
      </div>
      <div className="copyright">
        <h3 className="text-center ">
          Copyright © - MYTINERARY All Rights Reserved.
        </h3>
      </div>
    </>
  );
};

export default Footer;
