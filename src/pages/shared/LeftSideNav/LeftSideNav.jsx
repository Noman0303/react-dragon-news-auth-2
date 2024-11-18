import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {

const[categories,setCategories] = useState([]);

useEffect (() =>{
  fetch('categories.json')
  .then(res => res.json())
  .then(data => setCategories(data))
} ,[])

  return (
    <div className='space-y-4 p-2'>
        <h2 className="text-2xl font-semibold">All Caterogy</h2>
        {
          categories.map(category => <NavLink
          className='block m-4 text-xl font-semibold px-4 '
          key={category.id}
          to={`/category/${category.id}`}
          >{category.name}</NavLink>)
        }


    </div>
  )
}

export default LeftSideNav