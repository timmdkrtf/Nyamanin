import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import logoNyamanin from "../assets/logo/2. Nyamanin Logo Utama (N).png";
import { Container, Row, Col, Nav } from "react-bootstrap";

import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

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
            <img src={logoNyamanin} className="w-25" alt="nyamanin Logo" style={{margin: "0 0 -2px 0"}} /><br/>
            <small>by PT Abdi Sarana Asri</small>
            <div className="mt-3">
              <div className="" style={{padding: "5px 0"}}>
                <a href="https://maps.app.goo.gl/j62wQTYNX8QaPhY58" className="text-white text-decoration-none" target="_blank">Jl. Aria Surialaga No. 83, Kota Bogor 16119</a>
              </div>
              <div className="d-flex align-items-center" style={{padding: "5px 0"}}>
                <BsFillTelephoneFill className="fs-5" style={{ margin:"1px 15px 0 0" }} />
                <a href="tel:+622518632170" className="text-white text-decoration-none" target="_blank">+62 251 8632 170</a>
              </div>
              <div className="d-flex align-items-center" style={{padding: "5px 0"}}>
              <BsWhatsapp className="fs-5" style={{ margin:"1px 15px 0 0" }} />
                <a href="https://api.whatsapp.com/send?phone=6281211113526" className="text-white text-decoration-none" target="_blank">+62 812 1111 3526</a>
              </div>
              <div className="d-flex align-items-center" style={{padding: "5px 0"}}>
                <BsFillEnvelopeFill className="fs-5" style={{ margin:"1px 15px 0 0" }} />
                <a href="mailto:contact@nyamanin.co.id" target="_blank" className="text-white text-decoration-none">contact@nyamanin.co.id</a>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Nav className="justify-content-center justify-content-md-end mb-3" style={{marginTop: "-4px"}}>
              <Nav.Link href="https://www.facebook.com/people/Nyamanin/61557660225538/" target="_blank" className="text-white fs-3 me-1">
                <FaFacebook />
              </Nav.Link>
              <Nav.Link href="https://www.tiktok.com/tag/nyamanin" target="_blank" className="text-white fs-3 me-1">
                <FaTiktok />
              </Nav.Link>
              <Nav.Link href="https://instagram.com/nyamanin.co.id" className="text-white fs-3 me-1" target="_blank">
                <BsInstagram />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
            <p className="text-end">© 2025 PT Abdi Sarana Asri &middot; All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
