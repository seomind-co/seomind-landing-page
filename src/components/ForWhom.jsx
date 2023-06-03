import React, { useEffect, useState } from 'react';
import { forWhom } from '@/data';

const ForWhom = () => {
  const [currentIndex, setCurrentIndex] = useState(3);

  useEffect(() => {
    const lastIndex = forWhom.length;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(1);
    }
  }, [currentIndex, forWhom]);
  
  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
    }, 10000);
    return () => clearInterval(slider);
  }, [currentIndex]);


  return (
    <div className='py-24'>

      {/* Soft Light */}
      <div className="absolute from-slate-600 bg-blue-300/60 w-96 h-96 rounded-full blur-3xl z-0 -left-64"></div>
      
        <h1 className='font-extrabold text-6xl font-[montserrat] text-center text-black mb-24'>For Whom</h1>

        <div className='flex justify-center items-center'>
          <div className='rounded-full border-2 border-black w-[780px] h-[780px] flex justify-center items-center'>
            <div className='w-16 h-16 rounded-full absolute bg-white border-2 border-black mb-[551px] mr-[551px]'></div>
            <div className='w-16 h-16 rounded-full absolute bg-white border-2 border-black -mb-[551px] mr-[551px]'></div>
            <div className='w-16 h-16 rounded-full absolute bg-white border-2 border-black mb-[551px] -mr-[551px]'></div>
            <div className='w-16 h-16 rounded-full absolute bg-white border-2 border-black -mb-[551px] -mr-[551px]'></div>

            <div className='flex justify-center items-center'>

              {/* Soft Light */}
              <div className="from-slate-600 bg-purple-300 absolute w-48 h-48 rounded-full blur-3xl z-0"></div>

              <div className='text-black flex flex-col items-center mx-24 mt-32 z-20'>
                <div className='softLight'></div>

                <div className='flex justify-center items-center'>
                {
                  forWhom.map((item, i) => {
                    let position = "opacity-0 transition-all duration-500";
                    if (item.id === currentIndex) position = "opacity-100 transition-all duration-2000";
                    
                    return (
                      <div key={i} className={`${position} flex flex-col items-center absolute`}>
                        <h2 className='font-raleway font-bold text-[32px] mb-8'>{item.title}</h2>
                        <p className='font-nunito text-[16px] font-light text-center max-w-[80%]'>{item.description}</p>
                      </div>
                    )
                  })
                }
                </div>

                <div className='flex justify-center items-center gap-2 mt-32 z-30'>
                  {
                    forWhom.map((item, i) => item.id == currentIndex ? <div className='w-4 h-4 bg-blue-300 cursor-pointer rounded-full'></div> : <div onClick={() => setCurrentIndex(item.id)} className='w-4 h-4 bg-white border-2 cursor-pointer border-gray-500/50 rounded-full'></div>)
                  }
                </div>
              </div>
            </div>

          </div>
          
          
        </div>

        {/* Soft Light */}
        <div className="absolute from-slate-600 bg-blue-300/60 w-96 h-96 rounded-full blur-3xl z-0 -right-64 -mt-64"></div>

    </div>
  )
}

export default ForWhom