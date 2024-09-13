import Navbar from "../components/Navigation"
import Home from "../components/Home"
import About from "../components/About"
import Service from "../components/Service"
import Portfolio from "../components/Portfolio"
import Clients from "../components/Clients"
import Order from "../components/Order"
import Footer from "../components/Footer"

export default function Landing(){
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Service />
            <Portfolio />
            <Clients />
            <Order />
            <Footer />
        </div>
    );
}