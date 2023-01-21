import './signupComponent.css'

const SignupComponent = () => {
    return (
        <>

            <div className="signupForm">

                <div className='form'>

                    <h1 className='signUpTitle'>Sign Up</h1>

                    <div className="inputContainer">
                        <input type="text" className='input' placeholder='a' />
                        <label htmlFor="" className='label'>Name</label>
                    </div>

                    <div className="inputContainer">
                        <input type="email" className='input' placeholder='a' />
                        <label htmlFor="" className='label'>Email</label>
                    </div>

                    <div className="inputContainer">
                        <input type="password" className='input' placeholder='a' />
                        <label htmlFor="" className='label'>Password</label>
                    </div>

                    <input type="submit" value="Sign Up" className='signUpButton' />

                </div>

            </div>

        </>
    )
}

export default SignupComponent