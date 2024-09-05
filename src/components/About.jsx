import logoNyamanin from "../assets/logo/1. Nyamanin Logo Utama (P).png"
import brush2brown from "../assets/elemen/path1923 (1).png"

function About(){
    return(
        <div className="about" id="about">
            <div className="container">
                <div className="content">
                    <div className="logo-nyamanin">
                        <img src={logoNyamanin} alt="" />
                    </div>
                    <div className="text-content">
                        <h3><img src={brush2brown} alt="" />Tentang Kami</h3>
                        <p>
                            Nyamanin adalah layanan jasa kebersihan
                            berkualitas persembahan dari PT Abdi Sarana Asri.
                        </p>
                        <p>
                            Kami terdiri dari tim pencinta kebersihan yang
                            dilengkapi peralatan terbaik di bidang kebersihan.
                            Kami hadir untuk membersihkan noda dan
                            kotoran membandel yang meresahkan Anda.
                            Kehadiran kami akan menghemat waktu dan
                            membuat Anda tenang.
                        </p>
                        <p>
                            Ketelitian kami dalam kebersihan akan
                            menghadirkan kenyamanan untuk Anda. Sesuai
                            dengan jargon kami: Kebersihan tak terlupakan.
                            Pelayanan tanpa batas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;