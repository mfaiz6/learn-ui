import './newsletter.css'

const Newsletter = () => {
    return (
        <>

            <div className="nLetterContainer">

                <div className="letterContent">

                    <h2 className="nLetterHeading">Subscribe to Newsletter</h2>

                    <input type="email" className="nLetterInput" placeholder='email' />

                    <button className="nLetterButton">Subscribe</button>

                </div>

            </div>

        </>
    )
}

export default Newsletter