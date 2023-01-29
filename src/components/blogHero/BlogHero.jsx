import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './blogHero.css'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'


const BlogHero = () => {

    const { data, loading, error } = useFetch("/blogs/")

    console.log(data)

    return (
        <>

            <h2 className='blogHeroHeading'>Latest Blogs</h2>

            <div className="blogHeroContainer">

                {loading ? ("Loading please wait...") : (
                    data.map(item => (

                        <Link to="/blog/:id"><div className="blogHeroCard" key={item._id}>
                            <img src={item.image} alt={item.title} />
                            <div className="blogHeroCardDate">
                                <p>{new Date(item.createdAt).toDateString()}</p>
                                <p><FontAwesomeIcon icon={faUserAlt} /> {item.author}</p>
                            </div>
                            <h3>{item.title}</h3>
                        </div></Link>

                    ))
                )}

            </div>

        </>
    )
}

export default BlogHero