import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoIosMail } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#72248C] text-white rounded-tl-lg rounded-tr-lg">
      <div className=" mx-auto px-5 max-w-[92rem]  lg:py-10 py-5">
        <div className="grid grid-cols-1  md:grid-cols-4 sm:grid-cols-2 md:gap-8 gap-4">
          <div className='text-start md:text-left flex flex-col justify-center items-start'>
            <Link to='/'>

              <img className='w-40 md:mx-0 mx-auto bg-white rounded px-2 py-1' src="/assets/images/Logo.png" alt="logo" />
            </Link>
            {/* <Link to="/" className="text-white text-4xl inter-bold">
              ICASTAI
            </Link> */}
          </div>
          <div className='lg:mx-auto md:text-left text-start '>
            <h4 className="lg:text-xl text-lg font-bold mb-2 ">Quick Links</h4>
            <ul className=' lg:text-base list-disc list-inside '>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a className="hover:underline w-fit"> <Link to='/about'>About the Conference</Link></a></li>
              <li><a className="hover:underline"><Link to='/scope'>Scope</Link> </a></li>
              <li><a className="hover:underline"><Link to='/organizing-committee'>Organization Committee</Link></a></li>
              <li><a className="hover:underline"><Link to='/editorial-board'>Editorial Board</Link> </a></li>
            </ul>
          </div>
          <div className='lg:ml-auto  md:text-left text-start  '>
            <div className='flex gap-4 flex-wrap justify-start items-end '>
              <div className=''>
                <h4 className="lg:text-xl text-lg font-bold mb-2 ">Registration Guide</h4>
                <ul className="lg:text-base list-disc list-inside">
                  <li><a className="hover:underline"><Link to='/key-dates'>Key Dates</Link> </a></li>
                  <li><a className="hover:underline"><Link to='/conference-tracks'>Conference Tracks</Link></a></li>
                  <li><a className="hover:underline"><Link to='/paper-submission'>Paper submission </Link>  </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='lg:ml-auto  md:text-left text-start  '>
            <div className='flex gap-4 flex-wrap justify-start items-end '>
              <div className=''>
                <h4 className="lg:text-xl text-lg font-bold mb-2 ">Contact Info</h4>
                <ul className="lg:text-base ">
                  <li><a className="hover:underline"><Link to='' className='flex gap-2 items-center'><IoLocationSharp className='text-lg'/>Ang Mo Kio, Singapore</Link></a></li>
                  <li className='wrap-anywhere xl:wrap-normal'><a className="hover:underline"><Link to='' className='flex gap-2 items-center'><IoIosMail className="text-lg"/>info.icastai@gmail.com</Link></a></li>
                  {/* <li><a className="hover:underline"><Link to='' className='flex gap-2 items-center'><BiSolidPhoneCall   className='text-lg'/>+91 0101010101</Link></a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="bg-white h-[1px]   mx-auto  "></h1>
      <div className='grid lg:grid-cols-3 grid-cols-1  items-center    py-3  '>
        <div>
        </div>
        <div className="text-center md:text-base">
          <p>© 2025 <span className='hover:underline' > <Link to="/" target='_blank'>ICASTAI </Link> </span> . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
