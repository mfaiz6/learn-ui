import AboutContent from "../components/aboutContent/AboutContent"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import Newsletter from "../components/newsletter/Newsletter"

const About = () => {
  return (
    <>
        <Navbar />
        <AboutContent />
        <Newsletter />
        <Footer />
    </>
  )
}

export default About