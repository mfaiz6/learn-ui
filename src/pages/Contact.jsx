import ContactComponent from "../components/contactComponent/ContactComponent"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import PackageHero from "../components/packageHero/PackageHero"

const Contact = () => {
    return (
        <>
            <Navbar />
            <ContactComponent />
            <PackageHero />
            <Footer />
        </>
    )
}

export default Contact