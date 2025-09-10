import { useNavigate } from 'react-router-dom';


function Register() {
      const navigate = useNavigate();
    return (
        <>
            <div  className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto p-3 mt-4 mb-9">
                <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] rounded-md p-8">
                    <div className="lg:flex justify-between lg:gap-15 ">
                        <div className="flex flex-col gap-5">
                            <p className="hanuman-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Ready to Join the Innovation?</p>
                            <p className="inter-regular text-white sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] max-w-[70rem]">Register now and secure your spot today to connect with global experts, explore emerging technologies, and be part of shaping the future of computer science.</p>
                        </div>
                        <div className="flex items-center mt-4 lg:mt-0">
                            <div  onClick={() => navigate('/paper-submission')} className="cursor-pointer btn hover-border">
                                <button className="bg-[#1F1F1F] inter-medium text-base lg:text-[17px] text-white transition-all duration-200 py-2 px-2 rounded cursor-pointer">Register Here </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register