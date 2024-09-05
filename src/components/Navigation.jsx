import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoNyamanin from "../assets/logo/1. Nyamanin Logo Utama (P).png"

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#"><img src={logoNyamanin} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Beranda</Nav.Link>
            <Nav.Link href="#about">Tentang Kami</Nav.Link>
            <Nav.Link href="#service">Layanan</Nav.Link>
            <Nav.Link href="#portfolio">Dokumentasi</Nav.Link>
            <Nav.Link href="#contact">Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;