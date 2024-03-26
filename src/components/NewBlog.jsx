import React from 'react'

const NewBlog = () => {
  return (
    <div className='w-[20%] h-screen'>
        <div className="w-full bg-gray-900 h-full p-4">
            <h1 className="text-3xl font-bold uppercase text-white">Redux BLog</h1>
            <form action="" className="flex flex-col gap-4 text-gray-200 mt-8">
                {/* title */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Blog Title</label>
                    <input type="text" className='rounded text-black p-2' placeholder='Enter your blog title'/>
                </div>
                {/* authors */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Blog Title</label>
                    <select name="" id="" className='text-black p-2 rounded'>
                        <option value="ashik">Ashik</option>
                        <option value="ashik">Ashik</option>
                        <option value="ashik">Ashik</option>
                        <option value="ashik">Ashik</option>
                        <option value="ashik">Ashik</option>
                    </select>
                </div>
                {/* content */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Blog Title</label>
                    <textarea name="" id="" cols="30" rows="10" className='rounded p-2 text-black' placeholder='Your blog content here'></textarea>
                </div>
                <button className='px-5 py-2 rounded shadow-2xl shadow-gray-600 bg-gray-800'>Save</button>
            </form>
        </div>
    </div>
  )
}

export default NewBlog