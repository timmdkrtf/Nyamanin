import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { CiGlobe } from "react-icons/ci";
import doc1 from "../assets/documentation/Cover1.png";
import doc2 from "../assets/documentation/Cover2.png";
import doc3 from "../assets/documentation/Cover3.png";
import doc4 from "../assets/documentation/Cover4.png";
import doc5 from "../assets/documentation/Cover5.png";
import doc6 from "../assets/documentation/Cover6.png";

import rectangle from "../assets/elemen/Rectangle 5 (1).svg"

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
      mainTitle: "",
      img: doc1,
    },
    {
      mainTitle: "",
      img: doc2,
    },
    {
      mainTitle: "",
      img: doc3,
    },
    {
      mainTitle: "",
      img: doc4,
    },
    {
      mainTitle: "",
      img: doc5,
    },
    {
      mainTitle: "",
      img: doc6,
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
        breakpoint: 576, // Pada layar dengan lebar 768px atau kurang
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
        breakpoint: 768, // Pada layar dengan lebar 768px atau kurang
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400, // Pada layar dengan lebar 768px atau kurang
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
          Tingkatkan kebersihan dan kerapihan di lingkungan rumahmu demi kesehatan yang optimal. Join us now!
          </p>
        </div>
        <div className="col-12 col-md-4 col-sm-12" style={{margin:"0 0 0 auto", textAlign:"end", alignSelf:"center"}}>
          <a href="https://instagram.com/nyamanin.co.id" target="_blank"><button className="btn">
            <img src={rectangle} alt="" />
            Join us Now!
          </button></a>
        </div>
      </div>

      <Slider {...settingsFor} className="slider-for">
        {slides.map((slide, index) => (
          <div key={index} className="image-wrapper position-relative">
            <img src={slide.img} alt="slide" className="img-fluid rounded w-100" />
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
            <img src={slide.img} alt="thumbnail" className="img-fluid rounded" />
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
}

export default Documentation;
