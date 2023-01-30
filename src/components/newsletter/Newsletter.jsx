import './newsletter.css'

const Newsletter = () => {


    return (

        <>

            <div className="nLetterContainer">

                <div className="letterContent">

                    <h2 className="nLetterHeading">Subscribe to Newsletter</h2>

                    <form>

                        <input type="email" className="nLetterInput" placeholder='email' pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" required />

                        <button type='submit' className="nLetterButton">Subscribe</button>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Newsletter