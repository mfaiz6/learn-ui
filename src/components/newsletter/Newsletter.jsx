import axios from 'axios'
import { useState } from 'react'
import './newsletter.css'

const Newsletter = () => {

    const [email, setEmail] = useState("")

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("/newsLetter/", {
                "email": email
            })
            document.getElementById('newsLetterSuccess').innerHTML = "Subscribed!"


        } catch (error) {
            document.getElementById('newsLetterSuccess').innerHTML = "Already there!"

        }

    }


    return (

        <>

            <div className="nLetterContainer">

                <div className="letterContent">

                    <h2 className="nLetterHeading">Subscribe to Newsletter</h2>

                    <form onSubmit={handleSubmit}>

                        <input type="email" className="nLetterInput" placeholder='email' pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" required onChange={handleChange} />

                        <button type='submit' className="nLetterButton" id='newsLetterSuccess' >Subscribe</button>

                    </form>

                </div>

            </div>

        </>
    )
}

export default Newsletter