import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import PackageHero from './components/packageHero/PackageHero';
import VideoHero from './components/videoHero/VideoHero';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoHero />
      <PackageHero />
    </>
  );
}

export default App;
