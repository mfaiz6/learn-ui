import { faLocationDot, faStar, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './topRatedHotelHero.css'

const TopRatedHotelHero = () => {
    return (
        <>

            <h2 className='TopRatedPackHeader'>Top Rated Hotels on Snow Kashmir</h2>


            <div className="topRatedPackContainer">

                <div className="topRatedPackCard">

                    <div className="topRatedPackCardImg">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/17174263.jpg?k=1264e752c4c2fc6f22a74f3a795972a85945b5c92de8b0a1fb7699a2b73159b5&o=&hp=1" alt="" />
                    </div>

                    <div className="topRatedPackCardDuration">
                        <p>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span> Srinagar</span>
                        </p>
                    </div>

                    <div className="topRatedPackCardText">
                        <h3 className='topRatedPackCardHead'>Vivanta Dal View</h3>

                        <p className="topRatedPackCardAdds">
                            <FontAwesomeIcon icon={faWifi} className="addIcon" />
                        </p>

                        <p className="topRatedPackCardRating">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </p>
                        <h4 className="topRatedPackCardOPrice">₹21999</h4>
                        <h4 className="topRatedPackCardNPrice">₹20999</h4>
                    </div>

                </div>


                <div className="topRatedPackCard">

                    <div className="topRatedPackCardImg">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/42588530.jpg?k=844bd86690fadeedf63fa28295fd725772701e4cd5d3ac325a2166071f2a93b7&o=&hp=1" alt="" />
                    </div>

                    <div className="topRatedPackCardDuration">
                        <p>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span> Srinagar</span>
                        </p>
                    </div>

                    <div className="topRatedPackCardText">
                        <h3 className='topRatedPackCardHead'>Vivanta Dal View</h3>

                        <p className="topRatedPackCardAdds">
                            <FontAwesomeIcon icon={faWifi} className="addIcon" />
                        </p>
                        <p className="topRatedPackCardRating">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </p>
                        <h4 className="topRatedPackCardOPrice">₹21999</h4>
                        <h4 className="topRatedPackCardNPrice">₹20999</h4>
                    </div>

                </div>



                <div className="topRatedPackCard">

                    <div className="topRatedPackCardImg">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/42589479.jpg?k=a6e09e93818462cd51bf97f1ec38c535c8ebc86b27c245b59002a657bb20d5c6&o=&hp=1" alt="" />
                    </div>

                    <div className="topRatedPackCardDuration">
                        <p>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span> Srinagar</span>
                        </p>
                    </div>

                    <div className="topRatedPackCardText">
                        <h3 className='topRatedPackCardHead'>Vivanta Dal View</h3>

                        <p className="topRatedPackCardAdds">
                            <FontAwesomeIcon icon={faWifi} className="addIcon" />
                        </p>
                        <p className="topRatedPackCardRating">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </p>
                        <h4 className="topRatedPackCardOPrice">₹21999</h4>
                        <h4 className="topRatedPackCardNPrice">₹20999</h4>
                    </div>

                </div>



                <div className="topRatedPackCard">

                    <div className="topRatedPackCardImg">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/43443285.jpg?k=73b684a9f8ab6d58576aa4c60d873901a7c102a0f8605370ee4795bad0b96c44&o=&hp=1" alt="" />
                    </div>

                    <div className="topRatedPackCardDuration">
                        <p>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span> Srinagar</span>
                        </p>
                    </div>

                    <div className="topRatedPackCardText">
                        <h3 className='topRatedPackCardHead'>Vivanta Dal View</h3>

                        <p className="topRatedPackCardAdds">
                            <FontAwesomeIcon icon={faWifi} className="addIcon" />
                        </p>
                        <p className="topRatedPackCardRating">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </p>
                        <h4 className="topRatedPackCardOPrice">₹21999</h4>
                        <h4 className="topRatedPackCardNPrice">₹20999</h4>
                    </div>

                </div>






            </div>
        </>
    )
}

export default TopRatedHotelHero