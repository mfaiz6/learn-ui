import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './blogHero.css'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'


const BlogHero = () => {

    const { data, loading, error } = useFetch("/blogs/homeBlogs")
    return (
        <>
            <h2 className='blogHeroHeading'>Latest Blogs</h2>

            <div className="blogHeroContainer">

                {loading ? ("Loading please wait...") : (
                    data.map((item, index) => (

                        <Link to={`/blog/${item._id}`} key={index}><div className="blogHeroCard">
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