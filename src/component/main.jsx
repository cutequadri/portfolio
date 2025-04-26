import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'
import youtubeimg from '../assets/b.jpg'
import bigbg from '../assets/bbg.jpg'
import {BsPerson}  from 'react-icons/bs'

function Main() {
    return (
        <div id='main'>
            {/* <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='https://th.bing.com/th/id/R.49dc0737dcbc4f5d9d8c2feb8e1dfbbb?rik=8r%2fdCKj2MqH8HA&pid=ImgRaw&r=0' alt='jjj'></img> */}
            <img className='w-full h-screen object-cover object-left scale-x-[1] md:hidden' src={youtubeimg} alt='jjj'></img>
            <img className='w-full h-screen object-cover object-left scale-x-[1] hidden md:block' src={bigbg} alt='jjj'></img>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/10' >
            <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center' > 
                <h1 className='sm:text-5xl text-4xl font-bold tesxt-gray-800'>I'm QUADRI</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                <TypeAnimation
      sequence={[
        'Developer', // Types 'One'
        3000, // Waits 1s
        'Coder', // Deletes 'One' and types 'Two'
        3000, // Waits 2s
        'Tech Engineer', // Types 'Three' without deleting 'Two'
        2000
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <a href="https://x.com/Quadribudul?t=HSc3GiQPrMTo6DSIeBl4eg&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter  className='cursor-pointer' size={20}/></a>
                <a href="https://drive.google.com/file/d/1wWaWHR8N2Xq1imDb0HSKaMWZDyMOs4ry/view?usp=sharing" target="_blank" rel="noopener noreferrer"> <BsPerson className='cursor-pointer' size={20}/></a>
                <a href="https://github.com/cutequadri" target="_blank" rel="noopener noreferrer">  <FaGithub className='cursor-pointer' size={20}/></a>
                <a href="https://www.linkedin.com/in/abdulquadri-abdulsalam-64a665361/" target="_blank" rel="noopener noreferrer"> <FaLinkedin className='cursor-pointer' size={20}/></a>
             
            </div>
            </div>
            
        </div>
        </div>

        
    )
}

export default Main


