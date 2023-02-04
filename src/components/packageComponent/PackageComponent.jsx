import { library } from '@fortawesome/fontawesome-svg-core'
import { faBed as hotel } from '@fortawesome/free-solid-svg-icons'
import { faPlane as ticket } from '@fortawesome/free-solid-svg-icons'
// import { faBed, faBinoculars, faCab, faCoffee, faHotel, faPlane, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './packageComponent.css'
import axios from '../../axios.js'

const PackageComponent = () => {
    library.add(hotel, ticket)

    const location = useLocation()
    const id = location.pathname.split("/")[2]

    const { data, loading, error } = useFetch(`/packages/package/${id}`)

    const [value, setValue] = useState("0")

    const [childrenValue, setChildrenValue] = useState("0")


    const [finalValue, setFinalValue] = useState(0)
    const [finalChildValue, setFinalChildValue] = useState(0)

    const initPayment = (data) => {
        const options = {
            key: "rzp_test_QeQmUpvqg2ojI7",
            amount: data.amount,
            currency: data.currency,
            name: "test package",
            description: "test transaction",
            image: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const { data } = await axios.post("/payment/verify", response)
                    alert(data.message)
                } catch (error) {
                    console.log(error)
                }
            },
            theme: {
                color: "#FFD800",
            },
        }
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }


    const handlePayment = async (e) => {
        e.preventDefault()
        try {
            const finalPrice = finalValue
            const finalChildPrice = finalChildValue
            const productId = id
            const quantity = value
            const childValue = childrenValue
            const check = await axios.post("/payment/validatePrice", { finalPrice, finalChildPrice, productId, quantity, childValue })
            if (check) {
                const { data } = await axios.post("/payment/orders", { amount: finalPrice + finalChildPrice })
                console.log(data)
                initPayment(data.data)
            }
        } catch (error) {
            alert(error.response.data);
        }
      
    }



    return (
        <>
            <div className="packageContainer">

                {/* Column 1 */}
                <div className="packageHeader">

                    <div className="packageHeaderDetails">
                        <h1>{data.name}</h1>
                        <h2>{data.duration}</h2>
                        <h3 id='cheapestPrice'>₹{data.cheapestAdultPrice} <span>per person</span></h3>
                        <h3 id='cheapestPrice'>₹{data.childPrice} <span>per child (5-12 years old)</span></h3>
                        {/* <p>Includes:</p> */}
                        {/* 
                        <div className="packageHeaderDetailsIcons">
                            <abbr title="Hotel"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faHotel} /></abbr>
                            <abbr title="Tickets"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faPlane} /></abbr>
                            <abbr title="Vehicle"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faCab} /></abbr>
                            <abbr title="Meals"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faUtensils} /></abbr>
                            <abbr title="Sight-seeing"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faBinoculars} /></abbr>
                        </div> */}

                        <div className="packageHeaderDetailsIcons">
                            {Array.isArray(data) ? ("Please wait") : data.benefits.map((benefit, index) => (
                                <abbr title={benefit}><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={benefit} key={index} /></abbr>
                            ))}
                        </div>

                        <div className="packageHeaderDetailsPersonsCount">
                            <form onSubmit={handlePayment} className='packageHeaderDetailsPersonsCount'>
                                <label>Number of Adults:</label>
                                <input type="number" id='totalPersons' value={value} min="1" onChange={(e) => { setValue(e.target.value); setFinalValue(data.cheapestAdultPrice * e.target.value) }} required />

                                <label>Number of Children(5-12 years):</label>
                                <input type="number" id="" min="0" value={childrenValue} onChange={(e) => { setChildrenValue(e.target.value); setFinalChildValue(data.childPrice * e.target.value) }} required />

                                <h5>Total ₹<span id="totalAmount">{finalValue + finalChildValue}</span></h5>
                                <button type='submit' className="bookNowButton">Book Now!</button>
                            </form>
                        </div>

                    </div>


                    <div className="packageHeaderImage">
                        <img src={data.image} alt="" />
                    </div>

                </div>


                {/* Column 2 */}
                <div className="packageDayWiseDetails">

                    <h2>Itinerary (Day wise)</h2>
                    {/* if (Array.isArray(data)) {
                            return (<> ... <>);
                        } else {
                            return (<> ... <>);
                        } */}

                    {Array.isArray(data) ? ("Please wait") : (data.days.map((i, index) => (
                        <div className="packageDayWiseDetailsDay" key={index}>
                            <img src="https://news.thrillophilia.com/content/images/size/w2000/2022/07/Artboard-8-1.jpg" alt="" />
                            <div className="packageDayWiseDetailsDayText">
                                <h3>Day {index + 1}Srinagar (Houseboat)</h3>
                                <p>{i}</p>
                                {/* <div className="packageDayWiseDetailsDayIcons">
                                    <abbr title="Hotel"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faHotel} /></abbr>
                                    <abbr title="Tickets"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faBed} /></abbr>
                                    <abbr title="Vehicle"><FontAwesomeIcon className='packageHeaderDetailsIcon' icon={faCoffee} /></abbr>
                                </div> */}
                            </div>
                        </div>
                    )))}


                </div>


                {/* Column 3 */}
                <div className="packageAccomodationDetails">

                    <div className="dcf-overflow-x-auto" tabIndex="0">
                        <table className="dcf-table dcf-table-bordered dcf-table-striped dcf-w-100%">
                            <caption>Accomodation Details</caption>
                            <thead>
                                <tr>
                                    <th className="dcf-txt-center" scope="col">Destination</th>
                                    <th className="dcf-txt-center" scope="col">Hotel</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="dcf-txt-center" scope="row">Srinagar</th>
                                    <td className="dcf-txt-center" data-label="Hotel">Samci Riviera/Similar</td>
                                </tr>
                                <tr>
                                    <th className="dcf-txt-center" scope="row">Gulmarg</th>
                                    <td className="dcf-txt-center" data-label="Hotel">Alpine Ridge/Similar</td>
                                </tr>
                                <tr>
                                    <th className="dcf-txt-center" scope="row">Pahalgham</th>
                                    <td className="dcf-txt-center" data-label="Hotel">Hotel Paristan Resorts/Similar</td>
                                </tr>
                                <tr>
                                    <th className="dcf-txt-center" scope="row">Houseboat</th>
                                    <td className="dcf-txt-center" data-label="Hotel">Deluxe Houseboat Dal Lake</td>
                                </tr>
                            </tbody>
                        </table></div>


                </div>

                {/* Column 4 */}
                <div className="packageInclusionExclusion">
                    <div className="dcf-overflow-x-auto" tabIndex="0">
                        <table className="dcf-table dcf-table-bordered dcf-table-striped dcf-w-100%">
                            <caption>Kindly Note</caption>
                            <thead>
                                <tr>
                                    <th className="dcf-txt-center" scope="col">Inclusions</th>
                                    <th className="dcf-txt-center" scope="col">Exclusions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="dcf-txt-center" scope="row">Well come drink at Arrival </th>
                                    <td className="dcf-txt-center" data-label="Exclusions">Government of India Goods &amp; Services Tax (GST) of 5%</td>
                                </tr>
                                <tr>
                                    <th className="dcf-txt-center" scope="row">Romantic Shikara Ride in Dal Lake </th>
                                    <td className="dcf-txt-center" data-label="Exclusions">Any increase in airfare, airport tax, fuel surcharge etc.</td>
                                </tr>
                                <tr>
                                    <th className="dcf-txt-center" scope="row">Honeymoon Cake on the arrival Day </th>
                                    <td className="dcf-txt-center" data-label="Exclusions">Personal expense like porterage, laundry, telephone, shopping, alcoholic beverages, extra mineral water or food which is not a part of group’s set meal menu</td>
                                </tr>
                                <tr>
                                    <th className="dcf-txt-center" scope="row">Candle Light Dinner in Dal Lake </th>
                                    <td className="dcf-txt-center" data-label="Exclusions">Oxygen Cylinders,Extra delay due to Road Blocks, snowfall, land slides.</td>
                                </tr>
                                <tr>
                                    <th className="dcf-txt-center" scope="row">Room Decoration on the Arrival Day </th>
                                    <td className="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th className="dcf-txt-center" scope="row">1Nights in Hotel/Resort at Srinagar </th>
                                    <td className="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th className="dcf-txt-center" scope="row">1 Night in Hotel/Resort at Pahalgam.. </th>
                                    <td className="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th className="dcf-txt-center" scope="row">1 Night in Hotel/Resort at Gulmarg.. </th>
                                    <td className="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th className="dcf-txt-center" scope="row">1 Night in Luxurious Deluxe/super deluxe Houseboat in the Lake</th>
                                    <td className="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th className="dcf-txt-center" scope="row"></th>
                                    <td className="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th className="dcf-txt-center" scope="row"></th>
                                    <td className="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th className="dcf-txt-center" scope="row"></th>
                                    <td className="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                                <tr>
                                    <th className="dcf-txt-center" scope="row"></th>
                                    <td className="dcf-txt-center" data-label="Exclusions"></td>
                                </tr>
                            </tbody>
                        </table></div>

                </div>


            </div>
        </>
    )
}

export default PackageComponent