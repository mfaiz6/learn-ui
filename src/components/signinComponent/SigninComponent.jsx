import './signinComponent.css'

const SigninComponent = () => {
    return (
        <>

            <div className="signinContainer">

                <div className="signinForm">

                    <input type="email" placeholder='email' />

                    <input type="password" placeholder='password' />

                    <span className='signinFg'>Forgot password?</span>

                    <button className='signInButton'>Sign in</button>

                </div>

            </div>

        </>
    )
}

export default SigninComponent