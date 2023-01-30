import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './blogComponent.css'

const BlogComponent = () => {

    const location = useLocation()
    const id = location.pathname.split("/")[2]

    const { data, loading, error } = useFetch(`/blogs/blog/${id}`)

    return (
        <>
            <div className="blogComponentContainer">

                <div className="blogComponentHeader">

                    <h1>{data.title}</h1>

                    <div className="blogComponentHeaderAuthor">
                        <h3>{data.author}</h3>
                        <h5>{new Date(data.createdAt).toDateString()}</h5>
                    </div>
                </div>

                <div className="blogComponentBody">

                    <div className="blogComponentBodyImage">
                        <img src={data.image} alt="" />
                    </div>

                    <div className="blogComponentBodyText">
                        {Array.isArray(data) ? ("Loading...") : (data.body.map((item, index) => (

                            <div className="blogComponentBodyPara" key={index}>
                                <p>{item}</p>
                            </div>
                        )))}

                    </div>

                </div>

            </div>
        </>
    )
}

export default BlogComponent