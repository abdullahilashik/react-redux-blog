import React, { useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPosts, selectAllPosts, selectPostById} from '../features/postSlice';
import {parseISO, formatDistance} from 'date-fns';
import moment from 'moment';

const Blog = () => {  
  const dispatch = useDispatch();
  const {id} = useParams();  
  const post = useSelector(state => selectPostById(state, id));
  const posts = useSelector(selectAllPosts);
  const sortedPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date));
  

  useEffect(()=>{
    dispatch(fetchPosts())
  }, [])
  return (
    <div className='flex p-12 bg-gray-800 text-white w-full min-h-screen'>
        <div className="container mx-auto w-full">
          <div className="w-full flex-1"></div>
          {/* sidebar */}
          <div className="flex flex-col w-[25%] ml-auto">
            <div className="px-4 py-2 border shadow rounded">
              <div className="flex flex-col gap-4">
                <h4 className='text-lg font-bold'>Latest Blogs</h4>
                <ul className="flex flex-col gap-4">
                  {
                    sortedPost.slice(0,4).map((item, index) => <li key={index} className='flex flex-col gap-2'>
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="w-4 h-4 rounded-full bg-red-400"></div>
                        <h2 className='font-bold line-clamp-1'>{item.title}</h2>
                      </div>
                      <p className='text-sm line-clamp-3'>{item.content}</p>
                      <p className="text-sm">Posted in: {moment(item.date).fromNow()}</p>
                    </li>)
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Blog