import '@fontsource/source-sans-pro';

function Order(){
    return(
        <div className="order">
            <div className='container'>
                <div className='button-order'>
                    <a href="https://api.whatsapp.com/send?phone=6281211113526" target='_blank'>
                    <button>
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front text">Yuk, Nyamanin Rumah Kamu Tanpa Ribet!
                        </span>
                    </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Order;