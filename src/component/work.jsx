import React from 'react'
import Workitem from './workitem'

const data =[
    {
        year: 2023,
        title: 'Microsoft, Learn Student Ambassador',
        duration: '2 years',
        details:
        'Completed over 70 Microsoft Learn modules on Cloud Technologies, DevOps, Data Analysis, Security and Compliance, Software Development, and Machine Learning. Also Headed a team of 2 ambassadors in organizing and executing 5 workshops, reaching over 200+ students and equipping them with the skills to leverage Microsoft technologies effectively'
    },
    {
        year: 2024,
        title: 'Google Developer Student Clubs, Core Team Member',
        duration: '1 year',
        details:
        'Organized and facilitated weekly community meetings, ensuring effective communication and coordination among community members, resulting in a 20% increase in project productivity. Also  Led a team of 10 developers in building a product landing page for a seafood restaurant in 4 weeks. Moreover Collaborated with other core members to organize 3 events and 1 hackathon, attracting over 300+ participants. '
    },
    {
        year: 2020,
        title: 'Crown Branding Agency, Product Designer',
        duration: '4 years',
        details:
        'Delivered branding solutions for 4 clients, boosting client satisfaction by 68%. Achieved 98% on-time project delivery with positive client feedback on brand consistency and quality.  Led agency website redesign, increasing traffic by 40%  '
    },
    {
        year: 2017,
        title: 'Revmabit',
        duration: '4 years',
        details:
        'During my tenure at Revmabit, a leading data structure company, I contributed significantly to the growth and success of the organization. My role involved implementing efficient algorithms and optimizing data structures that streamlined data processing and improved overall system performance. One of my key achievements was enhancing the companys core data architecture, resulting in a 20% increase in processing speed and reducing storage costs by optimizing data retrieval methods. Additionally, I collaborated with cross-functional teams to develop scalable solutions that supported the company’s long-term goals and client needs, further elevating Revmabit reputation for delivering top-tier data solutions.'
    },
]
function Work() {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx) => (
                <Workitem 
                key={idx}
                 year={item.year}
                  title={item.title}
                   duration={item.duration}
                    details={item.details}/>        
            ))}
        </div>
    )
}

export default Work
