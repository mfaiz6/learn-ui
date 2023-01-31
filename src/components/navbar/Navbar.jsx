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
                    <Link to="/packages"><div className="navItem">Packages</div></Link>
                    <Link to="/blog"><div className="navItem">Blog</div></Link>
                    <Link to="/about"><div className="navItem">About</div></Link>
                    <Link to="/contact"><div className="navItem">Contact</div></Link>
                    {/* <Link to="/signin"><div className="navItem">Signin</div></Link> */}
                    {/* <Link to="/signup"><div className="navItem">Signup</div></Link> */}

                    <Link to="/queryModal"><button className='enquiryButton' >Enquire Now</button></Link>

                </div>

            </div>

        </>
    )
}

export default Navbar