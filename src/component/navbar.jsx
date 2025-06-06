import React from 'react'
import { useState } from 'react'
import {AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject} from 'react-icons/ai'
import {BsPerson}  from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'

function Navbar() {
    const[nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
        console.log('state chnged')
    }
    return (
        <div>
        <AiOutlineMenu onClick={handleNav} size={30} className='absolute fixed top-4 right-4 z-[99] md:hidden'/>
        {
            nav ? (
            <div className='fixed w-full h-screen bg-white/90  flex flex-col justify-center items-center z-20'onClick={handleNav}>
                <a onClick={handleNav} href='#main' className='w-[75%] flex flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome size={20}/>
                    <span className='pl-4'>Home</span>
                </a>
                <a onClick={handleNav} href='#work' className='w-[75%] flex flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrProjects size={20}/>
                    <span className='pl-4'>Work</span>
                </a>
                <a onClick={handleNav} href='#project' className='w-[75%] flex flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineProject size={20}/>
                    <span className='pl-4'>Project</span>
                </a>
                <a onClick={handleNav} href='#resume' className='w-[75%] flex flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsPerson size={20}/>
                    <span className='pl-4'>Resume</span>
                </a>
                <a onClick={handleNav} href='#contact' className='w-[75%] flex flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail size={20}/>
                    <span className='pl-4'>Contact</span>
                </a>

            </div>
            )
            :(
            ''
            )
        }
        <div className=' md:block hidden fixed top-[25%] z-10'>
            <div className=' flex flex-col'>
                <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineHome size={20}/>
                </a>
                <a href='#work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrProjects size={20}/>
                </a>
                <a href='#project' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineProject size={20}/>
                </a>
                <a href='#resume' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsPerson size={20}/>
                </a>
                <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail size={20}/>
                </a>
            </div>
        </div>
        </div>
    );
};

export default Navbar
