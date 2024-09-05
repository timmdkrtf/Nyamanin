import brushGreen from "../assets/elemen/Union.png"
import crewBG from "../assets/crew/bg-left-crew.png"

import { CiSettings } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

function Home(){
    return (
        <div className="home" id="home">
            <div className="container">
                <div className="content-home">
                    <div className="text-left">
                        <h1><span className="kebersihan">Kebersihan</span> Berkualitas tanpa batas? <span className="nyamanin"><img src={brushGreen} alt="" />Nyamanin</span> aja</h1>
                        <p>Tim profesional kami siap mengatasi noda dan kotoran membandel dengan peralatan terbaik. Hemat waktu, rasakan ketenangan, dan nikmati kebersihan yang tak terlupakan. Pelayanan kami, kepuasan Anda.</p>
                        <div className="d-flex">
                            <a href="#about"><button>Baca Selengkapnya</button></a>
                            <a href="#" className="arrow">Kontak Sekarang</a>
                        </div>
                    </div>
                    <div className="bg-right">
                        <img src={crewBG} alt="" />
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