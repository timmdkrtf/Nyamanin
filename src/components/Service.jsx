import iconCleaning from "../assets/icon/cleaning-service.png"
import iconCouch from "../assets/icon/couch.png"
import iconRequest from "../assets/icon/request-for-proposal.png"

import yellowWave from "../assets/elemen/green-wave.png"
import liquidShape from "../assets/elemen/Cipratan 1.png"

import '@fontsource/source-sans-pro';

function Service(){
    return(
        <div className="service" id="service">
            <div className="cipratan">
                <img src={liquidShape} alt="" />
            </div>
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h2>Layanan Kami</h2>
                    </div>
                    <div className="content-flex">
                        <div className="card">
                            <img src={iconCleaning} alt="" />
                            <h3>Housekeeping</h3>
                            <p>General Cleaning, Toilet Cleaning</p>
                        </div>
                        <div className="card">
                            <img src={iconCouch} alt="" />
                            <h3>Laundry</h3>
                            <p>Cuci berbagai jenis kasur, sofa, kursi, karpet, dan perlengkapan bayi</p>
                        </div>
                        <div className="card">
                            <img src={iconRequest} alt="" />
                            <h3>Lainnya</h3>
                            <p>Kami juga dapat memberikan layanan kebersihan lainnya sesuai permintaan pelanggan</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wave-bottom">
                <img src={yellowWave} alt="" />
            </div>
        </div>
    );
}

export default Service;