import Blogs from '../components/blogs/Blogs';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import TopRatedPackHero from '../components/topRatedPackHero/TopRatedPackHero';

const Blog = () => {
  return (
    <div>
        <Navbar />
        <Blogs />
        <TopRatedPackHero />
        <Footer />
    </div>
  )
}

export default Blog