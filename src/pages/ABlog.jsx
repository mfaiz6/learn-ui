import BlogComponent from "../components/blogComponent/BlogComponent"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
// import TopRatedPackHero from '../components/topRatedPackHero/TopRatedPackHero'


const ABlog = () => {
    return (
        <>
            <Navbar />
            <BlogComponent />
            {/* <TopRatedPackHero /> */}
            <Footer />
        </>
    )
}

export default ABlog