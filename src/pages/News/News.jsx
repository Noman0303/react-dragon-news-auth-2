import { useParams } from 'react-router-dom'
import Header from '../shared/header/Header'
import RightSideNav from '../shared/RightSideNav/RightSideNav'
import Navbar from '../shared/Navbar/Navbar';

const News = () => {

  const {id}= useParams();

  return (

    <div>
      <Header></Header>
      <Navbar></Navbar>
      
      <div className='grid md:grid-cols-4 gap-6 mt-7'>
        <div className='col-span-3 border'>
        <h2 className='text-xl font-semibold' >Dragon News</h2>
        <p>{id}</p>


        </div>
        <div className='col-span-1 border'> 
          <RightSideNav></RightSideNav>

        </div>

      </div>

      

    </div>
  )
}

export default News