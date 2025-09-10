import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";


const NavItems = ({ ToggleMenu, MenuOpen, isActive,subDropdown,setSubDropdown,subDropdownRef }) => {

    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
                setDropdown1(false);
            }
            if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
                setDropdown2(false);
            }
            if (subDropdownRef.current && !subDropdownRef.current.contains(event.target)) {
                setSubDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    const Aboutus = [
        { name: "About the Conference", path: "/about" },
        { name: "Scope of Conference", path: "/scope" },
        // { name: "Organizing Committee", path: "/organizing-committee" },
        {
            name: "Editorial Board",
            path: "/editorial-board",
            subItems: [
                { name: "Organizing Committee", path: "/editorial-board#organizing-committee" },
                { name: "Technical Committee", path: "/editorial-board#technical-committee" },
                { name: "Advisory Committee", path: "/editorial-board#advisory-committee" },
            ],
        },
    ];

    const AuthorDesk = [
        { name: "Conference Tracks", path: "/conference-tracks" },
        { name: "Key Dates", path: "/key-dates" },
        { name: "Paper Submission", path: "/paper-submission" },
    ];

    const toggleSubDropdown = () => {
        setSubDropdown(!subDropdown);
    };



    return (
        <>
            <nav className={`${MenuOpen ? 'translate-x-0' : 'translate-x-full'} duration-300 mx-auto text-white bg-white min-h-screen max-h-screen max-w-80 w-full top-0 right-0 absolute z-50 `}>
                <div className="p-5">
                    <div onClick={ToggleMenu} className="absolute right-5 top-5 cursor-pointer"><IoCloseCircleOutline className="text-2xl text-black" /></div>
                    <ul className="flex flex-col items-center mt-5 *:my-2 *:px-2 *:w-full  overflow-y-auto max-h-[calc(100vh-150px)] ">
                        <Link to="/" className={` ${isActive == '/' ? 'text-black inter-medium' : 'text-black inter-medium'}`}>
                            <li
                                onClick={() => {
                                    ToggleMenu(false);
                                }}
                                className="duration-300 "
                            >
                                Home
                            </li>
                        </Link>


                        <li ref={dropdown1Ref} className="">
                        <Link onClick={() => setDropdown1(!dropdown1)} className="flex items-center gap-1 text-base inter-medium text-black">
                            About Us <FaChevronDown className={`${dropdown1 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs`} />
                        </Link>
                        {dropdown1 && (
                            <div className="mt-3 border border-black rounded">
                                <ul className="p-2 text-base max-w-none w-full whitespace-nowrap">
                                    {Aboutus.map((link, index) => (
                                        <li key={index} className="relative">
                                            {link.subItems ? (
                                                <div ref={subDropdownRef}>
                                                    <Link
                                                        onClick={toggleSubDropdown}
                                                        className="flex items-center gap-1 p-2 text-black inter-medium"
                                                    >
                                                        {link.name}
                                                        <FaChevronDown className={`${subDropdown ? 'rotate-180' : 'rotate-0'} duration-200 text-xs`} />
                                                    </Link>
                                                    {subDropdown && (
                                                        <div className="ml-4  rounded">
                                                            <ul className="text-base max-w-none w-full whitespace-nowrap">
                                                                {link.subItems.map((subLink, subIndex) => (
                                                                    <Link
                                                                        key={subIndex}
                                                                        onClick={() => {
                                                                            setDropdown1(false);
                                                                            setSubDropdown(false);
                                                                            ToggleMenu(false);
                                                                        }}
                                                                        to={subLink.path}
                                                                        className="!w-full"
                                                                    >
                                                                        <li className="p-2 inter-regular text-black">{subLink.name}</li>
                                                                    </Link>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <Link
                                                    onClick={() => {
                                                        setDropdown1(false);
                                                        setSubDropdown(false);
                                                        ToggleMenu(false);
                                                    }}
                                                    to={link.path}
                                                    className="!w-full"
                                                >
                                                    <li className="p-2 inter-regular text-black">{link.name}</li>
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>

                        <li ref={dropdown2Ref} className=""><Link onClick={() => setDropdown2(!dropdown2)} className="flex items-center gap-1 text-base inter-medium text-black" >Author's Desk<FaChevronDown className={`${dropdown2 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                            {dropdown2 &&
                                <div className="border border-black top-9 rounded mt-3 ">
                                    <ul className="p-2 text-base max-w-none w-full whitespace-nowrap ">
                                        {AuthorDesk.map((link, index) => (
                                            <Link key={index} onClick={() => { setDropdown2(!dropdown2), ToggleMenu(false) }} to={link.path} className="!w-full" >
                                                <li className="p-2  inter-regular text-black" >{link.name} </li>
                                            </Link>
                                        ))}

                                    </ul>
                                </div>}
                        </li>
                        <Link to="/contactus" className={` ${isActive == '/contactus' ? 'underline underline-offset-4' : ''}`}>
                            <li
                                onClick={() => {
                                    ToggleMenu(false);

                                }}
                                className="duration-300 inter-medium text-black"
                            >
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavItems;