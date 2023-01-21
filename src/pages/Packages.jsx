import Navbar from '../components/navbar/Navbar'
import TopRatedHotelHero from '../components/topRatedHotelHero/TopRatedHotelHero'
import Footer from '../components/footer/Footer'
import PackagesList from '../components/packagesList/PackagesList'

const Packages = () => {
  return (
    <div>
        <Navbar />
        <PackagesList />
        <TopRatedHotelHero />
        <Footer />
    </div>
  )
}

export default Packages