import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { GoDatabase } from 'react-icons/go'
import { IoIosCloudOutline } from 'react-icons/io'
import { LuMonitorSmartphone } from 'react-icons/lu'
import { MdSecurity, MdSignalWifiStatusbarConnectedNoInternet2 } from 'react-icons/md'
import { PiStarFourFill, PiUsersThreeLight } from 'react-icons/pi'
import { RiLightbulbFlashLine, RiRobot2Line } from 'react-icons/ri'
import { SlGlobe } from 'react-icons/sl'

export default function ConferenceTracks() {
    return (
        <>
            <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto mt-20 px-3">
                <div className="flex flex-col gap-2  items-center">
                    <h1 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Conference Tracks</h1>
                    <div className="hidden lg:block">
                        <div className="flex flex-row justify-between gap-2 items-center ">
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[130px]' />
                            <PiStarFourFill className='text-[#E0048B] logo-spin' />
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[130px]' />
                        </div>
                    </div>
                </div>

                <div className="lg:mt-7 mt-4">
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The International Conference on Advanced Smart Technologies and AI Innovations features a diverse range of technical tracks designed to explore the latest research, trends, and applications in the fields of artificial intelligence and smart technologies. These tracks aim to foster interdisciplinary collaboration and spark new ideas that can shape the future of innovation.</p>
                </div>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 lg:mt-10 mt-5 xl:max-w-[1500px]  md:max-w-[920px] mx-auto p-3 h-full">
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-4 rounded-2xl overflow-hidden flex flex-col h-full">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <RiLightbulbFlashLine className="text-white text-4xl" />
                            </div>
                            <p className="inter-semibold text-xl text-black">Artificial Intelligence </p>
                        </div>
                        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Explore advancements in neural networks, generative models, NLP, and AI-powered decision systems across industries.
</p>
                    </div>
                </div>

                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-4 rounded-2xl overflow-hidden flex flex-col h-full">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <LuMonitorSmartphone  className="text-white text-4xl" />
                            </div>
                            <p className="inter-semibold text-xl text-black"> Smart Technologies</p>
                        </div>
                        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Focuses on smart cities, healthcare, and automation powered by adaptive and embedded intelligent systems.</p>
                    </div>
                </div>

                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-4 rounded-2xl overflow-hidden flex flex-col h-full">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <MdSignalWifiStatusbarConnectedNoInternet2  className="text-white text-4xl" />
                            </div>
                            <p className="inter-semibold text-xl text-black">IoT</p>
                        </div>
                        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Covers sensor networks, IoT frameworks, and real-time data processing at the edge for faster, smarter responses.</p>
                    </div>
                </div>

                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-4 rounded-2xl overflow-hidden flex flex-col h-full">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <RiRobot2Line  className="text-white text-4xl" />
                            </div>
                            <p className="inter-semibold text-xl text-black">Robotics </p>
                        </div>
                        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Discusses innovations in autonomous machines, robotics in industry and healthcare, and human-robot collaboration.</p>
                    </div>
                </div>

                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-4 rounded-2xl overflow-hidden flex flex-col h-full">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <GoDatabase  className="text-white text-4xl" />
                            </div>
                            <p className="inter-semibold text-xl text-black">Big Data</p>
                        </div>
                        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Delve into data mining, modeling, and visualization techniques that drive smart predictions and informed decisions.</p>
                    </div>
                </div>

                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-4 rounded-2xl overflow-hidden flex flex-col h-full">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <MdSecurity  className="text-white text-4xl" />
                            </div>
                            <p className="inter-semibold text-xl text-black">Cybersecurity & Blockchain</p>
                        </div>
                        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Highlights AI-driven security, blockchain solutions, privacy protection, and secure data management systems.</p>
                    </div>
                </div>

                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-4 rounded-2xl overflow-hidden flex flex-col h-full">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <IoIosCloudOutline  className="text-white text-4xl" />
                            </div>
                            <p className="inter-semibold text-xl text-black">Cloud </p>
                        </div>
                        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Focuses on scalable computing for AI workloads, cloud-edge synergy, and next-gen processing power including quantum.</p>
                    </div>
                </div>

                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-4 rounded-2xl overflow-hidden flex flex-col h-full">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <BsPerson  className="text-white text-4xl" />
                            </div>
                            <p className="inter-semibold text-xl text-black">Human-Centered & Ethical AI</p>
                        </div>
                        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Explores responsible AI, bias mitigation, user experience design, and policies shaping inclusive intelligent systems.</p>
                    </div>
                </div>

                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-4 rounded-2xl overflow-hidden flex flex-col h-full">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <SlGlobe className="text-white text-4xl" />
                            </div>
                            <p className="inter-semibold text-xl text-black"> Real-World Applications</p>
                        </div>
                        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Focuses on the practical deployment of AI and smart technologies across sectors such as healthcare, agriculture, manufacturing, finance, education, and transportation.</p>
                    </div>
                </div>

            </div>
        </>
    )
}
