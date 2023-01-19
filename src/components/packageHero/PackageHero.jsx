import './packageHero.css'

const PackageHero = () => {
    return (
        <>
        
            <h1 className='packageHeroHeader'>Popular Destinations</h1>
            <div className="pHeroContainer">


                <div className="pHeroCard">

                    <div className="pHeroCardImage">
                        <img src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/8bfruz650zufkrgu7aayovxr5qkp_1575443721_bike.png" alt="" />
                    </div>


                    <h2 className="pHeroCardHeading">Leh</h2>

                </div>


                <div className="pHeroCard">

                    <div className="pHeroCardImage">
                        <img src="https://images.pexels.com/photos/2528431/pexels-photo-2528431.jpeg" alt="" />
                    </div>

                    <h2 className="pHeroCardHeading">Srinagar</h2>

                </div>



                <div className="pHeroCard">

                    <div className="pHeroCardImage">
                        <img src="https://images.pexels.com/photos/6155700/pexels-photo-6155700.jpeg" alt="" />
                    </div>

                    <h2 className="pHeroCardHeading">Gulmarg</h2>

                </div>



                <div className="pHeroCard">

                    <div className="pHeroCardImage">
                        <img src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/s5fpwuba1i6zwebgpzd9nzvgqcq6_Shikara%20dal%20lake.jpg" alt="" />
                    </div>

                    <h2 className="pHeroCardHeading">Dal Lake</h2>

                </div>

                

                



            </div>
        </>
    )
}

export default PackageHero