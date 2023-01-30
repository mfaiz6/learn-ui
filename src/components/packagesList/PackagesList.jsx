import { faBed, faBinoculars, faStar, faTaxi, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './packagesList.css'
import useFetch from '../../hooks/useFetch'

const PackagesList = () => {

    const { loading, data, error } = useFetch("/packages/")

    return (
        <>

            {/* <div className="diffLocations">
                <span className='all active'>All</span>
                <span className='kashmir'>Kashmir</span>
                <span className='ladakh'>Ladakh</span>
                <span className='jammu'>Jammu</span>
            </div> */}

            <div className="packagesListContainer">

                {loading ? ("Loading please wait...") : (
                    data.map(item => (
                        <div className="packageListItem" key={item._id}>

                            <div className="packageDetails">


                                <img src={item.image} alt={item.name} />

                                <div className="packageDetailsText">

                                    <h2>{item.name}</h2>

                                    <h3>Free Airport Taxi</h3>

                                    <p className="packageDetailsTextRating">
                                        <FontAwesomeIcon icon={faStar} className="star" />
                                        <FontAwesomeIcon icon={faStar} className="star" />
                                        <FontAwesomeIcon icon={faStar} className="star" />
                                        <FontAwesomeIcon icon={faStar} className="star" />
                                        <FontAwesomeIcon icon={faStar} className="star" />
                                    </p>

                                    <h4>{item.duration}</h4>


                                </div>

                                <div className="packageDetailsText ">

                                    <p className='packageDetailsTextIcons'>
                                        <FontAwesomeIcon icon={faBed} className="addIcons" />
                                        <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                        <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                        <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                        <FontAwesomeIcon icon={faWifi} className="addIcons" />
                                    </p>

                                </div>


                            </div>

                            <div className="packageListItemPrice">
                                <h5>₹{item.cheapestPrice}</h5>
                                <h6>excludes taxes</h6>
                                <Link to={`/packages/${item._id}`}><button className='pacakgeListItemButton'>Know More</button></Link>
                            </div>


                        </div>
                    ))
                )}






            </div>

        </>
    )
}

export default PackagesList




// <div className="packageListItem">

// <div className="packageDetails">


//     <img src="https://img.traveltriangle.com/attachments/pictures/846409/original/pony-ride-1.jpg?tr=w-583,h-406" alt="" />

//     <div className="packageDetailsText">

//         <h2>Express Kashmir Package</h2>

//         <h3>Free Airport Taxi</h3>

//         <p className="packageDetailsTextRating">
//             <FontAwesomeIcon icon={faStar} className="star" />
//             <FontAwesomeIcon icon={faStar} className="star" />
//             <FontAwesomeIcon icon={faStar} className="star" />
//             <FontAwesomeIcon icon={faStar} className="star" />
//             <FontAwesomeIcon icon={faStar} className="star" />
//         </p>

//         <h4>4 Days - 5 Nights</h4>


//     </div>

//     <div className="packageDetailsText ">

//         <p className='packageDetailsTextIcons'>
//             <FontAwesomeIcon icon={faUtensils} className="addIcons" />
//             <FontAwesomeIcon icon={faBed} className="addIcons" />
//             <FontAwesomeIcon icon={faTaxi} className="addIcons" />
//             <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
//             <FontAwesomeIcon icon={faWifi} className="addIcons" />
//         </p>

//     </div>


// </div>

// <div className="packageListItemPrice">
//     <h5>₹34000</h5>
//     <h6>excludes taxes</h6>
//     <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
// </div>


// </div>