import React from 'react'
import {useDispatch} from 'react-redux';
import { addReaction } from '../features/postSlice';

const ReactionItem = ({reaction, reacts, k, postId}) => {
  
  const disPatch = useDispatch();

  const onReact = () => {
    disPatch(addReaction({postId, react: k}))
  }

  return (
    <div className='flex items-center mr-4' onClick={onReact}>
        <div className='p-px text-xl cursor-pointer'>{reaction}</div>
        <span className='text-base font-semibold'>{reacts[k]}</span>
    </div>
  )
}

export default ReactionItem