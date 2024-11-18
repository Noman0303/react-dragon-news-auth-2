import React from 'react'
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news;
    return (
            <div className="card bg-base-100 shadow-xl mb-16 ">
                <h2 className="font-semibold">Dragon News Home</h2>
                <img
                    src={image_url}
                    alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200?
                        <p>{details.slice(0,200)} <Link className='text-lg font-semibold text-blue-600'
                        to={`/news/${_id}`}
                        >Read more</Link> </p>:
                        <p>{details}</p>
                    }
                    
                </div>
            </div>        
    )
}

export default NewsCard