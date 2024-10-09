import { FaMapMarked} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import logoNyamanin from "../assets/logo/2. Nyamanin Logo Utama (N).png";
import { MdOutlinePhone } from "react-icons/md";
import { Container, Row, Col, Nav } from "react-bootstrap";

import leafRight from "../assets/elemen/Monstera 4.png"

import '@fontsource/source-sans-pro';

const Footer = () => {
  return (
    <footer id="contact" className="text-white py-4">
      <div className='leaf-right-bottom'>
        <img src={leafRight} alt="" />
      </div>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={6} className="py-4">
            <img src={logoNyamanin} className="w-25" alt="nyamanin Logo" /><br/>
            <small style={{opacity:"0.7", fontSize:"11px"}}>by PT Abdi Sarana Asri</small>
            <div className="mt-3" style={{opacity:"0.8"}}>
              <div className="mb-2">
                Jl. Aria Surialaga No.83, Kota Bogor 16119
              </div>
              <div className="d-flex align-items-center mb-2">
                <MdOutlinePhone className="me-2" />
                <a href="" className="text-white text-decoration-none">+62 251 8632 170</a>
              </div>
              <div className="d-flex align-items-center">
                <BsInstagram className="me-2" />
                <a href="https://instagram.com/nyamanin.co.id" target="_blank" className="text-white text-decoration-none">nyamanin.co.id</a>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-center text-md-end" style={{opacity:"0.8"}}>
            <Nav className="justify-content-center justify-content-md-end mb-3">
              <Nav.Link target="_blank" href="https://maps.app.goo.gl/j62wQTYNX8QaPhY58" className="text-white fs-3 me-1">
                <FaMapMarked />
              </Nav.Link>
              <Nav.Link target="_blank" href="https://instagram.com/nyamanin.co.id" className="text-white fs-3 me-1">
                <FaSquareInstagram />
              </Nav.Link>
              <Nav.Link target="_blank" href="https://api.whatsapp.com/send?phone=6281211113526" className="text-white fs-3">
                <IoLogoWhatsapp />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" style={{opacity:"0.8"}}>
            <p className="mb-0">© 2024 PT Abdi Sarana Asri &middot; All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
