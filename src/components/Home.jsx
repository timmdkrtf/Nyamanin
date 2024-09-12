import brushGreen from "../assets/elemen/Union.png"
import crewBGRevisi from "../assets/crew/bg-left-crew-revisi (2).png"
import rectangle from "../assets/elemen/Rectangle 5 (1).svg"

import { CiSettings } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

import '@fontsource/source-sans-pro';

import waveTop from "../assets/elemen/Gelombang-top-cut.png"

function Home(){
    return (
        <div className="home" id="home">
            <div className="waveTop">
                <img src={waveTop} alt="" />
            </div>
            <div className="container">
                <div className="content-home">
                    <div className="text-left">
                        <h1><span className="kebersihan">Cleaning</span> Service kotor? <span className="nyamanin"><img src={brushGreen} alt="" />Nyamanin</span> aja</h1>
                        <p>Tim profesional kami siap mengatasi noda dan kotoran membandel dengan peralatan terbaik. Hemat waktu, rasakan ketenangan, dan nikmati kebersihan yang tak terlupakan. Pelayanan kami, kepuasan Anda.</p>
                        <div className="d-flex">
                            <a href="#about"><button>Baca Selengkapnya</button></a>
                            <a href="https://api.whatsapp.com/send?phone=6281211113526" target="_blank" className="arrow">Kontak Sekarang</a>
                        </div>
                    </div>
                    <div className="bg-right">
                        <img src={crewBGRevisi} alt="" />
                        <div className="blur-parent">
                            <div className="blur-component leftTop">
                                <CiStar className="fs-2" />
                                <div>
                                    <p>Team</p>
                                    <b>Professional</b>
                                </div>
                            </div>
                            <div className="blur-component leftBottom">
                                <CiSettings className="fs-2"/>
                                <div>
                                    <p>Always on Stanby</p>
                                    <b>Responsive</b>
                                </div>
                            </div>
                            <div className="blur-component rightBottom">
                                <CiSearch className="fs-2"/>
                                <div>
                                    <p>Cleaning</p>
                                    <b>Detail</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;