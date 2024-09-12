import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import apostrof from "../assets/logo/apostrof.png";
import bahama from "../assets/logo/bahama.png";
import habatour from "../assets/logo/habatour.png";
import halakah from "../assets/logo/halakah.png";
import kronika from "../assets/logo/kronika.png";
import mdkrtf from "../assets/logo/mdkrtf.png";
import realtour from "../assets/logo/realtour.png";
import AYP from "../assets/logo/1. AYP Logo Primary (P).png";
import TMC from "../assets/logo/1. TMC Logo Primary (P).png";
import TMF from "../assets/logo/1. TMF Logo Primary (P).png";

import waveTop from "../assets/elemen/Gelombang-top-cut.png"
import leafRight from "../assets/elemen/Monstera 4.png"
import '@fontsource/source-sans-pro';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import {useRef, useEffect} from 'react';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';

const Client = () => {
    SwiperCore.use([Autoplay, FreeMode, Navigation]);

    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        
        if (swiperInstance) {
            const nextButton = document.querySelector('.swiper-button-next');
            const prevButton = document.querySelector('.swiper-button-prev');

            const stopAutoplay = () => {
                swiperInstance.autoplay.stop();
                swiperInstance.autoplay.start();
            };

            nextButton.addEventListener('click', stopAutoplay);
            prevButton.addEventListener('click', stopAutoplay);

            // Cleanup
            return () => {
                nextButton.removeEventListener('click', stopAutoplay);
                prevButton.removeEventListener('click', stopAutoplay);
            };
        }
    }, []);
    return (
        <>
        <section className="partners max-w-2xl mx-auto py-5 my-5">
            <div className='wave-top'>
                <img src={waveTop} alt="" />
            </div>
            <h1 className="text-3xl text-center font-bold">Klien Kami</h1>
            <Swiper
                loop={true}
                freeMode={true}
                navigation={true}
                autoplay={{
                    delay: 800,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={1000}
                slidesPerView="3"
                spaceBetween={42}
                breakpoints={{
                    280: {
                        slidesPerView: 2,
                        centeredSlides: true,

                    },
                    380: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        centeredSlides: true,
                    },
                    576: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                      centeredSlides: true,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                className='items-center justify-center'>
                <SwiperSlide className="apostrof"><img src={apostrof} alt="apostrof" /></SwiperSlide>
                <SwiperSlide className="bahana"><img src={bahama} alt="bahana" /></SwiperSlide>
                <SwiperSlide className="AYP"><img src={AYP} alt="AYP" /></SwiperSlide>
                <SwiperSlide className="habatour"><img src={habatour} alt="habatour" /></SwiperSlide>
                <SwiperSlide className="halakah"><img src={halakah} alt="halakah" /></SwiperSlide>
                <SwiperSlide className="TMC"><img src={TMC} alt="TMC" /></SwiperSlide>
                <SwiperSlide className="kronika"><img src={kronika} alt="kronika" /></SwiperSlide>
                <SwiperSlide className="nyamanin"><img src={mdkrtf} alt="mdkrtf" /></SwiperSlide>
                <SwiperSlide className="realtour"><img src={realtour} alt="realtour" /></SwiperSlide>
                <SwiperSlide className="TMF"><img src={TMF} alt="TMF" /></SwiperSlide>
            </Swiper>
            <div className='leaf-right-bottom'>
                  <img src={leafRight} alt="" />
            </div>
        </section>
        </>
    );
};

export default Client;
