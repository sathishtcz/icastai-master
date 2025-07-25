import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { PiStarFourFill } from 'react-icons/pi'

export default function Keydates() {
  return (
    <>
      <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto mt-20 px-3">
        <div className="flex flex-col gap-2  items-center">
          <h1 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Important Dates & Bank Details</h1>
          <div className="hidden lg:block">
            <div className="flex flex-row justify-between gap-2 items-center ">
              <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[240px]' />
              <PiStarFourFill className='text-[#E0048B] logo-spin' />
              <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[240px]' />
            </div>
          </div>
        </div>

        <div className="lg:mt-7 mt-4">
          <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Stay informed and plan ahead with the important dates and registration information for the International Conference on Advanced Smart Technologies and AI Innovations. Ensure you don’t miss key deadlines for abstract submission, paper acceptance, and early registration to make the most of this premier opportunity to connect, present, and grow in the field of smart technologies and AI early registration to make the most of this premier opportunity to connect.</p>
        </div>
      </div>

      <div className="xl:max-w-[1300px]  md:max-w-[920px] mx-auto p-3 lg:mt-8 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center lg:gap-15 gap-10 justify-content-center">
          <div className='lg:col-span-2'>
            <div className="flex flex-col gap-5">
              <p className="inter-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent">Key Dates </p>
              <p className="hanuman-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl">Gear Up for Greatness: Key Dates Ahead</p>
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Stay ahead and make the most of your conference experience by keeping track of these important milestones. Whether you're submitting a paper, registering as a participant, or planning your travel, these dates will guide your journey toward the International Conference on Advanced Smart Technologies and AI Innovations.</p>
            </div>

            <div className="space-y-5 mt-8 max-w-3xl">
              {[
                ['Abstract Submission Deadline', 'June 10, 2025'],
                ['Full Paper Submission Deadline', 'June 10, 2025'],
                ['Notification of Acceptance', 'July 15, 2025'],
                ['Final Paper Submission', 'July 30, 2025'],
                ['Registration Deadline', 'August 1, 2025'],
                ['Conference Dates', 'August 24, 2025'],
              ].map(([label, value], index) => (
                <div key={index} className="flex gap-2 items-start">
                  <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                  <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[260px_1fr] gap-2">
                    <p className="inter-semibold text-md text-gray-900">{label} </p>
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] leading-[30px]">: {value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block mt-8">
              <div className="flex flex-row justify-between gap-2 items-center ">
                <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[395px]' />
                <PiStarFourFill className='text-[#E0048B] logo-spin' />
                <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[395px]' />
              </div>
            </div>
          </div>

          <div className='lg:block hidden'>
            <img src="/assets/images/keydate.jpg" alt="Aboutimage" />
          </div>
        </div>
      </div>

      {/* <div className="xl:max-w-[1300px]  md:max-w-[920px] mx-auto p-3 lg:mt-8 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center lg:gap-15 gap-10 justify-content-center">
          
          <div className='lg:block hidden'>
            <img src="/assets/images/keydate2.jpg" alt="Aboutimage" />
          </div>
          
          <div className='lg:col-span-2'>
            <div className="flex flex-col gap-5">
              <p className="inter-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent">Registration Details </p>
              <p className="hanuman-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl">Claim Your Seat at the Future for Innovation</p>
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Join global innovators, researchers, and thought leaders at the International Conference on Advanced Smart Technologies and AI Innovations. Be part of transformative discussions, hands-on workshops, and cutting-edge presentations that showcase the latest breakthroughs in AI and smart technology. </p>
            </div>

            <div className="space-y-5 mt-8  max-w-3xl ">
              {[
                ['Account Name', 'ICASTAI Conference'],
                ['Account Number', 'August 10, 2025'],
                ['Branch', 'Chennai'],
                ['IFSC Code', 'TMBL03000045'],
                ['MICR', '605060005'],
              ].map(([label, value], index) => (
                <div key={index} className="flex gap-2 items-start">
                  <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                  <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[260px_1fr] gap-2">
                    <p className="inter-semibold text-md text-gray-900">{label} </p>
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] leading-[30px]">: {value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block mt-8">
              <div className="flex flex-row justify-between gap-2 items-center ">
                <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[395px]' />
                <PiStarFourFill className='text-[#E0048B] logo-spin' />
                <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[395px]' />
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </>
  )
}
