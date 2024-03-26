import React from 'react'
import {HiUser, HiClock} from 'react-icons/hi';
import ReactList from './ReactList';
import moment from 'moment';
import PostAuthor from './PostAuthor';
import PostDate from './PostDate';

const BlogItem = ({blog}) => {
  return (
    <div className='rounded-xl shadow p-px bg-gradient-to-b from-blue-300 to-rose-300 hover:from-rose-300 hover:to-blue-300 duration-300 transition'>
            <div className="h-full w-full bg-gray-900 text-gray-300 rounded-xl px-4 py-2 flex flex-col gap-4">
                <h1 className='font-bold text-lg'>{blog.title}</h1>
                <div className="flex items-center w-full text-sm gap-[2px]">
                    <PostAuthor author={blog.author} />
                    <span className='ml-4'></span>
                    <PostDate date={blog.date} />
                </div>
                <p className='text-sm line-clamp-4 max-w-sm'>{blog.content}</p>
                <ReactList postId={blog.id} reacts={blog.reactions} />
            </div>
        </div>
  )
}

export default BlogItem