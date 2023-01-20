import { faBank, faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './contactComponent.css'

const ContactComponent = () => {
    return (
        <>
            <div className="contactContainer">


                <div className="contactDetailsContainer">

                    <div className="contactAddressContainer">

                        <div className="contactIcon">
                            <FontAwesomeIcon className='contactIconI' icon={faLocationDot} />
                        </div>

                        <div className="contactText">
                            Sales/head office: Batamaloo opposite Labour Office, Srinagar, J&K India, 190009
                        </div>

                    </div>

                    <div className="contactAddressContainer">

                        <div className="contactIcon">
                            <FontAwesomeIcon className='contactIconI' icon={faLocationDot} />
                        </div>

                        <div className="contactText">
                            Regd Office: 7, Ground Floor, I.Q Shopping Mall, Hyderpora Crossing, New Airport Road Srinagar, J&K, India, 190014

                        </div>

                    </div>

                    <div className="contactAddressContainer">

                        <div className="contactIcon">
                            <FontAwesomeIcon className='contactIconI' icon={faLocationDot} />
                        </div>

                        <div className="contactText">

                            Leh-Ladakh Coordinator
                            Mr Jimmy Wangchuk, +91 7889865676, +91 9596217479
                            #10 Mahabodhi Complex, Changspa Road, Leh Ladakh, India 194101

                        </div>

                    </div>

                    <div className="contactAddressContainer">

                        <div className="contactIcon">
                            <FontAwesomeIcon className='contactIconI' icon={faLocationDot} />
                        </div>

                        <div className="contactText">

                            Katra, Jammu Coordinator
                            Mr Raja, +91-7889865676 / +91-9596217479

                            Shop No. 15, Jammu Road, Near National Guest House, Katra, Jammu and Kashmir 182301

                        </div>

                    </div>

                    <div className="contactAddressContainer">

                        <div className="contactIcon">
                            <FontAwesomeIcon className='contactIconI' icon={faPhone} />
                        </div>

                        <div className="contactText">
                            +91 788 98 65 676
                            +91 959 62 17 479
                        </div>

                    </div>

                    <div className="contactAddressContainer">

                        <div className="contactIcon">
                            <FontAwesomeIcon className='contactIconI' icon={faMailBulk} />
                        </div>

                        <div className="contactText">
                            contact@snowkashmirholidays.com
                        </div>

                    </div>

                    <div className="contactAddressContainer">

                        <div className="contactIcon">
                            <FontAwesomeIcon className='contactIconI' icon={faBank} />
                        </div>

                        <div className="contactText">
                            Snow Kashmir Holidays (India)
                            Account No: 0249010100002696

                            IFSC code: JAKA 0 CANDLE
                            Bank: J&K Bank
                            Branch: Nawakadal, Srinagar
                        </div>

                    </div>

                </div>
                

                <hr />


                <div className="contactFormContainer">

                    <input type="text" placeholder='name' />
                    <input type="email" placeholder='email' />
                    <input type="text" placeholder='subject' />
                    <input type="text" placeholder='message'></input>
                    <button>Send</button>

                </div>

            </div>
        </>
    )
}

export default ContactComponent