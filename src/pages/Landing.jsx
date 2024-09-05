import Navbar from "../components/Navigation"
import Home from "../components/Home"
import About from "../components/About"
import Service from "../components/Service"
import Documentation from "../components/Documentation"
import Clients from "../components/Clients"
import Footer from "../components/Footer"

export default function Landing(){
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Service />
            <Documentation />
            <Clients />
            <Footer />
        </div>
    );
}