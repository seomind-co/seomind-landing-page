import React from 'react';
import Image from 'next/image';

import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

import Search from "../../public/search.png";
import Refine from "../../public/refine.png";
import Develop from "../../public/develop.png";
import Arrow1 from "../../public/howItWorksArrow1.png";
import Arrow2 from "../../public/howItWorksArrow2.png";

const HowItWorks = () => {
  return (
    <div className='py-16'>
        
        <h1 className='font-extrabold text-4xl font-[montserrat] text-center text-black'>How it Works</h1>

        <div className='flex justify-between items-center mt-16 gap-16'>
            
            <div className='px-12 py-10 rounded-3xl bg-[#F7F6FB] text-black '>
                <div className='p-2 rounded-3xl flex justify-center items-center bg-white w-24 h-24'>
                    <Image src={Search} />
                </div>
                <h3 className='mt-10 font-bold font-[montserrat] text-lg'>Define the problem</h3>
                <p className='mt-2 font-bold font-[montserrat] text-sm text-[#4F4F4F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>

            <Image src={Arrow1} className='absolute ml-[180px] -mt-[100px]' />

            <div className='px-12 py-10 rounded-3xl bg-[#F7F6FB] text-black '>
                <div className='p-2 rounded-3xl flex justify-center items-center bg-white w-24 h-24'>
                    <Image src={Develop} />
                </div>
                <h3 className='mt-10 font-bold font-[montserrat] text-lg'>Develop a Solution</h3>
                <p className='mt-2 font-bold font-[montserrat] text-sm text-[#4F4F4F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>

            <Image src={Arrow2} className='absolute ml-[590px] -mb-[60px]' />

            <div className='px-12 py-10 rounded-3xl bg-[#F7F6FB] text-black '>
                <div className='p-2 rounded-3xl flex justify-center items-center bg-white w-24 h-24'>
                    <Image src={Refine} />
                </div>
                <h3 className='mt-10 font-bold font-[montserrat] text-lg'>Refine</h3>
                <p className='mt-2 font-bold font-[montserrat] text-sm text-[#4F4F4F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
        
        </div>

        <div className='text-[#4F4F4F] font-thin italic text-center text-md cursor-pointer mt-12'>
            Learn More <ArrowCircleRightOutlinedIcon />
        </div>
    </div>
  )
}

export default HowItWorks