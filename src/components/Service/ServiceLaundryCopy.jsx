import { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logoNyamanin from "../../assets/logo/2. Nyamanin Logo Utama (N).png";
import "@fontsource/source-sans-pro";
import BedIcon from "../../assets/icon/double-bed.png";
import SofaIcon from "../../assets/icon/couch.png";

import Slider from "react-slick";

import doc1 from "../../assets/documentation/Cover1.png";
import doc2 from "../../assets/documentation/Cover2.png";
import doc3 from "../../assets/documentation/Cover3.png";
import doc4 from "../../assets/documentation/Cover4.png";
import doc5 from "../../assets/documentation/Cover5.png";
import doc6 from "../../assets/documentation/Cover6.png";
import doc7 from "../../assets/documentation/Group 5 (1).png";
import doc8 from "../../assets/documentation/Before after sofa nyamanin.png";

import docVideo from "../../assets/documentation/doc.mp4";

import WaveElemen from "../../assets/elemen/Gelombang-top-right-cut.png";
import LiquidYellow from "../../assets/elemen/Cipratan 4-left-cut.png";

import { BsChevronDoubleDown } from "react-icons/bs";
import { BsChevronDoubleUp } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ServiceLaundryCopy() {
  const [showSofa, setShowSofa] = useState(false);
  const [showKasur, setShowKasur] = useState(false);

  const toggleSofa = () => setShowSofa(!showSofa);
  const toggleKasur = () => setShowKasur(!showKasur);

  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(sliderForRef.current);
    setNav2(sliderNavRef.current);
  }, []);

  const slides = [
    {
      type: "image",
      img: doc7,
    },
    {
      type: "video",
      src: docVideo,
    },
    {
      type: "image",
      img: doc3,
    },
    {
      type: "image",
      img: doc8,
    },
    {
      type: "image",
      img: doc5,
    },
    {
      type: "image",
      img: doc6,
    },
    {
      type: "image",
      img: doc1,
    },
    {
      type: "image",
      img: doc4,
    },
    {
      type: "image",
      img: doc2,
    },
  ];

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
    asNavFor: nav2,
    ref: sliderForRef,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const settingsNav = {
    slidesToShow: 4.34,
    slidesToScroll: 1,
    asNavFor: nav1,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    ref: sliderNavRef,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 2.35,
        },
      },
    ],
  };

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
              <span className="kasur">Kasur</span> Bersih Tanpa Beli Baru?{" "}
              <br />
              <span className="nyamanin">Nyamanin</span> aja!
            </h2>
          </div>
          <div className="title-content">
            <h6>Pilih Paket Layanan Laundry</h6>
          </div>
          <div className="content">
            <div className="card sofa">
              <img src={SofaIcon} alt="" />
              <h3>Sofa</h3>
              <p>Jasa Laundry sofa mulai dari Rp. 30.000 aja</p>
              <div>
                <div className="button-card">
                  <button className="detail-button" onClick={toggleSofa}>
                    {showSofa ? (
                        <>
                        <span className="text">Sembunyikan Detail Paket</span>
                        <BsChevronDoubleUp className="icon" />
                        </>
                    ) : (
                        <>
                        <span className="text">Lihat Detail Paket</span>
                        <BsChevronDoubleDown className="icon" />
                        </>
                    )}
                  </button>
                  <button
                    className="port-button"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Lihat Portofolio
                  </button>
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=6281211113526&text=Halo!%20boleh%20minta%20informasi%20lebih%20lanjut%20tentang%20layanan%20Laundry%20Sofa%3F">
                    <button className="pesan-button">
                        Pesan Sekarang!
                    </button>
                  </a>
                </div>
                {showSofa && (
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>Jenis Sofa</th>
                          <th>Perdudukan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Sandaran Sofa</td>
                          <td>Rp 30.000</td>
                        </tr>
                        <tr>
                          <td>Sofa Standar</td>
                          <td>Rp 70.000</td>
                        </tr>
                        <tr>
                          <td>Sofa Kulit</td>
                          <td>Rp 75.000</td>
                        </tr>
                        <tr>
                          <td>Sofa Ukir Kayu</td>
                          <td>Rp 100.000</td>
                        </tr>
                        <tr>
                          <td>Sofa Recliner</td>
                          <td>Rp 150.000</td>
                        </tr>
                        <tr>
                          <td>Sofa Bed Lipat Dua</td>
                          <td>Rp 165.000</td>
                        </tr>
                        <tr>
                          <td>Sofa Bed Lipat Tiga</td>
                          <td>Rp 315.000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
            <div className="card kasur">
              <img src={BedIcon} alt="" />
              <h3>Kasur</h3>
              <p>Jasa laundry kasur mulai dari Rp. 140.000 aja</p>
              <div>
                <div className="button-card">
                <button className="detail-button" onClick={toggleKasur}>
                    {showKasur ? (
                        <>
                        <span className="text">Sembunyikan Detail Paket</span>
                        <BsChevronDoubleUp className="icon" />
                        </>
                    ) : (
                        <>
                        <span className="text">Lihat Detail Paket</span>
                        <BsChevronDoubleDown className="icon" />
                        </>
                    )}
                </button>
                  <button
                    className="port-button"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    Lihat Portofolio
                  </button>
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=6281211113526&text=Halo!%20boleh%20minta%20informasi%20lebih%20lanjut%20tentang%20layanan%20Laundry%20Kasur%3F">
                    <button className="pesan-button">
                        Pesan Sekarang!
                    </button>
                  </a>
                </div>
                {showKasur && (
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>Kasur Standar</th>
                          <th>Atas & Samping</th>
                          <th>Full Package</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Ukuran 90x200 (XS)</td>
                          <td>140.000</td>
                          <td>210.000</td>
                        </tr>
                        <tr>
                          <td>Ukuran 120x200 (S)</td>
                          <td>180.000</td>
                          <td>270.000</td>
                        </tr>
                        <tr>
                          <td>Ukuran 160x200 (M)</td>
                          <td>220.000</td>
                          <td>330.000</td>
                        </tr>
                        <tr>
                          <td>Ukuran 180x200 (L)</td>
                          <td>260.000</td>
                          <td>390.000</td>
                        </tr>
                        <tr>
                          <td>Ukuran 200x200 (XL)</td>
                          <td>300.000</td>
                          <td>450.000</td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <thead>
                        <tr>
                          <th>Kasur Latex</th>
                          <th>Atas & Samping</th>
                          <th>Full Package</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Ukuran 90x200 (XS)</td>
                          <td>180.000</td>
                          <td>270.000</td>
                        </tr>
                        <tr>
                          <td>Ukuran 120x200 (S)</td>
                          <td>250.000</td>
                          <td>375.000</td>
                        </tr>
                        <tr>
                          <td>Ukuran 160x200 (M)</td>
                          <td>300.000</td>
                          <td>450.000</td>
                        </tr>
                        <tr>
                          <td>Ukuran 180x200 (L)</td>
                          <td>350.000</td>
                          <td>525.000</td>
                        </tr>
                        <tr>
                          <td>Ukuran 200x200 (XL)</td>
                          <td>400.000</td>
                          <td>600.000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="liquid">
        <img src={LiquidYellow} alt="" />
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Portofolio Sofa
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Slider {...settingsFor} className="slider-for">
                {slides.map((slide, index) => (
                  <div key={index} className="image-wrapper position-relative">
                    {slide.type === "image" ? (
                      <img
                        src={slide.img}
                        alt="slide"
                        className="img-fluid w-100"
                      />
                    ) : slide.type === "video" ? (
                      <video controls className="img-fluid w-100">
                        <source src={slide.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : null}
                    <div className="text-white position-absolute">
                      <h4 style={{ margin: "-40px 0 0 0" }}>
                        {slide.mainTitle}
                      </h4>
                    </div>
                  </div>
                ))}
              </Slider>

              <Slider {...settingsNav} className="slider-nav mt-4 pt-3">
                {slides.map((slide, index) => (
                  <div key={index} className="px-2">
                    {slide.type === "image" ? (
                      <img
                        src={slide.img}
                        alt="thumbnail"
                        className="img-fluid"
                      />
                    ) : slide.type === "video" ? (
                      <video className="img-fluid">
                        <source src={slide.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : null}
                  </div>
                ))}
              </Slider>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Portofolio Kasur
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Slider {...settingsFor} className="slider-for">
                {slides.map((slide, index) => (
                  <div key={index} className="image-wrapper position-relative">
                    {slide.type === "image" ? (
                      <img
                        src={slide.img}
                        alt="slide"
                        className="img-fluid w-100"
                      />
                    ) : slide.type === "video" ? (
                      <video controls className="img-fluid w-100">
                        <source src={slide.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : null}
                    <div className="text-white position-absolute">
                      <h4 style={{ margin: "-40px 0 0 0" }}>
                        {slide.mainTitle}
                      </h4>
                    </div>
                  </div>
                ))}
              </Slider>

              <Slider {...settingsNav} className="slider-nav mt-4 pt-3">
                {slides.map((slide, index) => (
                  <div key={index} className="px-2">
                    {slide.type === "image" ? (
                      <img
                        src={slide.img}
                        alt="thumbnail"
                        className="img-fluid"
                      />
                    ) : slide.type === "video" ? (
                      <video className="img-fluid">
                        <source src={slide.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : null}
                  </div>
                ))}
              </Slider>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceLaundryCopy;
