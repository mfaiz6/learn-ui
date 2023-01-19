import { useState } from 'react'
import './navbar.css'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

 

    return (
        <>
            <div className="navContainer">


                <div className="navLogo">
                    <img src="https://snowkashmirholidays.com/images/logo.png" alt="logo" className='logo' />
                </div>

                <i className="fa-solid fa-bars toggleButton" onClick={() => setToggle(!toggle)}></i>

                <div className={toggle ? "navItemsShow" : "navItems"}>

                    <div className="navItem">Home</div>
                    <div className="navItem">Packages</div>
                    <div className="navItem">Blog</div>
                    <div className="navItem">About Us</div>
                    <div className="navItem">Contact Us</div>
                    <div className="navItem">Sign in/up</div>

                    <button className='enquiryButton'>Enquire Now</button>

                </div>

                

            </div>
        </>
    )
}

export default Navbar