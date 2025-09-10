import { PiCalendarCheckFill } from "react-icons/pi";
import { IoCalendarClearOutline, IoLocationOutline, IoNewspaperOutline, IoTimeOutline } from "react-icons/io5";
import { RxSpeakerLoud } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { SlGlobe } from "react-icons/sl";

function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto mt-20 px-3 lg:block hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-15 gap-5">
          <div className="flex justify-center items-end">
            <img src="/assets/images/hero.jpg" alt="heroimage" className='w-[720px] object-contain' />
          </div>
          <div className="flex flex-col justify-center gap-6 lg:gap-7 2xl:gap-10">
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 '>
              <button className='bg-[#1F1F1F] text-white px-2 py-2 rounded flex items-center justify-center gap-2  sm:gap-2 md:gap-3 '>
                <PiCalendarCheckFill className='text-lg  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl' />
                <p className="text-base lg:text-sm xl:text-lg">March 31, 2025 </p>
              </button>
              <button className='bg-[#1F1F1F] text-white px-2 py-2 rounded flex items-center justify-center gap-2 xs:gap-1 sm:gap-2 md:gap-3 '>
                <IoLocationOutline className='text-lg  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl' />
                <p className="text-base lg:text-sm xl:text-lg">Ang Mo Kio, Singapore</p>
              </button>
            </div>

            <div className="hanuman-semibold max-w-3xl  text-2xl sm:text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl">
              <h1 className="bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent lg:leading-9 xl:leading-14 md:leading-10 sm:leading-9 leading-9">International Conference on Advanced Smart Technologies and AI Innovations</h1>
            </div>

            <div className="">
              <h2 className="inter-medium lg:text-2xl text-lg">Exploring Innovation, Shaping the Future of Technology</h2>
            </div>

            <div className="">
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Join us at the International Conference on Advanced Smart Technologies and AI Innovations, where leading researchers, industry professionals, and academic scholars come together to explore groundbreaking advancements.</p>
            </div>

            <div className="flex  mb-[15px]  ">
              <div onClick={() => navigate('/paper-submission')} className="btn hover-border cursor-pointer">
                <button className="bg-[#1F1F1F] inter-medium text-base lg:text-[17px] text-white transition-all duration-200 py-2 px-2 rounded cursor-pointer">Register Here </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto mt-24 px-3 lg:hidden block">
        <div className="flex flex-col justify-center gap-[20px]">
          <div className="hanuman-semibold text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
            <h1 className="bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent md:leading-12">International Conference on Advanced Smart Technologies and AI Innovations</h1>
          </div>

          <div className='flex flex-row gap-3 sm:gap-4 md:gap-6 '>
            <button className='bg-[#1F1F1F] text-white px-2 py-2 rounded flex items-center justify-center gap-2 xs:gap-1 sm:gap-2 md:gap-3 '>
              <PiCalendarCheckFill className='text-3xl  xl:text-3xl' />
              <p className="text-sm lg:text-sm xl:text-lg">March 31, 2025 </p>
            </button>
            <button className='bg-[#1F1F1F] text-white px-2 py-2 rounded flex items-center justify-center gap-2 xs:gap-1 sm:gap-2 md:gap-3 '>
              <IoLocationOutline className='text-3xl  xl:text-3xl' />
              <p className="text-sm lg:text-sm xl:text-lg">Ang Mo Kio, Singapore</p>
            </button>
          </div>

          <div className="">
            <h2 className="inter-medium lg:text-2xl text-lg">Exploring Innovation, Shaping the Future of Technology</h2>
          </div>

          <div className="hyphens-auto break-words">
            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Join us at the International Conference on Advanced Smart Technologies and AI Innovations, where leading researchers, industry professionals, and academic scholars come together to explore groundbreaking advancements.</p>
          </div>

          <div className="flex lg:mb-0 mb-[12px]">
            <div onClick={() => navigate('/paper-submission')} className="btn hover-border cursor-pointer">
              <button className="bg-[#1F1F1F] inter-medium text-base lg:text-[17px] text-white transition-all duration-200 py-2 px-2 rounded cursor-pointer">Register Here </button>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E]">
        <div className="grid grid-col-1 sm:grid-col-1 md:grid-cols-3 lg:grid-col-5 xl:grid-cols-5 p-11 max-w-[1500px] mx-auto gap-10">
          <div className="flex flex-col gap-2 justify-center items-center">
            <RxSpeakerLoud className="text-white text-5xl" />
            <p className="inter-semibold text-white">World-Class Speakers</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <FaUsers className="text-white text-5xl" />
            <p className="inter-semibold text-white">Global Community</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <IoNewspaperOutline className="text-white text-5xl" />
            <p className="inter-semibold text-white">Engaging Content</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <AiOutlineFileSearch className="text-white text-5xl" />
            <p className="inter-semibold text-white">Research Excellence</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <RiLightbulbFlashLine className="text-white text-5xl" />
            <p className="inter-semibold text-white">Innovation Showcase</p>
          </div>
        </div>
      </div>


      {/* About the Conference */}
      <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto p-3 lg:mt-18 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-20 gap-10">
          <div className="lg:block hidden">
            <img src="/assets/images/Aboutc.jpg" alt="Aboutimage" className='h-full w-full object-contain ' />
          </div>
          <div className="flex flex-col justify-center items-start gap-8">
            <h2 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-3xl">About the Conference</h2>
            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The International Conference on Advanced Smart Technologies and AI Innovations is a premier global forum that brings together researchers, and technology stakeholders to share insights, present cutting-edge innovations, and explore emerging trends in the fields of Artificial Intelligence, Smart Systems, Robotics, Big Data, and Ethical AI. ASTAI serves as a dynamic platform for fostering interdisciplinary collaboration and driving forward the future of intelligent technology.</p>

            <div className="lg:hidden block ">
              <img src="/assets/images/Aboutc.jpg" alt="Aboutimage" className='h-full w-full object-contain ' />
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                  <GoDotFill className="text-[#ce1687] text-xl" />
                  <p className="inter-semibold text-lg">Focus on Cutting-Edge Innovations</p>
                </div>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ml-7">Covers advanced domains such as smart technologies, artificial intelligence, IoT, robotics, big data, and ethical AI solutions.</p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                  <GoDotFill className="text-[#ce1687] text-xl" />
                  <p className="inter-semibold text-lg">Global Networking</p>
                </div>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ml-7">Fosters impactful connections among researchers, industry experts, academicians, and students from across the globe, encouraging interdisciplinary collaboration and knowledge exchange.</p>
              </div>

              <div className="flex">
                <div onClick={() => navigate('/about')} className="btn hover-border cursor-pointer">
                  <button className="bg-[#1F1F1F] inter-medium text-base lg:text-[17px] text-white transition-all duration-200 py-2 px-2 rounded cursor-pointer">Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto p-3 lg:mt-18 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-20 gap-6 lg:bg-[url('/assets/images/man.png')] lg:bg-no-repeat lg:bg-[length:300px] lg:bg-[position:40%_center]  bg-none">
          <div className="flex flex-col  justify-center gap-6">
            <h2 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-3xl">Our Mission</h2>
            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Our mission is to foster a global platform that empowers researchers, academicians, and industry professionals to share knowledge, drive innovation, and shape the future of computer science.</p>
            <div className="flex lg:justify-start justify-center lg:items-start items-center">
              <img src="/assets/images/Missionn.jpg" alt="Our Mission" className="h-3/4 w-3/4 object-contain" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-10 mt-10">
            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] rounded-lg p-5">
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                  <div className="bg-white p-3 rounded"><HiOutlineLightBulb className="text-3xl text-[#E0048B]" /></div>
                  <h2 className="hanuman-semibold text-xl text-white">Knowledge Sharing</h2>
                </div>
                <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] text-white">Create a global platform for researchers, scholars, and professionals to exchange ideas and findings in computer science.</p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] rounded-lg p-5">
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                  <div className="bg-white p-3 rounded"><SlGlobe className="text-3xl text-[#E0048B]" /></div>
                  <h2 className="hanuman-semibold text-xl text-white">Global Collaboration</h2>
                </div>
                <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] text-white">Bring together participants from diverse backgrounds to build partnerships that drive progress and discovery.</p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] rounded-lg p-5">
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                  <div className="bg-white p-3 rounded"><AiOutlineFileSearch className="text-3xl text-[#E0048B]" /></div>
                  <h2 className="hanuman-semibold text-xl text-white">Research Excellence</h2>
                </div>
                <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] text-white">Support the development of groundbreaking research that pushes the boundaries of current technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Featured Speakers */}
      {/* <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto p-3 lg:mt-18 mt-5">
        <div className="flex flex-col gap-10 justify-center items-center">
          <h2 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-3xl">Our Featured Speakers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="p-[3px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
              <div className="bg-white rounded-md overflow-hidden">
                <img src="/assets/images/Speaker1.jpg" alt="Speaker" className="lg:h-[350px] lg:w-[300px] md:h-[350px] md:w-[300px] sm:h-[200px] sm:w-[150px]  translate-x-6" />
                <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-2 rounded-tl-md rounded-tr-md">
                  <div className="flex flex-col items-center gap-1">
                    <p className="hanuman-semibold text-white text-xl sm:text-2xl md:text-2xl lg:text-2xl">John Matthews</p>
                    <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-white">Senior Research Analyst</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[3px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
              <div className="bg-white rounded-md overflow-hidden">
                <img src="/assets/images/Speaker1.jpg" alt="Speaker" className="lg:h-[350px] lg:w-[300px] md:h-[350px] md:w-[300px] sm:h-[200px] sm:w-[150px] translate-x-6" />
                <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-2 rounded-tl-md rounded-tr-md">
                  <div className="flex flex-col items-center gap-1">
                    <p className="hanuman-semibold text-white text-xl sm:text-2xl md:text-2xl lg:text-2xl">John Matthews</p>
                    <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-white">Senior Research Analyst</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[3px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
              <div className="bg-white rounded-md overflow-hidden">
                <img src="/assets/images/Speaker1.jpg" alt="Speaker" className="lg:h-[350px] lg:w-[300px] md:h-[350px] md:w-[300px] sm:h-[200px] sm:w-[150px] translate-x-6" />
                <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-2 rounded-tl-md rounded-tr-md">
                  <div className="flex flex-col items-center gap-1">
                    <p className="hanuman-semibold text-white text-xl sm:text-2xl md:text-2xl lg:text-2xl">John Matthews</p>
                    <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-white">Senior Research Analyst</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Our Associates 2025 */}
      <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto p-3 lg:mt-15 mt-5">
        <p className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-center">Indexed Journals</p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#E0048B] to-[#83268E] mx-auto mt-2 rounded-full"></div>
        <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700  text-center mt-6 max-w-5xl mx-auto">The Selective accepted papers of our International Conference on Advanced Smart Technologies and AI Innovations will be recommended to publish in the following index & publisher Journals.</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-10 gap-3 mt-10 max-w-[1200px] mx-auto  w-full">
          <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.06)] rounded-md p-3 hover:-translate-y-2 hover:shadow-xl group flex items-center justify-center hover:scale-110 duration-300 border border-gray-100">
            <img src="/assets/images/associates/12.jpg" alt="associates" className=" transition duration-300"/>
          </div>
          <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.06)] rounded-md p-3 hover:-translate-y-2 hover:shadow-xl group flex items-center justify-center hover:scale-110 duration-300 border border-gray-100">
            <img src="/assets/images/associates/2.jpg" alt="associates2" className=" transition duration-300"/>
          </div>
          <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.06)] rounded-md p-3 hover:-translate-y-2 hover:shadow-xl group flex items-center justify-center hover:scale-110 duration-300 border border-gray-100">
            <img src="/assets/images/associates/3.jpg" alt="associates3" className=" transition duration-300"/>
          </div>
          <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.06)] rounded-md p-3 hover:-translate-y-2 hover:shadow-xl group flex items-center justify-center hover:scale-110 duration-300 border border-gray-100 ">
            <img src="/assets/images/associates/4.jpg" alt="associates4" className=" transition duration-300"/>
          </div>
          <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.06)] rounded-md p-3 hover:-translate-y-2 hover:shadow-xl group flex items-center justify-center hover:scale-110 duration-300 border border-gray-100">
            <img src="/assets/images/associates/5.jpg" alt="associates5" className=" transition duration-300"/>
          </div>
          <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.06)] rounded-md p-3 hover:-translate-y-2 hover:shadow-xl group flex items-center justify-center hover:scale-110 duration-300 border border-gray-100">
            <img src="/assets/images/associates/6.jpg" alt="associates6" className=" transition duration-300"/>
          </div>
          <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.06)] rounded-md p-3 hover:-translate-y-2 hover:shadow-xl group flex items-center justify-center hover:scale-110 duration-300 border border-gray-100">
            <img src="/assets/images/associates/scopus.png" alt="associates7" className="w-48  transition duration-300"/>
          </div>
          <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.06)] rounded-md p-3 hover:-translate-y-2 hover:shadow-xl group flex items-center justify-center hover:scale-110 duration-300 border border-gray-100">
            <img src="/assets/images/associates/8.jpg" alt="associates8" className=" transition duration-300"/>
          </div>
          <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.06)] rounded-md p-3 hover:-translate-y-2 hover:shadow-xl group flex items-center justify-center hover:scale-110 duration-300 border border-gray-100">
            <img src="/assets/images/associates/9.jpg" alt="associates9" className=" transition duration-300"/>
          </div>
          <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.06)] rounded-md p-3 hover:-translate-y-2 hover:shadow-xl group flex items-center justify-center hover:scale-110 duration-300 border border-gray-100">
            <img src="/assets/images/associates/10.jpg" alt="associates10" className=" transition duration-300"/>
          </div>
          <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.06)] rounded-md p-3 hover:-translate-y-2 hover:shadow-xl group flex items-center justify-center hover:scale-110 duration-300 border border-gray-100">
            <img src="/assets/images/associates/11.jpg" alt="associates11" className=" transition duration-300"/>
          </div>
        </div>
      </div>

      {/* Join Us at INCOCSA 2025 */}
      <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto p-3 lg:mt-15 mt-5">
        <p className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-center">Join Us at ICASTAI 2025</p>
        <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700  text-center mt-6">Experience groundbreaking research presentations and network with industry leaders</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 max-w-[1100px] mx-auto">
          <div className="bg-[#F6D5EA] rounded-md p-2">
            <div className="flex flex-row items-center gap-2">
              <IoLocationOutline className='text-lg xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#E0048B]' />
              <div className="flex flex-col gap-2">
                <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Location</p>
                <p className="inter-medium sm:text-base md:text-lg lg:text-[16px] text-gray-700">Ang Mo Kio, Singapore</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F6D5EA] p-2 rounded-md">
            <div className="flex flex-row items-center gap-2">
              <IoCalendarClearOutline className='text-lg xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#E0048B]' />
              <div className="flex flex-col gap-2">
                <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Date</p>
                <p className="inter-medium sm:text-base md:text-lg lg:text-[16px] text-gray-700">March 31, 2025</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F6D5EA] p-2 rounded-md">
            <div className="flex flex-row items-center gap-2">
              <IoTimeOutline className='text-lg xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#E0048B]' />
              <div className="flex flex-col gap-2">
                <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Duration</p>
                <p className="inter-medium sm:text-base md:text-lg lg:text-[16px] text-gray-700">9:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage