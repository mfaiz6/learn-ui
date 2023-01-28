// import { faBed, faBinoculars, faLocationDot, faStar, faStarHalfAlt, faTaxi, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons'
import * as icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './topRatedPackHero.css'
import useFetch from '../../hooks/useFetch'

const TopRatedPackHero = () => {

    const { data, loading, error } = useFetch("/packages/featured")


    return (
        <>

            <h2 className='TopRatedPackHeader'>Top Rated Packages on Snow Kashmir</h2>


            <div className="topRatedPackContainer">

                {loading ? ("Loading please wait...") : (
                    data.map(item => (

                        <div className="topRatedPackCard" key={item._id}>

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
                                <Link to="/packages/:id"><h3 className='topRatedPackCardHead'>{item.name}</h3></Link>

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
                                <h4 className="topRatedPackCardNPrice">{item.cheapestPrice} <span>per person</span></h4>
                            </div>

                        </div>

                    ))
                )}



            </div>
        </>
    )
}

export default TopRatedPackHero




// <div className="topRatedPackContainer">
//                 <div className="topRatedPackCard">

//                     <div className="topRatedPackCardImg">
//                         <img src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/0kclx0s22i4skhf8xd92d2lqglaj_LADAKH%20%282%29.png" alt="" />
//                     </div>

//                     <div className="topRatedPackCardDuration">
//                         <p>
//                             <FontAwesomeIcon icon={faLocationDot} />
//                             <span> Leh | 6D/5N</span>
//                         </p>
//                     </div>

//                     <div className="topRatedPackCardText">
//                         <Link to="/packages/:id"><h3 className='topRatedPackCardHead'>Name</h3></Link>

//                         <p className="topRatedPackCardAdds">
//                             <FontAwesomeIcon icon={faUtensils} className="addIcons" />
//                             <FontAwesomeIcon icon={faBed} className="addIcons" />
//                             <FontAwesomeIcon icon={faTaxi} className="addIcons" />
//                             <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
//                             <FontAwesomeIcon icon={faWifi} className="addIcons" />
//                         </p>

//                         <p className="topRatedPackCardRating">
//                             <FontAwesomeIcon icon={faStar} className="star" />
//                             <FontAwesomeIcon icon={faStar} className="star" />
//                             <FontAwesomeIcon icon={faStar} className="star" />
//                             <FontAwesomeIcon icon={faStar} className="star" />
//                             <FontAwesomeIcon icon={faStar} className="star" />
//                         </p>
//                         <h4 className="topRatedPackCardOPrice">₹21999</h4>
//                         <h4 className="topRatedPackCardNPrice">₹17999 <span>per person</span></h4>
//                     </div>

//                 </div>


//                 <div className="topRatedPackCard">

//                     <div className="topRatedPackCardImg">
//                         <img src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/jv997441dvnrzs4p4y5dkc3dntrv_1615985269_shutterstock_1455828107_%281%29.jpg.webp" alt="" />
//                     </div>

//                     <div className="topRatedPackCardDuration">
//                         <p>
//                             <FontAwesomeIcon icon={faLocationDot} />
//                             <span> Leh | 6D/5N</span>
//                         </p>
//                     </div>

//                     <div className="topRatedPackCardText">
//                         <Link to="/packages/:id"><h3 className='topRatedPackCardHead'>Thrilling Tour</h3></Link>

//                         <p className="topRatedPackCardAdds">
//                             <FontAwesomeIcon icon={faUtensils} className="addIcons" />
//                             <FontAwesomeIcon icon={faBed} className="addIcons" />
//                             <FontAwesomeIcon icon={faTaxi} className="addIcons" />
//                             <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
//                             <FontAwesomeIcon icon={faWifi} className="addIcons" />
//                         </p>

//                         <p className="topRatedPackCardRating">
//                             <FontAwesomeIcon icon={faStar} className="star" />
//                             <FontAwesomeIcon icon={faStar} className="star" />
//                             <FontAwesomeIcon icon={faStar} className="star" />
//                             <FontAwesomeIcon icon={faStarHalfAlt} className="star" />
//                         </p>
//                         <h4 className="topRatedPackCardOPrice">₹21999</h4>
//                         <h4 className="topRatedPackCardNPrice">₹17999 <span>per person</span></h4>
//                     </div>

//                 </div>

//                 <div className="topRatedPackCard">

//                     <div className="topRatedPackCardImg">
//                         <img src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/w9poxafpk1yo337nsswvtf9gv3hr_2%20%286%29.jpg" alt="" />
//                     </div>

//                     <div className="topRatedPackCardDuration">
//                         <p>
//                             <FontAwesomeIcon icon={faLocationDot} />
//                             <span> Leh | 6D/5N</span>
//                         </p>
//                     </div>

//                     <div className="topRatedPackCardText">
//                         <Link to="/packages/:id"><h3 className='topRatedPackCardHead'>Thrilling Tour</h3></Link>
//                         <p className="topRatedPackCardAdds">
//                             <FontAwesomeIcon icon={faUtensils} className="addIcons" />
//                             <FontAwesomeIcon icon={faBed} className="addIcons" />
//                             <FontAwesomeIcon icon={faTaxi} className="addIcons" />
//                             <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
//                             <FontAwesomeIcon icon={faWifi} className="addIcons" />
//                         </p>
//                         <p className="topRatedPackCardRating">
//                             <FontAwesomeIcon icon={faStar} className="star" />
//                             <FontAwesomeIcon icon={faStar} className="star" />
//                             <FontAwesomeIcon icon={faStar} className="star" />
//                         </p>
//                         <h4 className="topRatedPackCardOPrice">₹21999</h4>
//                         <h4 className="topRatedPackCardNPrice">₹17999 <span>per person</span></h4>
//                     </div>

//                 </div>

//                 <div className="topRatedPackCard">

//                     <div className="topRatedPackCardImg">
//                         <img src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/749sclgvs7qjknke5sbz9mbbdabh_shutterstock_1621541545.jpg" alt="" />
//                     </div>

//                     <div className="topRatedPackCardDuration">
//                         <p>
//                             <FontAwesomeIcon icon={faLocationDot} />
//                             <span> Leh | 6D/5N</span>
//                         </p>
//                     </div>

//                     <div className="topRatedPackCardText">
//                         <Link to="/packages/:id"><h3 className='topRatedPackCardHead'>Thrilling Tour</h3></Link>
//                         <p className="topRatedPackCardAdds">
//                             <FontAwesomeIcon icon={faBed} className="addIcons" />
//                             <FontAwesomeIcon icon={faTaxi} className="addIcons" />
//                             <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
//                             <FontAwesomeIcon icon={faWifi} className="addIcons" />
//                         </p>
//                         <p className="topRatedPackCardRating">
//                             <FontAwesomeIcon icon={faStar} className="star" />
//                             <FontAwesomeIcon icon={faStar} className="star" />
//                             <FontAwesomeIcon icon={faStar} className="star" />
//                         </p>
//                         <h4 className="topRatedPackCardOPrice">₹21999</h4>
//                         <h4 className="topRatedPackCardNPrice">₹17999 <span>per person</span></h4>
//                     </div>

//                 </div>


//             </div>