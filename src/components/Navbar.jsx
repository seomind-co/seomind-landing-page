import Image from 'next/image';
import React from 'react';

import Logo from "../../public/seomindLogoNew.png";
import English from "../../public/english.png";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mt-6 mx-5'>
      <div className='flex justify-start items-center'>
        <Image src={Logo} width={57} />
        <h1 className='navbarTitle'>SEOMIND</h1>
        <div className='preAlfa text-xs font-bold ml-2 border-white'>PRE-ALPHA</div>
      </div>

      <div className='flex justify-end items-center'>
        <h1 className='navText mr-5'>SOLUTION</h1>
        <h1 className='navText mr-5'>PRICING</h1>
        <h1 className='navText mr-5'>RESOURCES</h1>
      </div>

      <div className='flex items-center'>
        <Image src={English} className='mr-5' />
        <div className='waitlist py-2 px-6 transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#0047FF]'>Join the Waitlist</div>
      </div>
    </div>
  )
}

export default Navbar