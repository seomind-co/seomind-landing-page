import Image from 'next/image'
import React from 'react'

import TransparentCube from "../../public/transparentCube.png";

const OurGoal = () => {
  return (
    <div className='ourGoal'>
        <Image src={TransparentCube} className='absolute right-0 -mt-[290px]' />
        Our goal is to give everyone the opportunity to take advantage of the most cutting-edge technology on the market.
    </div>
  )
}

export default OurGoal