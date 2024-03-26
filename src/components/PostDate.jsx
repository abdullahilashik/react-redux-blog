import moment from 'moment'
import React from 'react'
import { HiClock } from 'react-icons/hi'

const PostDate = ({date}) => {
  return (
    <div className='flex items-center gap-1'>
        <span><HiClock /></span>
        <span className="text-sm">{moment(date).fromNow()}</span>
    </div>
  )
}

export default PostDate