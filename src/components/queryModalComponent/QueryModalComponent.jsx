import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './queryModalComponent.css'

const QueryModalComponent = () => {
    return (
        <>

            <div className="queryModalContainer">

                <div className="queryForm">

                    <h1 className='queryFormHeading'>Get Free Quotes</h1>

                    <Link to="/"><FontAwesomeIcon icon={faX} className="queryModalcloseButton" /></Link>

                    <div className="queryInputContainer">
                        <label >Going to</label>
                        <input type="text" />
                    </div>

                    <div className="queryInputContainer">
                        <label >Leaving from</label>
                        <input type="text" />
                    </div>

                    <div className="queryInputContainer">
                        <label >Departure Date</label>
                        <input type="date" />
                    </div>

                    <div className="queryInputContainer">
                        <label >days</label>
                        <input type="number" />
                    </div>

                    <div className="queryInputContainer">
                        <label >Name</label>
                        <input type="text" />
                    </div>

                    <div className="queryInputContainer">
                        <label >Email</label>
                        <input type="email" />
                    </div>

                    <div className="queryInputContainer">
                        <label >Contact</label>
                        <input type="tel" />
                    </div>

                    <input type="submit" value="Send" className='querySubmitButton' />

                </div>

            </div>

        </>
    )
}

export default QueryModalComponent