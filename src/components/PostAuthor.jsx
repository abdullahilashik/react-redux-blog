import React, { useEffect } from 'react'
import { fetchUsers, selectAllUsers } from '../features/userSlice'
import {useSelector, useDispatch} from 'react-redux';
import { HiUser } from 'react-icons/hi';

const PostAuthor = ({author}) => {
  const disPatch = useDispatch();
    const users = useSelector(selectAllUsers);
    const user = users.find(i=> i.id === author);
    useEffect(() => {
      disPatch(fetchUsers());
    }, []);
  return (
    <div className='flex items-center gap-1'>
        <span><HiUser /></span>
        <span className='pl-2'>{user ? user.name: 'Unknown'}</span>
    </div>
  )
}

export default PostAuthor