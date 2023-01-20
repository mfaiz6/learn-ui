import AboutContent from "../components/aboutContent/AboutContent"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import PackageHero from "../components/packageHero/PackageHero"

const About = () => {
  return (
    <>
      <Navbar />
      <AboutContent />
      <PackageHero />
      <Footer />
    </>
  )
}

export default About