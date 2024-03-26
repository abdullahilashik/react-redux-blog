import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {postAdded} from '../features/postSlice';
import {nanoid} from '@reduxjs/toolkit';
import { fetchUsers, getuserError, getUserStatus, selectAllUsers } from '../features/userSlice';

const NewBlog = () => {

    const users = useSelector(selectAllUsers);
    const userError = useSelector(getuserError);
    const userStatus = useSelector(getUserStatus);
    

    const disPatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState(null);

    useEffect(()=>{
        if(userStatus === 'idle'){
            disPatch(fetchUsers());
        }
    }, []);

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);
    const onAuthorChange = (e) => setAuthor(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        disPatch(postAdded({id: nanoid(), title: title, content: content, author: author}));
        setTitle('');
        setContent('');
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(author);


  return (
    <div className='h-screen'>
        <div className="w-full bg-gray-900 h-full p-4">
            <h1 className="text-3xl font-bold uppercase text-white">Redux BLog</h1>
            <form action="" className="flex flex-col gap-4 text-gray-200 mt-8" onSubmit={onSubmit}>
                {/* title */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Blog Title</label>
                    <input onChange={onTitleChange} type="text" className='rounded text-black p-2' placeholder='Enter your blog title' value={title} />
                </div>
                {/* authors */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Blog Title</label>
                    <select name="" id="" className='text-black p-2 rounded' onChange={onAuthorChange}>
                        {
                            users.map(user => <option value={user.id}>{user.name}</option>)
                        }                        
                    </select>
                </div>
                {/* content */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Blog Title</label>
                    <textarea onChange={onContentChange} name="" id="" cols="30" rows="10" className='rounded p-2 text-black' placeholder='Your blog content here'>{content}</textarea>
                </div>
                <button disabled={!canSave} className='px-5 py-2 rounded shadow-2xl shadow-gray-600 bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed'>Save</button>
            </form>
        </div>
    </div>
  )
}

export default NewBlog