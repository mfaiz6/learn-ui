import './videoHero.css'
import video from './pexels-imad-clicks-10760711.mp4'
import { Link } from 'react-router-dom'

const VideoHero = () => {
  return (
    <div>
        <div className="videoHeroContainer">

            <div className="videoContainer">
            <video src={video} type="video/mp4" controls autoPlay loop muted></video>
            </div>

            <div className="videoHeroText">

                <h2 className="videoHeroHeading">Lovely Kashmir</h2>
                <p className="videoHeroSubtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, nesciunt pariatur dolores omnis ullam harum quisquam facere necessitatibus et! Alias, veritatis ratione?</p>

                <Link to="/queryModal"><button className="videoHeroButton">Enquire Now</button></Link>

            </div>

        </div>
    </div>
  )
}

export default VideoHero