import React from 'react';
import Image from 'next/image';

import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import Logo from "../../public/seomindLogoNew.png";
import English from "../../public/english.png";

const Footer = () => {
  return (
    <div className='text-black pt-5'>
        <hr />
        <div className='flex justify-between items-center py-8'>
            <div className='flex justify-start items-center'>
              <Image src={Logo} width={45} />
              <h1 className='navbarTitle'>SEORA</h1>
            </div>

            <h1 className='navText mr-5'>SOLUTION</h1>
            <h1 className='navText mr-5'>PRICING</h1>
            <h1 className='navText mr-5'>RESOURCES</h1>

            <div className='flex justify-end items-center gap-4'>
                <div className='flex items-center'>
                    <MailOutlineOutlinedIcon />
                    <p>hello@seomind.com</p>
                </div>
                <Image src={English} />
            </div>
        </div>

        <hr />

        <div className='flex justify-between items-center py-8'>
            <div className='flex justify-start items-start gap-4'>
                <FacebookIcon fontSize='24' className='cursor-pointer' />
                <InstagramIcon fontSize='24' className='cursor-pointer' />
                <TwitterIcon fontSize='24' className='cursor-pointer' />
            </div>
            <p className='text-sm'>Copyright ©2023 Seomind.co</p>
        </div>
    </div>
  )
}

export default Footer