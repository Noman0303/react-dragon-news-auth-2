import React from 'react'
import Marquee from "react-fast-marquee"
import { Link } from 'react-router-dom'

const BreakingNews = () => {
    return (
        <div className='flex border p-2 bg-slate-100 rounded-xl mt-7'>
            <button className="btn btn-secondary">Breaking news</button>
            <Marquee pauseOnHover={true} speed={100} >
                <Link to="/">
                    I can be a React component, multiple React components, or just some text.
                </Link>
            </Marquee>
        </div>
    )
}

export default BreakingNews