import iconCleaning from "../assets/icon/cleaning-service.png"
import iconWashingMachine from "../assets/icon/washing-machine.png"
import iconRequest from "../assets/icon/request-for-proposal.png"

function Service(){
    return(
        <div className="service" id="service">
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
                            <img src={iconWashingMachine} alt="" />
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
        </div>
    );
}

export default Service;