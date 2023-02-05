import { useState } from 'react'
import './signinComponent.css'
import axios from '../../axios.js'

const SigninComponent = () => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    })

    const handleChange = (e) => {
        setCredentials((prev) => (
            { ...prev, [e.target.id]: e.target.value }
        ))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
    }


    return (
        <>

            <div className="signinForm">

                <div className='form'>

                    <h1 className='signinTitle'>Sign In</h1>



                    <div className="inputContainer">
                        <input type="email" id='email' className='input' onChange={handleChange} placeholder='a' required />
                        <label htmlFor="" className='label'>Email</label>
                    </div>

                    <div className="inputContainer">
                        <input type="password" id="password" className='input' onChange={handleChange} placeholder='a' required />
                        <label htmlFor="" className='label'>Password</label>
                    </div>

                    <input type="submit" value="Sign In" onClick={handleSubmit} className='signInButton' />

                </div>

            </div>

        </>
    )
}

export default SigninComponent