import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

                    <div className="otherLinks">
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policies</li>
                            <li>Support</li>
                            <li>Partner with us</li>
                        </ul>
                    </div>

                    <div className="otherLinks">
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policies</li>
                            <li>Support</li>
                            <li>Partner with us</li>
                        </ul>
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