import React, { useEffect } from 'react'
import { fetchUsers, getUserStatus, selectAllUsers } from '../features/userSlice'
import {useSelector, useDispatch} from 'react-redux';
import { HiUser } from 'react-icons/hi';

const PostAuthor = ({author}) => {
  const disPatch = useDispatch();
    const users = useSelector(selectAllUsers);
    const status = useSelector(getUserStatus);
    const user = users.find(i=> i.id === author);
    useEffect(() => {
      disPatch(fetchUsers());
    }, []);
  return (
    <div className='flex items-center gap-1'>
        <span><HiUser /></span>
        {status == 'loading' && <span className='pl-2'>Loading...</span>}
        {status == 'succeeded' && <span className='pl-2'>{user ? user.name: 'Unknown'}</span>}
        {status == 'failed' && <span className='pl-2'>N/A</span>}
    </div>
  )
}

export default PostAuthor