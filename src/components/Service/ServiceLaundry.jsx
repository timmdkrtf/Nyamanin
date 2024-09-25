import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logoNyamanin from "../../assets/logo/2. Nyamanin Logo Utama (N).png";
import "@fontsource/source-sans-pro";

import bfs1 from "../../assets/documentation/Before-after-sofa1.png";
import bfs2 from "../../assets/documentation/Before-after-sofa2.png";
import bfs3 from "../../assets/documentation/Before-after-sofa3.png";
import bfk1 from "../../assets/documentation/Before-after-kasur1.png";
import bfk2 from "../../assets/documentation/Before-after-kasur2.png";
import bfk3 from "../../assets/documentation/Before-after-kasur3.png";


import WaveElemen from "../../assets/elemen/Gelombang-top-right-cut.png";
import LiquidYellow from "../../assets/elemen/Cipratan 4-left-cut.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ServiceLaundry() {

  return (
    <div className="service-laundry">
      <Navbar collapseOnSelect expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">
            <img src={logoNyamanin} alt="" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="wave">
        <img src={WaveElemen} alt="" />
      </div>
      <div className="container">
        <div className="packet-laundry">
          <div className="title">
            <h2>
              Mau <span className="sofa">Sofa</span> dan{" "}
              <span className="kasur">Kasur</span> Bersih Tanpa Beli <span className="baru">Baru?</span>{" "}
              <div className="container-nyamanin"><span className="nyamanin">Nyamanin</span> aja! </div>
            </h2>
          </div>
          <div className="sofa">
            <div className="portfolio sofa">
              <div className="container">
                <h2 className="fw-bold">
                  Portofolio Pengerjaan <span>Sofa</span>
                </h2>
                <div className="portfolio-img">
                  <img src={bfs1} alt="" />
                  <img src={bfs2} alt="" />
                  <img src={bfs3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="kasur">
            <div className="portfolio kasur">
              <div className="container">
                <h2 className="fw-bold">
                  Portofolio Pengerjaan <span>Kasur</span>
                </h2>
                <div className="portfolio-img">
                  <img src={bfk1} alt="" />
                  <img src={bfk2} alt="" />
                  <img src={bfk3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="order" id="order">
            <div className="text-button">
              <p>
                <span>Mulai dari Rp 30.000</span> aja kamu udah bisa dapatkan
                layanan berkualitas dari Nyamanin
              </p>
            </div>
            <div className="button-order">
              <a
                href="https://api.whatsapp.com/send?phone=6281211113526&text=Halo!%20boleh%20minta%20informasi%20lebih%20lanjut%20tentang%20layanan%20Laundry%20ini%3F"
                target="_blank"
              >
                <button>
                  <span className="shadow"></span>
                  <span className="edge"></span>
                  <span className="front text">
                    Yuk, Tanya-tanya Dulu aja, Boleh Banget, Kok!
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="liquid">
        <img src={LiquidYellow} alt="" />
      </div>
    </div>
  );
}

export default ServiceLaundry;
