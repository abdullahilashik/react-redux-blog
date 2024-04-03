import React, { useEffect } from 'react'
import BlogItem from './BlogItem'
import {useSelector, useDispatch} from 'react-redux';
import { fetchPosts, getPostError, getPostStatus, selectAllPosts } from '../features/postSlice';

const Blogs = () => {    
  const disPatch = useDispatch();
  let rawBlogs = useSelector(selectAllPosts);
  const postError = useSelector(getPostError);
  const postStatus = useSelector(getPostStatus);

  const blogs = rawBlogs.slice().sort((a,b) => {
    console.log(a.date);
    console.log(b.date);
    return a.date.localeCompare(b.date)
  });

  useEffect(()=>{
    if(postStatus === 'idle'){
      disPatch(fetchPosts())
    }
    
  }, []);

  return (
    <div className='container py-12 mx-auto'>
        {
          postStatus == 'succeeded' && <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {
            blogs.map((blog, index) => <BlogItem blog={blog} key={index}/>)
          }     
        </div>
        }
        {
          postStatus == 'loading' && <h1 className='text-5xl font-bold text-white animate-pulse'>Loading posts...</h1>
        }
        {
          postStatus === 'failed' && <h1 className='text-5xl font-bold text-white'>Error fetching posts!</h1>
        }
    </div>
  )
}

export default Blogs