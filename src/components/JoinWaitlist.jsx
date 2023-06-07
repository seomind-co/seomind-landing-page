import React from 'react';
import Image from 'next/image';

import Computer from "../../public/computer.png";
import ComputerBack from "../../public/computerBack.png";
import ComputerScreen from "../../public/computerContent.png";

import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const JoinWaitlist = () => {
  return (
    <div className='grid grid-cols-2 text-black mb-20 mt-10'>
        
        <div className='flex flex-col px-5'>
            <h1 className='font-extrabold text-4xl font-[montserrat] text-center text-black'>Join Our Waitlist!</h1>

            <div className='w-full mt-6'>
                <p className='font-bold mb-1'>Name</p>
                <EmojiEmotionsOutlinedIcon className='absolute mt-2.5 ml-3.5 text-black/20' />
                <input className='w-full bg-white pl-12 pr-3 py-2 border-2 border-black/10 rounded-lg' placeholder={`Your Name`} />
            </div>
            <div className='w-full mt-6'>
                <p className='font-bold mb-1'>Email</p>
                <EmailOutlinedIcon className='absolute mt-2.5 ml-3.5 text-black/20' />
                <input className='w-full bg-white pl-12 pr-3 py-2 border-2 border-black/10 rounded-lg' placeholder={`mail@company.com`} />
            </div>
            <div className='w-full mt-6'>
                <p className='font-bold mb-1'>Role</p>
                <PersonOutlineOutlinedIcon className='absolute mt-2.5 ml-3.5 text-black/20' />
                <input className='w-full bg-white pl-12 pr-3 py-2 border-2 border-black/10 rounded-lg' placeholder={`Your Name`} />
            </div>

            <div className='mt-16'>
                <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to Privacy Policy and Tems of Use" />
            </div>
            <button className='contactButton transition-all duration-300 hover:text-[#0047FF] hover:bg-[#FFFFFF] border-2 border-[#0047FF]'>Contact with us now</button>
        </div>
        
        <div className='flex justify-center items-center mt-24'>
            <Image src={Computer} className='relative z-10' />
            <Image src={ComputerBack} className='absolute z-0 w-[480px] -mt-36' />
            <Image src={ComputerScreen} className='absolute z-20 w-[400px] -ml-7 -mt-5' />
        </div>
    
    </div>
  )
}

export default JoinWaitlist