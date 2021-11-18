import { BsTwitter,BsInstagram,BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer_main">
      <div className="footer_links">
          <a href="/">home</a>
          <a href="/cities">cities</a>
        </div>


        <div>
          <h2 className="footer_titulo">MYTINERARY</h2>
        </div>

        <div className="footer_iconos">
            <a href="/"><BsTwitter />     </a>
            <a href="/"><BsInstagram/> </a>
            <a href="/"><BsFacebook /></a>
        </div>

      </div>
    </>
  );
};

export default Footer;
