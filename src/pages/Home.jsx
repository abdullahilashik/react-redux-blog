import React from 'react'
import Blogs from '../components/Blogs';
import NewBlog from '../components/NewBlog';

const Home = () => {
  return (
    <div className="flex relative">
        <NewBlog />
        <div className='min-h-scree w-full bg-gray-800 p-4'>
            <h1 className="text-3xl font-semibold text-white">User Blogs</h1>
            <Blogs />
        </div>
      </div>    
  )
}

export default Home