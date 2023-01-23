import { faBed, faBinoculars, faCab, faCoffee, faHotel, faPlane, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './packageComponent.css'

const PackageComponent = () => {

    return (
        <>
            <div className="packageContainer">

                {/* Column 1 */}
                <div className="packageHeader">

                    <div className="packageHeaderDetails">
                        <h1>Express Kashmir</h1>
                        <h2>4 Days 5 Nights</h2>
                        <h3>₹8900 <span>per person</span></h3>
                        {/* <p>Includes:</p> */}
                        <div className="packageHeaderDetailsIcons">
                            <abbr title="Hotel"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faHotel} /></abbr>
                            <abbr title="Tickets"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faPlane} /></abbr>
                            <abbr title="Vehicle"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faCab} /></abbr>
                            <abbr title="Meals"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faUtensils} /></abbr>
                            <abbr title="Sight-seeing"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faBinoculars} /></abbr>
                        </div>
                        <button className="bookNowButton">Book Now!</button>
                    </div>


                    <div className="packageHeaderImage">
                        <img src="https://images.pexels.com/photos/12750077/pexels-photo-12750077.jpeg" alt="" />
                    </div>

                </div>


                {/* Column 2 */}
                <div className="packageDayWiseDetails">

                    <h2>Itinerary (Day wise)</h2>

                    <div className="packageDayWiseDetailsDay">
                        <img src="https://news.thrillophilia.com/content/images/size/w2000/2022/07/Artboard-8-1.jpg" alt="" />
                        <div className="packageDayWiseDetailsDayText">
                            <h3>Day 1Srinagar (Houseboat)</h3>
                            <p>Tour Guests will arrive at Srinagar Airport as per their Scheduled flight. Upon arrival they will meet Veena World tour manager at the airport and proceed to hotel. Today we experience a stay at the floating boats, famously known as Kashmiri Houseboats which are designed with the local interiors.</p>
                            <div className="packageDayWiseDetailsDayIcons">
                                <abbr title="Hotel"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faHotel} /></abbr>
                                <abbr title="Tickets"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faBed} /></abbr>
                                <abbr title="Vehicle"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faCoffee} /></abbr>
                            </div>
                        </div>

                    </div>

                    <div className="packageDayWiseDetailsDay">
                        <img src="https://news.thrillophilia.com/content/images/size/w2000/2022/07/Artboard-8-1.jpg" alt="" />
                        <div className="packageDayWiseDetailsDayText">
                            <h3>Day 1Srinagar (Houseboat)</h3>
                            <p>Tour Guests will arrive at Srinagar Airport as per their Scheduled flight. Upon arrival they will meet Veena World tour manager at the airport and proceed to hotel. Today we experience a stay at the floating boats, famously known as Kashmiri Houseboats which are designed with the local interiors.</p>
                            <div className="packageDayWiseDetailsDayIcons">
                                <abbr title="Hotel"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faHotel} /></abbr>
                                <abbr title="Tickets"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faBed} /></abbr>
                                <abbr title="Vehicle"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faCoffee} /></abbr>
                            </div>
                        </div>
                    </div>

                    <div className="packageDayWiseDetailsDay">
                        <img src="https://news.thrillophilia.com/content/images/size/w2000/2022/07/Artboard-8-1.jpg" alt="" />
                        <div className="packageDayWiseDetailsDayText">
                            <h3>Day 1Srinagar (Houseboat)</h3>
                            <p>Tour Guests will arrive at Srinagar Airport as per their Scheduled flight. Upon arrival they will meet Veena World tour manager at the airport and proceed to hotel. Today we experience a stay at the floating boats, famously known as Kashmiri Houseboats which are designed with the local interiors.</p>
                            <div className="packageDayWiseDetailsDayIcons">
                                <abbr title="Hotel"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faHotel} /></abbr>
                                <abbr title="Tickets"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faBed} /></abbr>
                                <abbr title="Vehicle"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faCoffee} /></abbr>
                            </div>
                        </div>
                    </div>

                    <div className="packageDayWiseDetailsDay">
                        <img src="https://news.thrillophilia.com/content/images/size/w2000/2022/07/Artboard-8-1.jpg" alt="" />
                        <div className="packageDayWiseDetailsDayText">
                            <h3>Day 1Srinagar (Houseboat)</h3>
                            <p>Tour Guests will arrive at Srinagar Airport as per their Scheduled flight. Upon arrival they will meet Veena World tour manager at the airport and proceed to hotel. Today we experience a stay at the floating boats, famously known as Kashmiri Houseboats which are designed with the local interiors.</p>
                            <div className="packageDayWiseDetailsDayIcons">
                                <abbr title="Hotel"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faHotel} /></abbr>
                                <abbr title="Tickets"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faBed} /></abbr>
                                <abbr title="Vehicle"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faCoffee} /></abbr>
                            </div>
                        </div>
                    </div>


                </div>


                {/* Column 3 */}
                <div className="packageAccomodationDetails">

                    <div class="dcf-overflow-x-auto" tabindex="0">
                        <table class="dcf-table dcf-table-bordered dcf-table-striped dcf-w-100%">
                            <caption>Accomodation Details</caption>
                            <thead>
                                <tr>
                                    <th class="dcf-txt-center" scope="col">Destination</th>
                                    <th class="dcf-txt-center" scope="col">Hotel</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="dcf-txt-center" scope="row">Srinagar</th>
                                    <td class="dcf-txt-center" data-label="Hotel">Samci Riviera/Similar</td>
                                </tr>
                                <tr>
                                    <th class="dcf-txt-center" scope="row">Gulmarg</th>
                                    <td class="dcf-txt-center" data-label="Hotel">Alpine Ridge/Similar</td>
                                </tr>
                                <tr>
                                    <th class="dcf-txt-center" scope="row">Pahalgham</th>
                                    <td class="dcf-txt-center" data-label="Hotel">Hotel Paristan Resorts/Similar</td>
                                </tr>
                                <tr>
                                    <th class="dcf-txt-center" scope="row">Houseboat</th>
                                    <td class="dcf-txt-center" data-label="Hotel">Deluxe Houseboat Dal Lake</td>
                                </tr>
                            </tbody>
                        </table></div>


                </div>

                {/* Column 4 */}
                <div className="packageInclusionExclusion">
                    <div class="dcf-overflow-x-auto" tabindex="0">
                        <table class="dcf-table dcf-table-bordered dcf-table-striped dcf-w-100%">
                            <caption>Kindly Note</caption>
                            <thead>
                                <tr>
                                    <th class="dcf-txt-center" scope="col">Inclusions</th>
                                    <th class="dcf-txt-center" scope="col">Exclusions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="dcf-txt-center" scope="row">Well come drink at Arrival </th>
                                    <td class="dcf-txt-center" data-label="Exclusions">Government of India Goods &amp; Services Tax (GST) of 5%</td>
                                </tr>
                                <tr>
                                    <th class="dcf-txt-center" scope="row">Romantic Shikara Ride in Dal Lake </th>
                                    <td class="dcf-txt-center" data-label="Exclusions">Any increase in airfare, airport tax, fuel surcharge etc.</td>
                                </tr>
                                <tr>
                                    <th class="dcf-txt-center" scope="row">Honeymoon Cake on the arrival Day </th>
                                    <td class="dcf-txt-center" data-label="Exclusions">Personal expense like porterage, laundry, telephone, shopping, alcoholic beverages, extra mineral water or food which is not a part of group’s set meal menu</td>
                                </tr>
                                <tr>
                                    <th class="dcf-txt-center" scope="row">Candle Light Dinner in Dal Lake </th>
                                    <td class="dcf-txt-center" data-label="Exclusions">Oxygen Cylinders,Extra delay due to Road Blocks, snowfall, land slides.</td>
                                </tr>
                                <tr>
                                    <th class="dcf-txt-center" scope="row">Room Decoration on the Arrival Day </th>
                                    <td class="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th class="dcf-txt-center" scope="row">1Nights in Hotel/Resort at Srinagar </th>
                                    <td class="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th class="dcf-txt-center" scope="row">1 Night in Hotel/Resort at Pahalgam.. </th>
                                    <td class="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th class="dcf-txt-center" scope="row">1 Night in Hotel/Resort at Gulmarg.. </th>
                                    <td class="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th class="dcf-txt-center" scope="row">1 Night in Luxurious Deluxe/super deluxe Houseboat in the Lake</th>
                                    <td class="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th class="dcf-txt-center" scope="row"></th>
                                    <td class="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th class="dcf-txt-center" scope="row"></th>
                                    <td class="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th class="dcf-txt-center" scope="row"></th>
                                    <td class="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th class="dcf-txt-center" scope="row"></th>
                                    <td class="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                            </tbody>
                        </table></div>

                </div>


            </div>
        </>
    )
}

export default PackageComponent