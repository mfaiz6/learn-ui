import { Link } from 'react-router-dom'
import './hero.css'

const Hero = () => {
  return (
    <>

      <div className='heroContainer'>

        <div className="heroText">

          <h1 className="heroHeading">Explore Heaven On Earth!</h1>
          
          <Link to="/packages"><button className="heroButton">See Packages</button></Link>

        </div>

      </div>

    </>
  )
}

export default Hero