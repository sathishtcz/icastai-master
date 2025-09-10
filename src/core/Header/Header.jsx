import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import NavItems from "./NavItems";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const menuRef = useRef(null);
    const [MenuOpen, setMenuOpen] = useState(false);
    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);
    const dropdown3Ref = useRef(null);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [subDropdown, setSubDropdown] = useState(false);
    const subDropdownRef = useRef(null);
    const [scroll, setScroll] = useState(false);
    const location = useLocation();
    const isActive = location.pathname;

    const ToggleMenu = () => {
        setMenuOpen(!MenuOpen);
    };

    // Close other dropdowns when one is opened
    const toggleDropdown = (dropdown) => {
        if (dropdown === 1) {
            setDropdown1(!dropdown1);
            setDropdown2(false);
            setDropdown3(false);
        } else if (dropdown === 2) {
            setDropdown1(false);
            setDropdown2(!dropdown2);
            setDropdown3(false);
        } else if (dropdown === 3) {
            setDropdown1(false);
            setDropdown2(false);
            setDropdown3(!dropdown3);
        }
    };


    const toggleSubDropdown = () => {
        setSubDropdown(!subDropdown);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
            if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
                setDropdown1(false);
            }
            if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
                setDropdown2(false);
            }
            if (dropdown3Ref.current && !dropdown3Ref.current.contains(event.target)) {
                setDropdown3(false);
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

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace("#", "");
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location]);


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

    const navlocation = useLocation();
    const linkClass = (path) =>
        `${navlocation.pathname === path ? 'bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent' : 'text-black'
        }`;


    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <div ref={menuRef} className={`w-full fixed top-0 z-20 shadow-md ${scrolled ? "bg-white shadow-md py-4" : "py-4"}`}>
            <div className="mx-auto w-full xl:max-w-[1500px] md:max-w-[920px] flex items-center justify-between px-3">
                <div className="">
                    {/* <Link to="/" className="text-4xl hanuman-bold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent">
                        ICASTAI
                    </Link> */}
                    <Link to="/">
                        <img className="w-40 md:mx-0 mx-auto" src="/assets/images/Logo.png" alt="logo" />
                    </Link>
                </div>

                <div className="lg:flex hidden items-center">
                    <ul className="flex gap-12 h-full items-center justify-center text-black inter-medium text-xl">
                        <li>
                            <Link to="/" className={linkClass('/')}>Home</Link>
                        </li>
                        <li ref={dropdown1Ref} className="cursor-pointer relative">
                            <Link onClick={() => toggleDropdown(1)} className="flex items-center gap-1">
                                About Us <FaChevronDown className={`${dropdown1 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs`} />
                            </Link>
                            {dropdown1 && (
                                <div className="absolute bg-white border shadow-lg mt-2 rounded">
                                    <ul className="p-2 text-base max-w-none w-full whitespace-nowrap">
                                        {Aboutus.map((link, index) => (
                                            <li key={index} className="relative">
                                                {link.subItems ? (
                                                    <div ref={subDropdownRef}>
                                                        <Link
                                                            onClick={toggleSubDropdown}
                                                            className="flex items-center gap-1 px-4 py-2 text-gray-900 inter-medium"
                                                        >
                                                            {link.name}
                                                            <FaChevronDown className={`${subDropdown ? 'rotate-180' : 'rotate-0'} duration-200 text-xs`} />
                                                        </Link>
                                                        {subDropdown && (
                                                            <div className="ml-4 pl-2 bg-white rounded">
                                                                <ul className=" text-base max-w-none w-full whitespace-nowrap">
                                                                    {link.subItems.map((subLink, subIndex) => (
                                                                        <Link
                                                                            key={subIndex}
                                                                            onClick={() => {
                                                                                setDropdown1(false);
                                                                                setSubDropdown(false);
                                                                            }}
                                                                            to={subLink.path}
                                                                            className="!w-full"
                                                                        >
                                                                            <li className="px-4 py-2 text-gray-900 inter-medium">{subLink.name}</li>
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
                                                        }}
                                                        to={link.path}
                                                        className="!w-full"
                                                    >
                                                        <li className="px-4 py-2 text-gray-900 inter-medium">{link.name}</li>
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li ref={dropdown2Ref} className="cursor-pointer relative">
                            <Link onClick={() => toggleDropdown(2)} className="flex items-center gap-1">
                                Author's Desk <FaChevronDown className={`${dropdown2 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs`} />
                            </Link>
                            {dropdown2 && (
                                <div className="absolute bg-white border shadow-lg mt-2 rounded">
                                    <ul className="p-2 text-base max-w-none w-full whitespace-nowrap">
                                        {AuthorDesk.map((link, index) => (
                                            <Link key={index} onClick={() => setDropdown2(false)} to={link.path} className="!w-full">
                                                <li className="px-4 py-2 text-gray-900 inter-medium">{link.name}</li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li>
                            <Link to="/contactus">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* <div className="hidden lg:flex items-center">
                    <div className="btn hover-border cursor-pointer">
                        <button classname=" bg-[#1F1F1F]  text-xl  transition-all duration-200 p-3">
                         <h1 className=" playfair-medium text-white">Register Here</h1>   
                        </button>
                    </div>
                </div> */}
                <div className="hidden lg:flex items-center">
                    <div onClick={() => navigate('/paper-submission')} className="btn hover-border cursor-pointer">
                        <button className="bg-[#1F1F1F] inter-medium text-base  lg:text-[17px] text-white transition-all duration-200 py-2 px-2 rounded cursor-pointer">Register Here </button>
                    </div>
                </div>

                <div
                    onClick={ToggleMenu}
                    className="inline-flex align-middle items-center duration-300 min-w-24 select-none lg:hidden"
                >
                    <GiHamburgerMenu className="ml-12 text-3xl cursor-pointer duration-300 m-1.5 " />
                </div>
            </div>

            <NavItems
                MenuOpen={MenuOpen}
                ToggleMenu={ToggleMenu}
                isActive={isActive}
                dropdown1Ref={dropdown1Ref}
                dropdown2Ref={dropdown2Ref}
                setDropdown1={setDropdown1}
                setDropdown2={setDropdown2}
                dropdown1={dropdown1}
                dropdown2={dropdown2}
                subDropdown={subDropdown}
                setSubDropdown={setSubDropdown}
                subDropdownRef={subDropdownRef}
            />
            {MenuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="h-screen w-full bg-black/60 absolute top-0"
                ></div>
            )}
        </div>
    );
};

export default Header;