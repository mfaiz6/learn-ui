import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import './footer.css'

const Footer = () => {
    return (
        <div>

            <div className="fContainer">

                <div className="linksContainer">

                    <div className="brandDetails">
                        <span><FontAwesomeIcon icon={faEnvelope} /> contact@snowkashmirholidays.com</span>
                        <span><FontAwesomeIcon icon={faPhone} /> +91 7889 8656 76</span>
                        <span><FontAwesomeIcon icon={faLocationDot} /> Batmaloo, Srinagar, J&K - 190001</span>
                    </div>


                    <div className="brandDetails">
                        <img src="https://www.dukekashmirtravels.com/images/online.png" alt="" />
                    </div>


                    <div className="otherLinks">
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policies</li>
                            <li>Support</li>
                            <li>Partner with us</li>
                        </ul>
                    </div>

                    <div className="socialDetails">
                    <a href="https://www.facebook.com/snowkashmirholiday/" target="_blank" rel='noreferrer'><span><FontAwesomeIcon icon={faFacebook} /></span></a>
                        <a href="https://www.instagram.com/snowkashmirholiday/" target="_blank" rel='noreferrer'><span><FontAwesomeIcon icon={faInstagram} /></span></a>
                        <a href="https://www.twitter.com/SNOWKASHMIR" target="_blank" rel="noreferrer"><span><FontAwesomeIcon icon={faTwitter} /></span></a>
                        <a href="https://wa.me/917889865676" target="_blank" rel='noreferrer'><span><FontAwesomeIcon icon={faWhatsapp} /></span></a>
                    </div>

                </div>


                <div className="footerContent">

                    <p>&copy; 2023 Snow Kashmir Holidays India</p>

                </div>


            </div>

        </div>
    )
}

export default Footer