import './signinComponent.css'

const SigninComponent = () => {
    return (
        <>

            <div className="signinForm">

                <div className='form'>

                    <h1 className='signinTitle'>Sign In</h1>

                    

                    <div className="inputContainer">
                        <input type="email" className='input' placeholder='a' />
                        <label htmlFor="" className='label'>Email</label>
                    </div>

                    <div className="inputContainer">
                        <input type="password" className='input' placeholder='a' />
                        <label htmlFor="" className='label'>Password</label>
                    </div>

                    <input type="submit" value="Sign In" className='signInButton' />

                </div>

            </div>

        </>
    )
}

export default SigninComponent