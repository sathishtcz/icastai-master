import React from 'react'
import { GoDiscussionClosed, GoDotFill } from 'react-icons/go'
import { GrWorkshop } from 'react-icons/gr';
import { MdSlideshow } from 'react-icons/md';
import { PiNewspaper, PiPresentationLight, PiStarFourFill } from 'react-icons/pi'
import { PiUsersThreeLight } from "react-icons/pi";

export default function Scope() {
    return (
        <>
            <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto mt-20 px-3">
                <div className="flex flex-col gap-2  items-center">
                    <h1 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Scope Of Our Conference</h1>
                    <div className="hidden lg:block">
                        <div className="flex flex-row justify-between gap-2 items-center ">
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[180px]' />
                            <PiStarFourFill className='text-[#E0048B] logo-spin' />
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[170px]' />
                        </div>
                    </div>
                </div>
                <h2 className="hanuman-semibold text-xl lg:text-2xl lg:mt-7 mt-4">International Conference on Advanced Smart Technologies and AI Innovations</h2>
                <div className="lg:mt-7 mt-4">
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The International Conference on Advanced Smart Technologies and AI Innovations aims to serve as a dynamic platform for academic researchers, industry experts, and innovators to explore and share developments across a wide spectrum of emerging technologies. The conference focuses on interdisciplinary research and applications that are driving the next wave of intelligent automation and digital transformation.</p>
                    <div className="lg:mt-7 mt-4 flex flex-col gap-6">
                        <p className="inter-medium text-xl">Key areas within the scope of the conference include (but are not limited to):</p>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1">
                                <div className="flex gap-2 items-center">
                                    <GoDotFill className="text-[#ce1687] text-xl" />
                                    <p className="inter-semibold text-lg">Artificial Intelligence & Machine Learning</p>
                                </div>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ml-7">Deep learning, neural networks, generative AI, natural language processing, and ethical AI systems.</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex gap-2 items-center">
                                    <GoDotFill className="text-[#ce1687] text-xl" />
                                    <p className="inter-semibold text-lg">Advanced Computing</p>
                                </div>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ml-7">High-performance computing, cloud computing, edge computing, and quantum computing applications.</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex gap-2 items-center">
                                    <GoDotFill className="text-[#ce1687] text-xl" />
                                    <p className="inter-semibold text-lg">Human-Centered Design & Innovation</p>
                                </div>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ml-7">UX/UI in AI systems, responsible AI, human-in-the-loop systems, and ethical design principles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-center lg:mt-10 mt-5">Session Types & Formats</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 lg:mt-10 mt-5 xl:max-w-[950px]  md:max-w-[720px] mx-auto p-3">
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-4 rounded-2xl overflow-hidden h-full flex flex-col" >
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <PiUsersThreeLight className="text-white text-4xl" />
                            </div>
                            <p className="inter-medium text-lg text-black">Keynote Sessions</p>
                            <div className="p-[2px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                                <div className="bg-white p-1 rounded-sm overflow-hidden">6 Sessions</div>
                            </div>
                        </div>
                        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Inspiring talks from world-renowned experts and industry leaders.</p>
                    </div>
                </div>
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-4 rounded-2xl overflow-hidden h-full flex flex-col">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <PiPresentationLight  className="text-white text-4xl" />
                            </div>
                            <p className="inter-medium text-lg text-black">Presentations</p>
                            <div className="p-[2px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                                <div className="bg-white p-1 rounded-sm overflow-hidden"><p className="">100+ Papers</p></div>
                            </div>
                        </div>
                        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Peer-reviewed research papers presenting latest findings.</p>
                    </div>
                </div>
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-4 rounded-2xl overflow-hidden h-full flex flex-col">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <GoDiscussionClosed  className="text-white text-4xl" />
                            </div>
                            <p className="inter-medium text-lg text-black">Panel Discussions</p>
                            <div className="p-[2px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                                <div className="bg-white p-1 rounded-sm overflow-hidden">12 Panels</div>
                            </div>
                        </div>
                        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Interactive discussions on current trends and future directions.</p>
                    </div>
                </div>
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-4 rounded-2xl overflow-hidden h-full flex flex-col">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <GrWorkshop  className="text-white text-4xl" />
                            </div>
                            <p className="inter-medium text-lg text-black">Workshop Sessions</p>
                            <div className="p-[2px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                                <div className="bg-white p-1 rounded-sm overflow-hidden">20 Workshops</div>
                            </div>
                        </div>
                        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Hands-on workshops training sessions and practical training sessions.</p>
                    </div>
                </div>
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-4 rounded-2xl overflow-hidden h-full flex flex-col">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <PiNewspaper  className="text-white text-4xl" />
                            </div>
                            <p className="inter-medium text-lg text-black">Poster Sessions</p>
                            <div className="p-[2px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                                <div className="bg-white p-1 rounded-sm overflow-hidden"><p className="">150+ Posters</p></div>
                            </div>
                        </div>
                        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Visual presentations of ongoing research and projects.</p>
                    </div>
                </div>
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-4 rounded-2xl overflow-hidden h-full flex flex-col">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <MdSlideshow  className="text-white text-4xl" />
                            </div>
                            <p className="inter-medium text-lg text-black">Industry Showcases</p>
                            <div className="p-[2px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                                <div className="bg-white p-1 rounded-sm overflow-hidden">30+ Exhibitors</div>
                            </div>
                        </div>
                        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Latest products, solutions, and innovations from industry partners.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

