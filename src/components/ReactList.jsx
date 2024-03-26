import React from 'react'
import ReactionItem from './ReactionItem'

const ReactList = () => {
    const reactions = {
        'laugh': '🤣',
        'happy': '🙂',
        'wink': '😉',
        'love': '🥰',
        'angry': '😡'
    }
  return (
    <>
        <div className="flex">
        {
            Object.keys(reactions).map((key, index)=> <ReactionItem reaction={reactions[key]} key={index}/>)
        }
        </div>
    </>
  )
}

export default ReactList