import React from 'react'
import Header from '../shared/header/Header'
import Navbar from '../shared/Navbar/Navbar'
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav'
import RightSideNav from '../shared/RightSideNav/RightSideNav'
import BreakingNews from './BreakingNews'
import { useLoaderData } from 'react-router-dom'
import NewsCard from './NewsCard'

const Home = () => {
    const news = useLoaderData();
    console.log(news)

  return (
    <div>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
        <div className='grid md:grid-cols-4 gap-6 mt-20'>
            <div className='border'>
                <LeftSideNav></LeftSideNav>
            </div>
            {/* News container */}
            <div className='md:col-span-2'>
            <h2 className="font-semibold mb-5 text-xl">Dragon News Home</h2>
                {
                    news.map(aNews =><NewsCard
                    key = {aNews._id}
                    news = {aNews}
                    ></NewsCard>)
                }
            </div>
            <div className='border'>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    </div>
  )
}

export default Home