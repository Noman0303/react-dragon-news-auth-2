import React from 'react'
import { Link } from 'react-router-dom';
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";


const NewsCard = ({ news }) => {
    const { title, image_url, details, _id, author } = news;
    return (
        <div className="card bg-base-100 shadow-lg mb-7 px-5 ">
            <div className='flex items-center justify-between bg-gray-200 py-4 px-5 mb-4'>
                <div className='flex items-center' >
                    <img className='w-10 h-10 rounded-full mr-4' src={author.img} alt="" />
                    <div className='flex-col'>
                        <p className='font-semibold'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex '>
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>
            <h2 className="card-title mb-5">{title}</h2>
            <img
                src={image_url}
                alt="image" />
                
            <div className=" mt-8 mb-4 ">
                {
                    details.length > 200 ?
                        <p>{details.slice(0, 200)} 
                        <br />
                        <Link 
                        className='text-lg font-semibold text-orange-500'
                        to={`/news/${_id}`}
                        >Read more</Link> </p> :
                        <p >{details}</p>
                }
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default NewsCard