import { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)



    return (
        <>
            <div className="navContainer">

                <Link to="/">
                    <div className="navLogo">
                        <img src="https://snowkashmirholidays.com/images/logo.png" alt="logo" className='logo' />
                    </div>
                </Link>

                <i className="fa-solid fa-bars toggleButton" onClick={() => setToggle(!toggle)}></i>

                <div className={toggle ? "navItemsShow" : "navItems"}>

                    <Link to="/"><div className="navItem">Home</div></Link>
                    <div className="navItem">Packages</div>
                    <div className="navItem">Blog</div>
                    <Link to="/about"><div className="navItem">About</div></Link>
                    <Link to="/contact"><div className="navItem">Contact</div></Link>
                    <div className="navItem">Signin</div>
                    <div className="navItem">Signup</div>

                    <button className='enquiryButton'>Enquire Now</button>

                </div>



            </div>
        </>
    )
}

export default Navbar