import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import Navbar from '../components/navbar/Navbar';
import Newsletter from '../components/newsletter/Newsletter';
import PackageHero from '../components/packageHero/PackageHero';
import TopRatedHotelHero from '../components/topRatedHotelHero/TopRatedHotelHero';
import TopRatedPackHero from '../components/topRatedPackHero/TopRatedPackHero';
import VideoHero from '../components/videoHero/VideoHero';


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <TopRatedHotelHero />
            <VideoHero />
            <PackageHero />
            <TopRatedPackHero />
            <Newsletter />
            <TopRatedHotelHero />
            <Footer />
        </>
    )
}

export default Home