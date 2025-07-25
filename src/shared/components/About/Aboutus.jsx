import React from 'react'
import { GoDotFill } from 'react-icons/go';
import { PiStarFourFill } from "react-icons/pi";
import { PiUsersThreeLight } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

function Aboutus() {
    return (
        <>
            <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto mt-20 px-3">
                <div className="flex flex-col gap-2  items-center">
                    <h1 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-4xl">About Our Conference</h1>
                    <div className="hidden lg:block">
                        <div className="flex flex-row justify-between gap-2 items-center ">
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[170px]' />
                            <PiStarFourFill className='text-[#E0048B] logo-spin' />
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[160px]' />
                        </div>
                    </div>
                </div>
                <h2 className="hanuman-semibold text-xl lg:text-2xl lg:mt-7 mt-4">International Conference on Advanced Smart Technologies and AI Innovations</h2>
                <div className="lg:mt-7 mt-4">
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The International Conference on Advanced Smart Technologies and AI Innovations serves as a premier platform for researchers, technologists, and industry leaders to explore and exchange insights on the latest advancements in smart technologies and artificial intelligence. This interdisciplinary forum is dedicated to showcasing pioneering research, breakthrough applications, and innovative solutions that are shaping the digital era.</p>
                    <p className='lg:mt-5 mt-4 inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]'>The conference covers a broad spectrum of topics including AI-driven automation, machine learning, intelligent systems, IoT, robotics, smart computing, and data analytics. It encourages cross-sector collaboration to solve real-world challenges and drive technological progress.</p>
                </div>
            </div>

            <div className="xl:max-w-[1300px]  md:max-w-[920px] mx-auto p-3 lg:mt-10 mt-5">
                <p className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-center">Why Attend ICASTAI?</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center lg:gap-15 gap-10 mt-10 justify-content-center">
                    <div className='lg:col-span-2'>
                        <div className="flex flex-col gap-5">
                            <p className="inter-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent">Why to be a part of ICASTAI?</p>
                            <p className="hanuman-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl">Be part of shaping the future of computer science</p>
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The International Conference on Advanced Smart Technologies and AI Innovations is more than just an academic event — it's a gateway to the future of intelligent systems and digital transformation. Here’s why you should be part of it:</p>
                        </div>
                        <div className="flex flex-col gap-5 mt-8">
                            <div className="flex flex-col gap-1">
                                <div className="flex gap-2 items-center">
                                    <GoDotFill className="text-[#ce1687] text-xl" />
                                    <p className="inter-semibold text-lg">Engage with Global Experts</p>
                                </div>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ml-7">Learn from world-renowned speakers, researchers, and industry pioneers driving innovation in smart tech and AI.</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex gap-2 items-center">
                                    <GoDotFill className="text-[#ce1687] text-xl" />
                                    <p className="inter-semibold text-lg">Collaborate and Network</p>
                                </div>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ml-7">Connect with academics, innovators, and practitioners from across the globe to spark new ideas and partnerships.</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex gap-2 items-center">
                                    <GoDotFill className="text-[#ce1687] text-xl" />
                                    <p className="inter-semibold text-lg">Boost Your Career</p>
                                </div>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ml-7">Explore opportunities for publication, research funding, academic recognition, and industry collaboration.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:block hidden'>
                        <img src="/assets/images/whyicastai.jpg" alt="Aboutimage" />
                    </div>
                </div>
            </div>

            <div className="xl:max-w-[1200px]  md:max-w-[920px] mx-auto p-3 lg:mt-15 mt-5">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center lg:gap-10 gap-8">
                    <div className="flex flex-col justify-between items-center">
                        <div><PiUsersThreeLight className='lg:text-8xl text-6xl text-[#E0048B]' /></div>
                        <p className="inter-semibold lg:text-4xl text-2xl">500+</p>
                        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]">Attendees</p>
                    </div>

                    <div className="flex flex-col justify-between items-center">
                        <div><CiGlobe className='lg:text-8xl text-6xl text-[#E0048B]' /></div>
                        <p className="inter-semibold lg:text-4xl text-2xl">50+</p>
                        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]">Countries</p>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <div><IoNewspaperOutline className='lg:text-8xl text-6xl text-[#E0048B]' /></div>
                        <p className="inter-semibold lg:text-4xl text-2xl">100+</p>
                        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]">Papers</p>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <div><CiCalendar className='lg:text-8xl text-6xl text-[#E0048B]' /></div>
                        <p className="inter-semibold lg:text-4xl text-2xl">3+</p>
                        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]">Days</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus