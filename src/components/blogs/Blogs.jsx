import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './blogs.css'

const Blogs = () => {

    const { data, loading, error } = useFetch("/blogs/")

    return (
        <>

            <h1 className="BlogsHeader">Blogs</h1>

            <div className="blogsContainer">

                {data.map((item, index) => (
                    <Link to={`/blog/${item._id}`} key={index}><div className="blogsCard">
                        <img src={item.image} alt="" />
                        <div className="blogsCardDate">
                            <p>{new Date(item.createdAt).toDateString()}</p>
                            <p><FontAwesomeIcon icon={faUserAlt} /> {item.author}</p>
                        </div>
                        <h2>{item.title}</h2>
                        {/* <p>{Array.isArray(data) ? ("loading...") : data.body[0]}</p> */}
                    </div></Link>
                ))}






            </div>

        </>
    )
}

export default Blogs



// <Link to="/blog/:id"><div className="blogsCard">
//                     <img src="https://news.thrillophilia.com/content/images/size/w1000/2022/05/59qgmp08xoppcvf96b6na9y4fnh7_Artboard-7--1--1.png" alt="" />
//                     <div className="blogsCardDate">
//                         <p>Jan 20, 2023</p>
//                         <p><FontAwesomeIcon icon={faUserAlt} /> Sheema Bhat</p>
//                     </div>
//                     <h2>Thrillophilia sold 12,000+ Museum of the Future tickets in 90 days</h2>
//                     <p>Thrillophilia's strategic partnership with Museum of the Future since its very launch has propelled the company into the position of being the attraction's biggest partner in India. Owing to the museum's novelty, a 360-degree awareness campaign was launched with Indian customers as...</p>
//                 </div></Link>