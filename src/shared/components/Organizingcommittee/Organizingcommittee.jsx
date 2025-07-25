
import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { PiStarFourFill } from 'react-icons/pi'

export default function Organizingcommittee() {
  return (
    <>
      <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto mt-20 px-3">
        <div className="flex flex-col gap-2  items-center">
          <h1 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Organizing Committee</h1>
          <div className="hidden lg:block">
            <div className="flex flex-row justify-between gap-2 items-center ">
              <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[160px]' />
              <PiStarFourFill className='text-[#E0048B] logo-spin' />
              <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[160px]' />
            </div>
          </div>
        </div>
        <div className="lg:mt-7 mt-4">
          <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The Organizing Committee of the International Conference on Advanced Smart Technologies and AI Innovations is composed of a dedicated team of academicians, researchers, and professionals committed to delivering a world-class conference experience. Their collective expertise and collaborative efforts ensure the smooth execution of the event and the creation of an enriching environment for knowledge exchange and innovation.</p>
          <div className="lg:mt-7 mt-4 flex flex-col gap-3">
            <p className="inter-medium text-lg">Roles and Responsibilities:</p>

            <div className="flex gap-2 items-start">
              <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Planning and coordinating all aspects of the conference logistics and execution.</p>
            </div>



            <div className="flex gap-2 items-start">
              <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Curating technical sessions, workshops, and keynote addresses.</p>
            </div>




            <div className="flex gap-2 items-start">
              <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Managing the paper submission, review, and acceptance process.</p>
            </div>




            <div className="flex gap-2 items-start">
              <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Facilitating communication with participants, speakers, and partners.</p>
            </div>

          </div>

        </div>
      </div>

      {/* <div className="xl:max-w-[1300px]  md:max-w-[920px] mx-auto mt-15 px-3">
        <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
          <div className="bg-white p-5 rounded-xl overflow-hidden">
            <div className='text-center'>
              <p className="hanuman-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl">Meet the team behind <span className="bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent">ICASTAI </span>2025</p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 max-w-[70rem] gap-10 mt-10 mx-auto">
              <div className="border border-gray-400 p-4 rounded-lg">
                <div className="grid lg:grid-cols-2 items-center gap-10">
                  <div className='flex flex-col gap-4'>
                    <p className="hanuman-semibold text-xl sm:text-2xl md:text-2xl lg:text-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent">Chairman</p>
                    <div className="flex flex-col gap-2">
                      <p><span className="inter-medium text-md text-gray-900">Name :</span> <span className='text-gray-600 inter-regular'>Dr John Smith</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Position :</span> <span className='text-gray-600 inter-regular'>Principal</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Qualification :</span> <span className='text-gray-600 inter-regular'>M.E., Ph.D.,</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Location :</span> <span className='text-gray-600 inter-regular'>Chennai</span></p>
                    </div>
                  </div>
                  <div className="lg:block hidden"><img src="/assets/images/committee.jpg" alt="committee" className='w-40 h-40' /></div>
                </div>
              </div>

              <div className="border border-gray-400 p-4 rounded-lg">
                <div className="grid lg:grid-cols-2 items-center gap-10">
                  <div className='flex flex-col gap-4'>
                    <p className="hanuman-semibold text-xl sm:text-2xl md:text-2xl lg:text-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent">Convenors</p>
                    <div className="flex flex-col gap-2">
                      <p><span className="inter-medium text-md text-gray-900">Name :</span> <span className='text-gray-600 inter-regular'>Dr John Smith</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Position :</span> <span className='text-gray-600 inter-regular'>Principal</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Qualification :</span> <span className='text-gray-600 inter-regular'>M.E., Ph.D.,</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Location :</span> <span className='text-gray-600 inter-regular'>Chennai</span></p>
                    </div>
                  </div>
                  <div className="lg:block hidden"><img src="/assets/images/committee.jpg" alt="committee" className='w-40 h-40' /></div>
                </div>
              </div>

              <div className="border border-gray-400 p-4 rounded-lg">
                <div className="grid lg:grid-cols-2 items-center gap-10">
                  <div className='flex flex-col gap-4'>
                    <p className="hanuman-semibold text-xl sm:text-2xl md:text-2xl lg:text-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent">Convenors</p>
                    <div className="flex flex-col gap-2">
                      <p><span className="inter-medium text-md text-gray-900">Name :</span> <span className='text-gray-600 inter-regular'>Dr John Smith</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Position :</span> <span className='text-gray-600 inter-regular'>Principal</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Qualification :</span> <span className='text-gray-600 inter-regular'>M.E., Ph.D.,</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Location :</span> <span className='text-gray-600 inter-regular'>Chennai</span></p>
                    </div>
                  </div>
                  <div className="lg:block hidden"><img src="/assets/images/committee.jpg" alt="committee" className='w-40 h-40' /></div>
                </div>
              </div>

              <div className="border border-gray-400 p-4 rounded-lg">
                <div className="grid lg:grid-cols-2 items-center gap-10">
                  <div className='flex flex-col gap-4'>
                    <p className="hanuman-semibold text-xl sm:text-2xl md:text-2xl lg:text-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent">Coordinators</p>
                    <div className="flex flex-col gap-2">
                      <p><span className="inter-medium text-md text-gray-900">Name :</span> <span className='text-gray-600 inter-regular'>Dr John Smith</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Position :</span> <span className='text-gray-600 inter-regular'>Principal</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Qualification :</span> <span className='text-gray-600 inter-regular'>M.E., Ph.D.,</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Location :</span> <span className='text-gray-600 inter-regular'>Chennai</span></p>
                    </div>
                  </div>
                  <div className="lg:block hidden"><img src="/assets/images/committee.jpg" alt="committee" className='w-40 h-40' /></div>
                </div>
              </div>

              <div className="border border-gray-400 p-4 rounded-lg">
                <div className="grid lg:grid-cols-2 items-center gap-10">
                  <div className='flex flex-col gap-4'>
                    <p className="hanuman-semibold text-xl sm:text-2xl md:text-2xl lg:text-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent">Members</p>
                    <div className="flex flex-col gap-2">
                      <p><span className="inter-medium text-md text-gray-900">Name :</span> <span className='text-gray-600 inter-regular'>Dr John Smith</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Position :</span> <span className='text-gray-600 inter-regular'>Principal</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Qualification :</span> <span className='text-gray-600 inter-regular'>M.E., Ph.D.,</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Location :</span> <span className='text-gray-600 inter-regular'>Chennai</span></p>
                    </div>
                  </div>
                  <div className="lg:block hidden"><img src="/assets/images/committee.jpg" alt="committee" className='w-40 h-40' /></div>
                </div>
              </div>

              <div className="border border-gray-400 p-4 rounded-lg">
                <div className="grid lg:grid-cols-2 items-center gap-10">
                  <div className='flex flex-col gap-4'>
                    <p className="hanuman-semibold text-xl sm:text-2xl md:text-2xl lg:text-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent">Members</p>
                    <div className="flex flex-col gap-2">
                      <p><span className="inter-medium text-md text-gray-900">Name :</span> <span className='text-gray-600 inter-regular'>Dr John Smith</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Position :</span> <span className='text-gray-600 inter-regular'>Principal</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Qualification :</span> <span className='text-gray-600 inter-regular'>M.E., Ph.D.,</span></p>
                      <p><span className="inter-medium text-md text-gray-900">Location :</span> <span className='text-gray-600 inter-regular'>Chennai</span></p>
                    </div>
                  </div>
                  <div className="lg:block hidden"><img src="/assets/images/committee.jpg" alt="committee" className='w-40 h-40' /></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
