import { faBank, faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from '../../axios.js'
// import axios from 'axios'
import { useState } from 'react'
import './contactComponent.css'

const ContactComponent = () => {

    const [details, setDetails] = useState({
        name: undefined,
        email: undefined,
        subject: undefined,
        message: undefined
    })

    const handleChange = (e) => {
        setDetails((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("/query/", details)
            document.getElementById("querySendBtn").innerHTML = "Sent!"
            document.getElementById("querySendBtn").style.backgroundColor = "#00337C"
            document.getElementById("querySendBtn").style.color = "#fff"
        } catch (error) {
            document.getElementById("querySendBtn").innerHTML = "Please try again!"
            document.getElementById("querySendBtn").style.backgroundColor = "red"
            document.getElementById("querySendBtn").style.color = "white"

        }
    }




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


                <div>
                    <form className='contactFormContainer' onSubmit={handleSubmit}>
                        <input type="text" id='name' required placeholder='name' onChange={handleChange} />
                        <input type="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" id='email' required placeholder='email' onChange={handleChange} />
                        <input type="text" id='subject' required placeholder='subject' onChange={handleChange} />
                        <input type="text" id='message' required placeholder='message' onChange={handleChange}></input>
                        <button type='submit' id="querySendBtn">Send</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default ContactComponent