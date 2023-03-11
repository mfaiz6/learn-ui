// import { faBed, faBinoculars, faLocationDot, faStar, faStarHalfAlt, faTaxi, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons'
import * as icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './topRatedPackHero.css'
// import useFetch from '../../hooks/useFetch'
import { packages } from '../../data/packages'

const TopRatedPackHero = () => {

    // const { data, loading, error } = useFetch("/packages/featured")
    const data = packages
    
    return (
        <>

            <h2 className='TopRatedPackHeader'>Top Rated Packages on Snow Kashmir Holidays</h2>


            <div className="topRatedPackContainer">

                {
                    data.slice(0, 4).map(item => (

                        <div className="topRatedPackCard" key={item.id}>

                            <div className="topRatedPackCardImg">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div className="topRatedPackCardDuration">
                                <p>
                                    <FontAwesomeIcon icon={icons.faLocationDot} />
                                    <span>{item.duration}</span>
                                </p>
                            </div>

                            <div className="topRatedPackCardText">
                                <Link to={`/packages/${item.id}`}><h3 className='topRatedPackCardHead'>{item.name}</h3></Link>

                                {/* <p className="topRatedPackCardAdds">
                                    <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                    <FontAwesomeIcon icon={faBed} className="addIcons" />
                                    <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                    <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                    <FontAwesomeIcon icon={faWifi} className="addIcons" />
                                </p> */}

                                {/* <p className="topRatedPackCardAdds">
                                    {(item.benefits.map(benefit => (
                                        <FontAwesomeIcon icon={benefit} className="addIcons" />
                                        )))}
                                </p> */}

                               

                                <p className="topRatedPackCardRating">
                                    <FontAwesomeIcon icon={icons.faStar} className="star" />
                                    <FontAwesomeIcon icon={icons.faStar} className="star" />
                                    <FontAwesomeIcon icon={icons.faStar} className="star" />
                                    <FontAwesomeIcon icon={icons.faStar} className="star" />
                                    <FontAwesomeIcon icon={icons.faStar} className="star" />
                                </p>
                                <h4 className="topRatedPackCardOPrice">{item.originalPrice}</h4>
                                <h4 className="topRatedPackCardNPrice">₹{item.cheapestAdultPrice} <span>per person</span></h4>
                            </div>

                        </div>

                    ))
                }



            </div>
        </>
    )
}

export default TopRatedPackHero