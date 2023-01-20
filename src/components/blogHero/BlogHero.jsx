import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './blogHero.css'

const BlogHero = () => {
    return (
        <>

            <h2 className='blogHeroHeading'>Latest Blogs</h2>

            <div className="blogHeroContainer">

                <div className="blogHeroCard">
                    <img src="https://img.veenaworld.com/wp-content/uploads/2023/01/323572958_1139822833387959_4552667185984306423_n-scaled.jpg" alt="" />
                    <div className="blogHeroCardDate">
                        <p>Jan 20, 2023</p>
                        <p><FontAwesomeIcon icon={faUserAlt} /> Sheema Bhat</p>
                    </div>
                    <h3>Discovering Tokyo: Where the History and Future Meet</h3>
                </div>

                <div className="blogHeroCard">
                    <img src="https://img.veenaworld.com/wp-content/uploads/2023/01/Discovering-Tokyo-Where-the-History-and-Future-Meet-scaled-e1673948948775.jpg" alt="" />
                    <div className="blogHeroCardDate">
                        <p>Jan 20, 2023</p>
                        <p><FontAwesomeIcon icon={faUserAlt} /> Sheema Bhat</p>
                    </div>
                    <h3>Discovering Tokyo: Where the History and Future Meet</h3>
                </div>

                <div className="blogHeroCard">
                    <img src="https://img.veenaworld.com/wp-content/uploads/2023/01/coleen-rivas-OZ2rS2zCjNo-unsplash-scaled.jpg" alt="" />
                    <div className="blogHeroCardDate">
                        <p>Jan 20, 2023</p>
                        <p><FontAwesomeIcon icon={faUserAlt} /> Sheema Bhat</p>
                    </div>
                    <h3>Discovering Tokyo: Where the History and Future Meet</h3>
                </div>

                <div className="blogHeroCard">
                    <img src="https://img.veenaworld.com/wp-content/uploads/2023/01/annie-spratt-x-PFFkgIbGE-unsplash-scaled.jpg" alt="" />
                    <div className="blogHeroCardDate">
                        <p>Jan 20, 2023</p>
                        <p><FontAwesomeIcon icon={faUserAlt} /> Sheema Bhat</p>
                    </div>
                    <h3>Discovering Tokyo: Where the History and Future Meet</h3>
                </div>



            </div>

        </>
    )
}

export default BlogHero