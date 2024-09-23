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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import elemenCipratan from "../../assets/elemen/Cipratan 2.png";

function ServiceLaundry() {
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
              <span className="kasur">Kasur</span> Bersih Tanpa Beli <span className="baru">Baru?</span>{" "}
              <div className="container-nyamanin"><span className="nyamanin">Nyamanin</span> aja! </div>
            </h2>
          </div>
          <div className="sofa">
            <div className="title-content">
              <h6>Paket Layanan Laundry Sofa</h6>
            </div>
            <a href="#order">
              <div className="card sofa">
                <img src={SofaIcon} alt="" />
                <h3>Sofa</h3>
              </div>
            </a>
            <div className="portfolio sofa">
              <div className="container">
                <h2 className="fw-bold">
                  Portofolio <span>Pengerjaan</span>
                </h2>

                <Slider {...settingsFor} className="slider-for">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className="image-wrapper position-relative"
                    >
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
            </div>
          </div>
          <div className="kasur">
            <div className="title-content">
              <h6>Paket Layanan Laundry Kasur</h6>
            </div>
            <a href="#order">
              <div className="card kasur">
                <img src={BedIcon} alt="" />
                <h3>Kasur</h3>
              </div>
            </a>
            <div className="portfolio kasur">
              <div className="container">
                <h2 className="fw-bold">
                  Portofolio <span>Pengerjaan</span>
                </h2>

                <Slider {...settingsFor} className="slider-for">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className="image-wrapper position-relative"
                    >
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
                    Yuk, <span className="booking">Booking</span> Sekarang
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
