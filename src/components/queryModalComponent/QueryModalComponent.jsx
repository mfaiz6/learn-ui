import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './queryModalComponent.css'
import axios from '../../axios.js'


const QueryModalComponent = () => {

    const [details, setDetails] = useState({
        explore: undefined,
        dateOfTravel: undefined,
        adults: undefined,
        children: undefined,
        name: undefined,
        email: undefined,
        contact: undefined
    })

    const handleChange = (e) => {
        setDetails((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("/quoteQuery/", details)
            const btn = document.getElementById("quoteQuerySendBtn")
            document.getElementById("quoteQuerySendBtn").value = "Sent!"
            document.getElementById("quoteQuerySendBtn").style.backgroundColor = "#00337C"
            document.getElementById("quoteQuerySendBtn").style.color = "#fff"
        } catch (error) {
            document.getElementById("quoteQuerySendBtn").value = "Please try again!"
            document.getElementById("quoteQuerySendBtn").style.backgroundColor = "red"
            document.getElementById("quoteQuerySendBtn").style.color = "white"
        }
    }


    return (
        <>

            <div className="queryModalContainer">

                <div className="queryForm">

                    <h1 className='queryFormHeading'>Get Free Quotes</h1>

                    <Link to="/"><FontAwesomeIcon icon={faX} className="queryModalcloseButton" /></Link>

                    <form className='queryForm' onSubmit={handleSubmit}>
                        <div className="queryInputContainer">
                            <label >Where you would like to explore</label>
                            <input type="text" id='explore' onChange={handleChange} required />
                        </div>

                        <div className="queryInputContainer">
                            <label >Date of Travel</label>
                            <input type="date" id='dateOfTravel' onChange={handleChange} required />
                        </div>

                        <div className="queryInputContainer">
                            <label >No. of Adults</label>
                            <input type="number" id='adults' onChange={handleChange} required />
                        </div>

                        <div className="queryInputContainer">
                            <label >No. of Children</label>
                            <input type="number" id='children' onChange={handleChange} required />
                        </div>

                        <div className="queryInputContainer">
                            <label >Name</label>
                            <input type="text" id='name' onChange={handleChange} />
                        </div>

                        <div className="queryInputContainer">
                            <label >Email</label>
                            <input type="email" id='email' onChange={handleChange} pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" required />
                        </div>

                        <div className="queryInputContainer">
                            <label >Contact</label>
                            <input type="tel" id='contact' onChange={handleChange} required />
                        </div>

                        <input type="submit" value="Send" className='querySubmitButton' id='quoteQuerySendBtn' />
                    </form>

                </div>

            </div>

        </>
    )
}

export default QueryModalComponent