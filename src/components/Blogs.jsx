import React from 'react'
import BlogItem from './BlogItem'
import {useSelector} from 'react-redux';

const Blogs = () => {
  const blogs = useSelector(state => state.post);
  return (
    <div className='container py-12 mx-auto'>
        <div className="grid grid-cols-4 gap-4">
          {
            blogs.map((blog, index) => <BlogItem blog={blog} key={index}/>)
          }       
        </div>
    </div>
  )
}

export default Blogs