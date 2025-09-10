import React from 'react'
import { FaCircleUser } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go'
import { PiStarFourFill, PiUsersThreeLight } from 'react-icons/pi'

export default function Editorboard() {

    const organizingCommittee = [
        {
            name: "Dr. Meenakshi Gupta",
            department: "Department of Computer Science",
            university: "National University of Singapore",
            location: "Singapore"
        },
        {
            name: "Dr. Junaid Ahmed",
            department: "Department of Information Technology",
            university: "Zhengzhou University",
            location: "China"
        },
        {
            name: "Dr. Nguyen Van Thieu",
            department: "Department of Computer Science",
            university: "Phenikaa University",
            location: "Vietnam"
        },
        {
            name: "Dr. Qian Liu",
            department: "Department of Computer Science and Engineering",
            university: "Krirk University",
            location: "Thailand"
        },
        {
            name: "Dr. Ammar Amjad",
            department: "Department of Information Technology",
            university: "National Yang Ming Chiao Tung University",
            location: "Taiwan"
        },
    ];

    const TechnicalCommittee = [
        {
            name: "Dr. Ernesto Carrillo Arellano",
            department: "Department of Electronics Engineering",
            university: "Metropolitan Autonomous University",
            location: "Mexico"
        },
        {
            name: "Dr. Habchi Yassine",
            department: "Department of Electrical Engineering",
            university: "University Center of Naama",
            location: "Algeria"
        },
        {
            name: "Dr. Shaikh Muhammad Allayear",
            department: "Department of Multimedia and Creative Technology",
            university: "Daffodil International University",
            location: "Bangladesh"
        },
        {
            name: "Dr. Leo John Baptist",
            department: "Department of Information Technology",
            university: "Botho University",
            location: "Botswana"
        },
        {
            name: "Dr. Rogerio Espindola",
            department: "Department of Civil Engineering",
            university: "Federal University of Rio de Janeiro",
            location: "Brazil"
        },
        {
            name: "Dr. Hua Qu",
            department: "Department of Biomedical Engineering and Technology",
            university: "Tianjin Medical University",
            location: "China"
        },
        {
            name: "Dr. Aram Sabr Tahr",
            department: "Department of Computer Science",
            university: "Cyprus International University",
            location: "Cyprus"
        },
        {
            name: "Dr. Sowmipriya Rajendiran",
            department: "Department of Computer Science and Engineering",
            university: "International School of Information Processing Sciences",
            location: "France"
        },
        {
            name: "Dr. Thendral Puyalnithi",
            department: "Department of Computer Science and Engineering",
            university: "Kalasalingam Academy of Research and Education",
            location: "India"
        },
        {
            name: "Dr. Johan Hendri Prasetyo",
            department: "Department of Management Science",
            university: "Universitas Nusa Mandiri",
            location: "Indonesia"
        },
        {
            name: "Dr. Zahra Rezaei",
            department: "Department of Computer Engineering",
            university: "Judiciary Research Institute",
            location: "Iran"
        },
        {
            name: "Dr. Ahmed Alkhayyat",
            department: "Department of Computer Science",
            university: "The Islamic University",
            location: "Iraq"
        },
        {
            name: "Dr. Nour Moustafa",
            department: "Department of Computer Science",
            university: "American University of the Middle East",
            location: "Kuwait"
        },
        {
            name: "Dr. Zouhour El-Abiad",
            department: "Department of Computer Science",
            university: "ESA Business School",
            location: "Lebanon"
        },
        {
            name: "Dr.B. Mohammed ",
            department: "Department Of Finance and Admin Science",
            university: "Al-Madinah International University",
            location: "Malaysia"
        },
        {
            name: "Dr. Wasan Alamro",
            department: "Department of Electrical Engineering",
            university: "Auckland University of Technology",
            location: "New Zealand"
        },
        {
            name: "Dr. Ashok Kumar",
            department: "Department of Computer Science",
            university: "Skyline university",
            location: "Nigeria"
        },
        {
            name: "Dr. Puneet Sharma",
            department: "Department of Automation and Process Engineering",
            university: "The Arctic University of Norway",
            location: "Norway"
        },
        {
            name: "Dr. Asma Kashif Shahzad",
            department: "Department of Information Technology",
            university: "COMSATS University",
            location: "Pakistan"
        },
        {
            name: "Dr. Asma Sbeih",
            department: "Department of Engineering and Information",
            university: "Palestine Ahliya University",
            location: "Palestine"
        },

    ];

    const Advisorycommittee = [
        {
            name: "Dr. Alma Bangayan Manera",
            department: "Department of Electronics and Communication Engineering",
            university: "Cagayan State University",
            location: "Philippines"
        },
        {
            name: "Dr.R. Gayathri",
            department: "Department of Computer Science and Engineering",
            university: "PSNA College Of Engineering and Technology",
            location: "India"
        },
        {
            name: "Dr. Muhammad Asif Khan",
            department: "Department of Information Technology",
            university: "Qatar University",
            location: "Qatar"
        },
        {
            name: "Dr. Brahim Issaoui",
            department: "Department of Industrial Engineering",
            university: "Qassim University",
            location: "Saudi Arabia"
        },
        {
            name: "Dr. Stephen Ekwe",
            department: "Department of Electrical Engineering",
            university: "University of Cape Town",
            location: "South Africa"
        },
        {
            name: "Dr. Mujtaba Korai",
            department: "Department of Computer Engineering",
            university: "Gachon University",
            location: "South Korea"
        },
        {
            name: "Dr.S. Prasanth",
            department: "Department of Physical Sciences and Technology",
            university: "Sabaragamuwa University of Sri Lanka",
            location: "Sri Lanka"
        },
        {
            name: "Dr. Karima Benhamza",
            department: "Department of Computer Science",
            university: "Guelma University",
            location: "Algeria"
        },
        {
            name: "Dr.A. Rama Prasath",
            department: "Department of Computing Sciences",
            university: "Hindustan University",
            location: "India"
        },
        {
            name: "Dr. Twana A. Hamad",
            department: "Department of Computer Engineering",
            university: "Harran University",
            location: "Turkiye"
        },
        {
            name: "Dr. Chinwe Peace Igiri",
            department: "Department of Computer Science",
            university: "Cavendish University",
            location: "Uganda"
        },
        {
            name: "Dr. Sharmin Akter",
            department: "Department of Computer Science and Engineering",
            university: "Daffodil International University",
            location: "Bangladesh"
        },
        {
            name: "Dr.R. Arun Kumar",
            department: "Department of Digital Forensics and Cyber Security",
            university: "University of South Wales",
            location: "United Kingdom"
        },
        {
            name: "Dr. Tejas Dhote",
            department: "Department of Mechanical Engineering",
            university: "Michigan Technological University",
            location: "USA"
        },
        {
            name: "Dr.P. Hemalatha",
            department: "Department of Computer Science",
            university: "IFET College of Engineering",
            location: "India"
        },
        {
            name: "Dr. Sutikno",
            department: "Department of Informatics",
            university: "University of Diponegoro",
            location: "Indonesia"
        },
        {
            name: "Dr. Shakar Ahmed Aziz",
            department: "Department of Mathematics",
            university: "Duhok University",
            location: "Iraq"
        },
        {
            name: "Dr. Gabriel A. Ogunmola",
            department: "Department of Marketing",
            university: "Sharda University",
            location: "Uzbekistan"
        },

        {
            name: "Dr. Nguyen Van Thieu",
            department: "Department of Computer Science",
            university: "Phenikaa University",
            location: "Vietnam"
        },
        {
            name: "Dr. Badamasi Sani Mohammed",
            department: "Department of Economics",
            university: "Al-Qalam University",
            location: "Nigeria"
        },
        {
            name: "Dr. Shahzad Jumani",
            department: "Department of Mechanical Engineering",
            university: "Shah Abdul Latif University",
            location: "Pakistan"
        },
        {
            name: "Dr. Samir Hallaci",
            department: "Department of Computer Science",
            university: "Guelma University",
            location: "Algeria"
        },
        {
            name: "Dr.Md Nahiduzzaman",
            department: "Department of Electrical and Computer Engineering",
            university: "Rajshahi University of Engineering and Technology",
            location: "Bangladesh"
        },
        {
            name: "Dr. Zhihao Li",
            department: "Department of Economics and Social Sciences",
            university: "Nanjing Agricultural University",
            location: "China"
        },
        {
            name: "Dr.M. Anand",
            department: "Department of Computer Science and Engineering",
            university: "SRM Institute of Science and Technology",
            location: "India"
        },
        {
            name: "Dr. Jhanghiz Syahrivar",
            department: "Department of Computer Science",
            university: "President University",
            location: "Indonesia"
        },
        {
            name: "Dr. Ali A.Abdul Saeed",
            department: "Department of Computer Science and Engineering",
            university: "Wasit University",
            location: "Iraq"
        },
        {
            name: "Dr. Ahmed Rimaz Faizabadi",
            department: "Department of Electrical and Computer Engineering",
            university: "International Islamic University Malaysia",
            location: "Malaysia"
        },
        {
            name: "Dr. Alamu Olumide",
            department: "Department of Electrical and Electronics Engineering",
            university: "University of Lagos",
            location: "Nigeria"
        },
        {
            name: "Dr. Asad Aziz",
            department: "Department of Geography",
            university: "University of Gujrat",
            location: "Pakistan"
        },
    ];


    return (
        <>
            <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto mt-20 px-3">
                <div className="flex flex-col gap-2  items-center">
                    <h1 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Editorial Board</h1>
                    <div className="hidden lg:block">
                        <div className="flex flex-row justify-between gap-2 items-center ">
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[100px]' />
                            <PiStarFourFill className='text-[#E0048B] logo-spin' />
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[100px]' />
                        </div>
                    </div>
                </div>
                <div className="lg:mt-7 mt-4">
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The Editorial Board of the International Conference on Advanced Smart Technologies and AI Innovations comprises distinguished scholars, researchers, and industry leaders from around the world. With deep expertise across various domains of artificial intelligence, smart systems, and emerging technologies, the board ensures the highest standards of academic integrity, technical quality, and innovation.</p>
                    <div className="lg:mt-7 mt-4 flex flex-col gap-3">
                        <p className="inter-medium text-lg">Roles and Responsibilities:</p>

                        <div className="flex gap-2 items-start">
                            <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Reviewing and evaluating submitted research papers for technical accuracy, originality, and relevance.</p>
                        </div>

                        <div className="flex gap-2 items-start">
                            <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Guiding the overall thematic structure and focus areas of the conference.</p>
                        </div>


                        <div className="flex gap-2 items-start">
                            <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Ensuring ethical publishing practices and peer-review standards.</p>
                        </div>


                        <div className="flex gap-2 items-start">
                            <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Promoting interdisciplinary collaboration and international participation.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3 id="organizing-committee" className="scroll-mt-24 hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-center lg:mt-10 mt-5">Organizing Committee</h3>
            <div className="max-w-[1300px] mx-auto p-5">
                {organizingCommittee.map((editor, index) => (
                    <div key={index}>
                        <div className='flex gap-2  mb-2 items-center'>
                            <FaCircleUser className='text-gray-600 flex-shrink-0' />
                            <p className="text-gray-700 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
                        </div>
                    </div>
                ))}
            </div>

            <h3 id="technical-committee" className="scroll-mt-24 hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-center lg:mt-10 mt-5">Technical Program Committee</h3>
            <div className="max-w-[1300px] mx-auto p-5 mt- ">
                {TechnicalCommittee.map((editor, index) => (
                    <div key={index}>
                        <div className='flex gap-2  mb-2 items-center'>
                            <FaCircleUser className='text-gray-600 flex-shrink-0' />
                            <p className="text-gray-700 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
                        </div>
                    </div>
                ))}
            </div>

            <h3 id="advisory-committee" className="scroll-mt-24 hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-center lg:mt-10 mt-5">International Advisory Board Committee</h3>
            <div className="max-w-[1300px] mx-auto p-5 mt- ">
                {Advisorycommittee.map((editor, index) => (
                    <div key={index}>
                        <div className='flex gap-2  mb-2 items-center'>
                            <FaCircleUser className='text-gray-600 flex-shrink-0' />
                            <p className="text-gray-700 text-[15px] "><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
