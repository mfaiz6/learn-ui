import { faBed, faBinoculars, faStar, faTaxi, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './packagesList.css'

const PackagesList = () => {
    return (
        <>

            <div className="diffLocations">
                <span className='all active'>All</span>
                <span className='kashmir'>Kashmir</span>
                <span className='ladakh'>Ladakh</span>
                <span className='jammu'>Jammu</span>
            </div>

            <div className="packagesListContainer">


                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846409/original/pony-ride-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>


                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>



                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>


                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>



                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>



                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>



                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>



                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>



                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>


                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>


                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>


                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>


                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>


                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>

                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>

                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>


                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>


                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>


                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>


                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>


                <div className="packageListItem">

                    <div className="packageDetails">


                        <img src="https://img.traveltriangle.com/attachments/pictures/846410/original/Night-at-Srinagar-houseboat-1.jpg?tr=w-583,h-406" alt="" />

                        <div className="packageDetailsText">

                            <h2>Express Kashmir Package</h2>

                            <h3>Free Airport Taxi</h3>

                            <p className="packageDetailsTextAdds">
                                <FontAwesomeIcon icon={faUtensils} className="addIcons" />
                                <FontAwesomeIcon icon={faBed} className="addIcons" />
                                <FontAwesomeIcon icon={faTaxi} className="addIcons" />
                                <FontAwesomeIcon icon={faBinoculars} className="addIcons" />
                                <FontAwesomeIcon icon={faWifi} className="addIcons" />
                            </p>

                            <p className="packageDetailsTextRating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </p>

                            <h4>4 Days - 5 Nights</h4>

                        </div>

                        <div className="packageDetailsText extra">

                            <ul>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                                <li>- Lorem ipsum dolor sit amet.</li>
                            </ul>

                        </div>


                    </div>

                    <div className="packageListItemPrice">
                        <h5>₹34000</h5>
                        <h6>excludes taxes</h6>
                        <Link to="/packages/:id"><button className='pacakgeListItemButton'>Know More</button></Link>
                    </div>


                </div>

                










            </div>

        </>
    )
}

export default PackagesList