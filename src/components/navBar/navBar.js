import { Col } from "rsuite";
// import Logo from "../../assets/imgs/Logo.png";
import "./navBar.scss";

const NavBar = () => {
  return (
    <nav className="sticky-section">
      <Col className="navCol" smHidden xsHidden>
        <div className="box-brand">
          <a href="/#">
            {/* <img src={Logo} alt="Bolluk Logo" className="Logo" /> */}
            Logo
          </a>
          <a href="#nosotros" className="top">
            Quiénes somos
          </a>
          <a href="#servicios" className="top">
            Nuestros servicios
          </a>
          <a href="#contacto" className="contact">
            <button className="btn">Contacto</button>
          </a>
        </div>
      </Col> 
       {/*<Col className="navCol" xxlHidden xlHidden lgHidden mdHidden>
        <div className="box-brand1">
          <div className="Logo">
          <a href="/#">
            {/* <img src={Logo} alt="Bolluk Logo" className="Logo" /> 
            Logo
          </a>
          </div>
          <div className="Menus">
          <a href="#nosotros" className="top">
            Quiénes somos
          </a>
          <a href="#servicios" className="top">
            Nuestros servicios
          </a>
          <a href="#contacto" className="top">
            <button className="btn">Contacto</button>
          </a>
          </div>
        </div>
      </Col> */}
    </nav>
  );
};

export default NavBar;
