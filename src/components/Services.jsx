import React from 'react';
import Image from 'next/image';

import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

import KeywordAnalysis from "../../public/service-keyword-analysis.png";
import ContentWriting from "../../public/service-content-writing.png";
import ContentOptimization from "../../public/service-content-optimization.png";
import CompetitorAnalysis from "../../public/service-competitor-analysis.png";
import DashboardReporting from "../../public/service-dashboard-reporting.png";
import SeoBacklink from "../../public/service-seo-backlink.png";


const ServiceCards = ({ name, topics, desc, icon, color, key }) => {

    return (
        <div key={key} className={`rounded-b-3xl cursor-default transition-all duration-300 hover:shadow-2xl hover:shadow-black/20`}>
            <div style={{ backgroundImage: color }} className='w-full h-1 transition-all duration-300 backdrop-grayscale hover:backdrop-grayscale-0' />
            <div className='p-12'>
                <div style={{ backgroundImage: color }} className='flex justify-center items-center rounded-full p-3 w-[61px] h-[61px] shadow-lg shadow-slate-400'>
                    {icon}
                </div>

                <div>
                    <h2 className='font-[montserrat] font-bold text-[#1B2336] mt-8'>{name}</h2>
                    <p className='font-[montserrat] font-extrabold text-sm text-[#4F4F4F] mt-2'>{topics}</p>
                </div>

                <p className='font-[montserrat] text-sm text-[#4F4F4F] mt-4'>{desc}</p>
            </div>
        </div>
    )
}


const Services = () => {
    const Cards = [
        {
            name: "Keyword Analysis",
            topics: "React, Angular, NodeJS",
            desc: "Get the best specific keywords for your startup and differentiate yourself from your competitors",
            icon: <Image src={KeywordAnalysis} alt="KeywordAnalysis" />,
            color: "linear-gradient(137.82deg, #0289FF 2.55%, #0258FF 98.09%)"
        },
        {
            name: "Content Writing",
            topics: "Magento, Shopify",
            desc: "Integrate your account to manage your product's social media and improve search rankings.",
            icon: <Image src={ContentWriting} alt="ContentWriting" />,
            color: "linear-gradient(134.46deg, #8B96FF 14.07%, #4353FF 85.28%)"
        },
        {
            name: "Content Optimization",
            topics: "React Native, Flutter",
            desc: "Get the best specific keywords for your startup and differentiate yourself from your competitors",
            icon: <Image src={ContentOptimization} alt="ContentOptimization" />,
            color: "linear-gradient(134.95deg, #8F5FFF 1.22%, #5206FF 100.09%)"
        },
        {
            name: "Competitor Analysis",
            topics: "Electron.js",
            desc: "Input the URLs of your competitors and discover the most comprehensive solution recommendations.",
            icon: <Image src={CompetitorAnalysis} alt="CompetitorAnalysis" />,
            color: "linear-gradient(137.13deg, #C166FF 1.47%, #9800FF 99.75%)"
        },
        {
            name: "Dashboard and Reporting",
            topics: "React, Angular, NodeJS",
            desc: "Get the best specific keywords for your startup and differentiate yourself sss your competitors",
            icon: <Image src={DashboardReporting} alt="DashboardReporting" />,
            color: "linear-gradient(180deg, #FF1593 0%, #D60073 100%)"
        },
        {
            name: "Seo Backlink",
            topics: "React, Angular, NodeJS",
            desc: "Get the best specific keywords for your startup and differentiate yourself from your competitors",
            icon: <Image src={SeoBacklink} alt="SeoBacklink" />,
            color: "linear-gradient(180deg, #28DD9C 0%, #00AE70 100%)"
        },
    ]
  return (
    <div className='text-black pt-60 pb-24'>
        <h1 className='font-extrabold text-6xl font-[montserrat] text-center'>Services & Technologies</h1>
        <p className='font-light mt-5 text-sm font-[montserrat] text-center text-[#4F4F4F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className='grid grid-cols-3 gap-12 mt-24'>
            {
                Cards.map((card, index) => <ServiceCards name={card.name} topics={card.topics} desc={card.desc} icon={card.icon} color={card.color} key={index} />)
            }
        </div>

        <div className='text-[#4F4F4F] font-bold text-center text-md cursor-pointer mt-28'>
            Our services <ArrowCircleRightOutlinedIcon />
        </div>
    </div>
  )
}

export default Services