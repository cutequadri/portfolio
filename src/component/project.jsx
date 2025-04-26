import React from 'react'
import Projectitem from './projectitem'
import netfliximg from '../assets/weatherpulse.png'
import googleimg from '../assets/portfolio.jpg'
import trillerimg from '../assets/urlshort.png'
import youtubeimg from '../assets/alpaca.png'

function Project() {
    
    // return (
    //     <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
    //         <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
    //         <p className='text-center py-8'>
    //             lorem ipsum donor sit adipisicing elit, incidunt maxime
    //         </p>
    //         <div className='grid sm:grid-cols-2 gap-12'>
    //             <Projectitem Img={netfliximg} title='Netflix App' />
    //             <Projectitem Img={trillerimg} title='Triller App'/>
    //             <Projectitem Img={youtubeimg} title='Youtube App'/>
    //             <Projectitem Img={googleimg} title='Google map App'/>
    //         </div>
    //     </div>
    // )








        return (
            <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
                <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
                <p className='text-center py-8'>
                    view some of my projects
                </p>
                <div className='grid sm:grid-cols-2 gap-12'>
    
                    <div className="text-1xl font-bold text-center text-black">
                    <Projectitem Img={netfliximg} title='WeatherPulse' hre='https://github.com/cutequadri/WeatherPulse'></Projectitem>
                    <span className='pt-15 text-center'>WeatherPulse</span>
                    </div>
    
                      
                    <div className="text-1xl font-bold text-center text-black">
                    <Projectitem Img={trillerimg} title='Link Shortner'  hre="https://github.com/cutequadri/urlShortner"></Projectitem>
                    <span className='pt-15 text-center'>Link Shortner</span>
                    </div>
    
                      
                    <div className="text-1xl font-bold text-center text-black">
                    <Projectitem Img={youtubeimg} title='Alpaca' hre="https://github.com/cutequadri/Alpaca"></Projectitem>
                    <span className='pt-15 text-center'>Alpaca image generator website</span>
                    </div>
    
                      
                    <div className="text-1xl font-bold text-center text-black">
                    <Projectitem Img={googleimg} title='Portfolio' hre="https://github.com/cutequadri/portfolio"></Projectitem>
                    <span className='pt-15 text-center'>Working Portfolio</span>
                    </div>
    
                </div>
            </div>
        )
      











}

export default Project
