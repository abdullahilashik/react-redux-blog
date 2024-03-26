import React from 'react'

const ReactionItem = ({reaction}) => {
  return (
    <div className='flex items-center mr-4'>
        <div className='p-px text-xl cursor-pointer'>{reaction}</div>
        <span className='text-base font-semibold'>1</span>
    </div>
  )
}

export default ReactionItem