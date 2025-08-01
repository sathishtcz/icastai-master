import { FaPhoneAlt } from "react-icons/fa";
import { PiStarFourFill } from 'react-icons/pi';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contactus() {

    const [formData, setFormData] = useState({
        firstname: '',
        secondname: '',
        number: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('firstname', formData.firstname);
            formDataToSend.append('secondname', formData.secondname);
            formDataToSend.append('number', formData.number);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('message', formData.message);

            // if (formData.Paper_File) {
            //     formDataToSend.append('Paper_File', formData.Paper_File);
            // }

            const response = await fetch('https://icastai.com/api/contact.php', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({
                    firstname: '',
                    secondname: '',
                    number: '',
                    email: '',
                    message: '',
                });
                toast.success("Form submitted successfully!");
            } else {
                setStatus('Failed to send submission. Please try again.');
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    };


    return (
        <>
            <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto mt-20 px-3">
                <div className="flex flex-col gap-2  items-center">
                    <h1 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Contact Us</h1>
                    <div className="hidden lg:block">
                        <div className="flex flex-row justify-between gap-2 items-center ">
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[60px]' />
                            <PiStarFourFill className='text-[#E0048B] logo-spin' />
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[60px]' />
                        </div>
                    </div>
                </div>

                <div className="lg:mt-7 mt-4">
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">We’re here to help with any questions about the International Conference on Advanced Smart Technologies and AI Innovations—whether they involve registration, paper submissions, sponsorship opportunities, travel logistics, or general participation.</p>
                </div>
            </div>

            {/* contact form */}

            <div className="xl:max-w-[1150px]  md:max-w-[920px] mx-auto lg:mt-8 mt-5 p-3">
                <div className="bg-[#F6D5EA]  rounded-lg p-8">
                    <div className='flex justify-center text-center'>
                        <p className="hanuman-semibold text-xl  lg:text-xl max-w-[55rem]">Have Questions about ICASTAI? We’re here to help! Feel free to reach out.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-7  mt-8">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col  gap-5">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <input
                                            type="text"
                                            name="firstname"
                                            onChange={handleChange}
                                            value={formData.firstname}
                                            placeholder="Enter Your First Name"
                                            className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="secondname"
                                            onChange={handleChange}
                                            value={formData.secondname}
                                            required
                                            placeholder="Enter Your Last Name "
                                            className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            required
                                            name="email"
                                            onChange={handleChange}
                                            value={formData.email}
                                            placeholder="Enter Your Email"
                                            className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            required
                                            name="number"
                                            onChange={handleChange}
                                            value={formData.number}
                                            placeholder="Enter Your Phone Number"
                                            className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                        />
                                    </div>
                                    <div className='lg:col-span-2'>
                                        <textarea
                                            type="textarea"
                                            required
                                            name="message"
                                            onChange={handleChange}
                                            value={formData.message}
                                            placeholder="Enter Your message"
                                            className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                            rows="5"
                                        >

                                        </textarea>
                                    </div>
                                </div>
                                <div className="flex ">
                                     
                                        <button type="submit" disabled={status === 'Sending...'} className="bg-[#1F1F1F] cursor-pointer inter-medium text-base lg:text-[17px] text-white transition-all duration-200 py-1 px-3 rounded">{status === 'Sending...' ? 'Submitting...' : 'Submit'}</button>
                                    
                                </div>
                            </div>
                        </form>

                        <div className="flex flex-col lg:gap-10 gap-5">
                            <p className="hanuman-semibold text-xl  lg:text-xl">
                                We would love to hear from you!
                            </p>

                            {/* Phone */}
                            {/* <div className="flex flex-row items-start gap-3">
                                <FaPhoneAlt className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#E0048B] flex-shrink-0 mt-1' />
                                <div className="flex flex-col gap-1">
                                    <p className="inter-semibold text-lg">Phone</p>
                                    <p className="inter-medium sm:text-base md:text-lg lg:text-[16px] text-gray-700 break-words">+91 0101010101</p>
                                </div>
                            </div> */}

                            {/* Email */}
                            <div className="flex flex-row items-start gap-3">
                                <IoIosMail className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#E0048B] flex-shrink-0 mt-1' />
                                <div className="flex flex-col gap-1">
                                    <p className="inter-semibold text-lg">Email</p>
                                    <p className="inter-medium sm:text-base md:text-lg lg:text-[16px] text-gray-700 break-words">info.icastai@gmail.com</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex flex-row items-start gap-3">
                                <FaLocationDot className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#E0048B] flex-shrink-0 mt-1' />
                                <div className="flex flex-col gap-1">
                                    <p className="inter-semibold text-lg">Location</p>
                                    <p className="inter-medium sm:text-base md:text-lg lg:text-[16px] text-gray-700 break-words">Ang Mo Kio, Singapore</p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}
