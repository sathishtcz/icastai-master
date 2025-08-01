import React, { useState } from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import { GoDotFill } from 'react-icons/go'
import { PiStarFourFill } from 'react-icons/pi'
import { toast } from 'react-toastify';

export default function PaperSub() {

    const [fileName, setFileName] = useState('Click to Upload Paper');

    // const handleFileChange = (e) => {
    //     if (e.target.files.length > 0) {
    //         setFileName(e.target.files[0].name);
    //     }
    // };

    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [status, setStatus] = useState('');

    // const handleChange = (e) => {
    //     if (e.target.type === 'file') {
    //         setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    //     } else {
    //         setFormData({ ...formData, [e.target.name]: e.target.value });
    //     }
    // };
 const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;

        // For file preview display
        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const journalName = 'icastai';
    // Generate unique ID: journalName + YYYYMMDD + HHMMSS
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
    const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, ''); // HHMMSS
    const uniqueId = `${journalName}_${dateStr}_${timeStr}`;
    
    try {
        const formDataToSend = new FormData();
        formDataToSend.append('Submission_ID', uniqueId);
        formDataToSend.append('Paper_Title', formData.Paper_Title);
        formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
        formDataToSend.append('Email_Address', formData.Email_Address);
        formDataToSend.append('Institution_Name', formData.Institution_Name);
        formDataToSend.append('Paper_Track', formData.Paper_Track);
        
        if (formData.Paper_File) {
            formDataToSend.append('Paper_File', formData.Paper_File);
        }

        const googleSheetsParams = new URLSearchParams();
        googleSheetsParams.append('Submission_ID', uniqueId);
        googleSheetsParams.append('journal_name', journalName);
        googleSheetsParams.append('Paper_Title', formData.Paper_Title);
        googleSheetsParams.append('Author_FUll_Name', formData.Author_FUll_Name);
        googleSheetsParams.append('Email_Address', formData.Email_Address);
        googleSheetsParams.append('Institution_Name', formData.Institution_Name);
        googleSheetsParams.append('Paper_Track', formData.Paper_Track);

        const mailPromise = fetch('https://icastai.com/api/mail.php', {
            method: 'POST',
            body: formDataToSend,
        });

        const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: googleSheetsParams.toString(),
        });

        const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);

        const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
        const sheetsSuccess = sheetsResponse.status === 'fulfilled';
        
        if (sheetsResponse.status === 'rejected') {
            console.error('Sheets request failed:', sheetsResponse.reason);
        }

        if (mailSuccess && sheetsSuccess) {
            setStatus(`Submission successful! Data sent to both email and Google Sheets.`);
            
            setFormData({
                Paper_Title: '',
                Author_FUll_Name: '',
                Email_Address: '',
                Institution_Name: '',
                Paper_Track: '',
                Paper_File: null,
            });
            const fileInput = document.getElementById('Paper_File');
            if (fileInput) {
                fileInput.value = '';
            } else {
                console.error('Element with ID "Paper_File" not found.');
            }
            toast.success(`Paper submitted successfully! `);
            
        } else if (mailSuccess && !sheetsSuccess) {
            setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
            toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');
            
        } else if (!mailSuccess && sheetsSuccess) {
            setStatus('Data likely saved to Google Sheets, but failed to send email.');
            toast.warning('Data might be saved to Google Sheets, but failed to send email.');
            
        } else {
            setStatus('There might be issues with the submission. Please check manually.');
            toast.error('Submission completed, but please verify the results manually.');
        }

    } catch (error) {
        console.error('Error:', error);
        setStatus('An error occurred during submission. Please try again.');
        toast.error('An error occurred. Please try again.');
    }
}
    return (
        <>
            <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto mt-20 px-3 mb-10">
                <div className="flex flex-col gap-2  items-center">
                    <h1 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Paper Submission</h1>
                    <div className="hidden lg:block">
                        <div className="flex flex-row justify-between gap-2 items-center ">
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[125px]' />
                            <PiStarFourFill className='text-[#E0048B] logo-spin' />
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[125px]' />
                        </div>
                    </div>
                </div>

                <div className="lg:mt-7 mt-4">
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">We’re here to help with any questions about the International Conference on Advanced Smart Technologies and AI Innovations—whether they involve registration, paper submissions, sponsorship opportunities, travel logistics, or general participation.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:mt-10 mt-5">
                    <div className="flex flex-col gap-5">
                        <div>
                            <div className="flex flex-col gap-3">
                                <p className="inter-medium text-lg">Submission Guidelines:</p>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Provide the title of your paper, which should be descriptive and concise.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter the full name of the first author as it appears on the paper.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter a valid mobile number (10-15 digits, country code optional).</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Provide a working email address for the first author to receive notifications.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter the name of the institution the first author is affiliated with.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Choose the relevant category for the first author.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Ensure your paper is in PDF or DOC format and does not exceed 5MB in size.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-3 ">
                                <p className="inter-medium text-lg">Important Notes:</p>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">All papers undergo a double-blind peer review process.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">At least one author must register for the conference.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Plagiarism checks will be performed.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Multiple submissions are not allowed.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Plagiarism checks will be performed.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Multiple submissions are not allowed.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Authors must present accepted papers at the conference.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Papers will be published in the conference proceedings.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="p-6 border border-pink-300 rounded-lg">
                        <h2 className="text-lg font-semibold mb-8">Submit Your Paper</h2>
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <input
                                type="text"
                                name='Paper_Title'
                                value={formData.Paper_Title}
                                onChange={handleFileInputChange}
                                required
                                placeholder="Enter Your Paper Title"
                                className="w-full border border-pink-300 focus:outline-none  rounded-xl px-3 py-3"
                            />
                            <input
                                type="text"
                                name='Institution_Name'
                                value={formData.Institution_Name}
                                onChange={handleFileInputChange}
                                required
                                placeholder="Enter Your Institution Name"
                                className="w-full border border-pink-300 focus:outline-none  rounded-xl px-3 py-3"
                            />
                            <div className="flex flex-col xl:flex-row gap-4">
                                <input
                                    name='Author_FUll_Name'
                                    value={formData.Author_FUll_Name}
                                    onChange={handleFileInputChange}
                                    required
                                    type="text"
                                    placeholder="Enter Author’s Full Name"
                                    className="flex-1 border border-pink-300 focus:outline-none  rounded-xl px-3 py-3"
                                />
                                <input
                                    type="email"
                                    name='Email_Address'
                                    value={formData.Email_Address}
                                    onChange={handleFileInputChange}
                                    required
                                    placeholder="Enter Author’s Email"
                                    className="flex-1 border border-pink-300 focus:outline-none  rounded-xl px-3 py-3"
                                />
                            </div>
                            <select name='Paper_Track' value={formData.Paper_Track} onChange={handleFileInputChange}
                                required className="w-full border border-pink-300 focus:outline-none  rounded-xl px-3 py-3 text-gray-500">
                                <option value="">Select Your Category</option>
                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                <option value="Smart Technologies">Smart Technologies</option>
                                <option value="IoT">IoT</option>
                                <option value="Robotics">Robotics</option>
                                <option value="Big Data">Big Data</option>
                                <option value="Cybersecurity & Blockchain">Cybersecurity & Blockchain</option>
                                <option value="Cloud">Cloud</option>
                                <option value="Human-Centered & Ethical AI">Human-Centered & Ethical AI</option>
                                <option value="Real-World Applications">Real-World Applications</option>
                            </select>
                            <div className="relative w-full border-2 border-dashed border-pink-300 rounded-xl py-10 flex flex-col items-center justify-center text-center text-gray-500 overflow-hidden cursor-pointer">
                                <input
                                    name='Paper_File'
                                    // onChange={handleChange}
                                    accept=".pdf,.doc,.docx"
                                    type="file"
                                     onChange={handleFileInputChange}
                                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                />
                                <FiUploadCloud className="text-3xl text-pink-500 mb-2 z-0" />
                                <p className="z-0">{fileName || "Click to Upload Paper"}</p>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'Sending...'}
                                className="w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-800 mt-4 cursor-pointer"
                            >
                                {status === 'Sending...' ? 'Submitting...' : 'Submit Your Paper'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
