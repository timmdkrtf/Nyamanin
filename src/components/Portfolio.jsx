import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { CiGlobe } from "react-icons/ci";
import doc1 from "../assets/documentation/Cover1.png";
import doc2 from "../assets/documentation/Cover2.png";
import doc3 from "../assets/documentation/Cover3.png";
import doc4 from "../assets/documentation/Cover4.png";
import doc5 from "../assets/documentation/Cover5.png";
import doc6 from "../assets/documentation/Cover6.png";
import doc7 from "../assets/documentation/Group 5 (1).png";

import docVideo from "../assets/documentation/doc.mp4"

import elemenCipratan from "../assets/elemen/Cipratan 2.png"
import leafTwist from "../assets/elemen/Monstera 6.png"
import leafSingle from "../assets/elemen/Monstera 1.png"
import elementCipratanSide from "../assets/elemen/Cipratan 4-cut.png"

import '@fontsource/source-sans-pro';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Documentation() {
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
      img: doc4,
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
      }
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
      }
    ],
  };

  return (
    <section
      id="portfolio"
      className="bg-light text-dark min-vh-100 d-flex flex-column align-items-center justify-content-center p-3"
    >
      <div className="container">
        <div className="row w-100 py-5">
          <div className="col-12 col-md-4 col-sm-12">
            <h2 className="fw-bold">Portofolio <span>Pengerjaan</span></h2>
          </div>
          <div className="col-12 col-md-4 col-sm-12">
            <p>
              Tingkatkan kebersihan dan kerapihan di lingkungan rumahmu demi kesehatan yang optimal. Lihat lebih lengkap hasil pengerjaan kami!
            </p>
          </div>
          <div className="col-12 col-md-4 col-sm-12" style={{margin:"0 0 0 auto", textAlign:"end", alignSelf:"center"}}>
            <div className="img-bg-button">
              <img src={elemenCipratan} alt="" />
            </div>
            <a href="https://instagram.com/nyamanin.co.id" target="_blank"><button>
              Klik untuk selengkapnya!
            </button></a>
          </div>
        </div>

        <Slider {...settingsFor} className="slider-for">
          {slides.map((slide, index) => (
            <div key={index} className="image-wrapper position-relative">
              {slide.type === "image" ? (
                <img src={slide.img} alt="slide" className="img-fluid w-100" />
              ) : slide.type === "video" ? (
                <video controls className="img-fluid w-100">
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
              <CiGlobe className="position-absolute top-0 start-0 m-4 bg-white p-2 rounded-circle" size={48} />
              <div className="text-white position-absolute">
                <h4 style={{margin:"-40px 0 0 0"}}>{slide.mainTitle}</h4>
              </div>
            </div>
          ))}
        </Slider>

        <Slider {...settingsNav} className="slider-nav mt-4 pt-3">
          {slides.map((slide, index) => (
            <div key={index} className="px-2">
              {slide.type === "image" ? (
                <img src={slide.img} alt="thumbnail" className="img-fluid" />
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

      <div className="element-left-bottom">
        <img className="leaf-twist" src={leafTwist} alt="" />
        <img className="leaf-single" src={leafSingle} alt="" />
      </div>
      <div className="element-right-bottom">
        <img src={elementCipratanSide} alt="" />
      </div>
    </section>
  );
}

export default Documentation;
