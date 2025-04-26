import React from 'react'
import youtubeimg from '../assets/resume.jpg'

function Resume() {
    return (
        <div id='resume' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e] '>
                Resume
            </h1>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
            <img src={youtubeimg} alt='/' className='rounded-xl group-hover:opacity-10'/>
            <div className='hidden group-hover:block absolute top-[50%] left[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl font-bold text-white tracking-wider text-center'>Resume</h3>
                <a href="https://drive.google.com/file/d/1wWaWHR8N2Xq1imDb0HSKaMWZDyMOs4ry/view?usp=sharing">
                    <p className='text-center p-3 rounded-lg bg-white text-pink-400 font-bold cursor-pointer text-lg'>
                   Click to view Resume
                    </p>
                </a>
            </div>
        </div>
        </div>
    )
}

export default Resume
