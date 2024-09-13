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
                        <a className="card" target="_blank" href="https://api.whatsapp.com/send?phone=6281211113526&text=Halo!%20boleh%20minta%20informasi%20lebih%20lanjut%20tentang%20layanan%20Housekeeping%3F">
                            <img src={iconCleaning} alt="" />
                            <h3>Housekeeping</h3>
                            <p>General Cleaning, Deep Cleaning, dan Toilet Cleaning</p>
                        </a>
                        <a className="card" target="_blank" href="https://api.whatsapp.com/send?phone=6281211113526&text=Halo!%20boleh%20minta%20informasi%20lebih%20lanjut%20tentang%20layanan%20Laundry%3F">
                            <img src={iconCouch} alt="" />
                            <h3>Laundry</h3>
                            <p>Cuci berbagai jenis kasur, sofa, kursi, karpet, dan perlengkapan bayi</p>
                        </a>
                        <a className="card" target="_blank" href="https://api.whatsapp.com/send?phone=6281211113526&text=Halo!%20boleh%20minta%20informasi%20lebih%20lanjut%20tentang%20Pelayanan%20lainnya%3F">
                            <img src={iconRequest} alt="" />
                            <h3>Lainnya</h3>
                            <p>Kami juga dapat memberikan layanan kebersihan lainnya sesuai permintaan pelanggan</p>
                        </a>
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