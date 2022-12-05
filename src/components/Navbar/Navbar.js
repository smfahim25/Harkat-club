import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import { BsListCheck } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const navbarSticky = () => {
        if (window.scrollY >= 480) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', navbarSticky);
    console.log(window.scrollY);
    return (
        <div>
            <nav className={navbar ? 'fixed top-0 ml-0 bg-white z-30 w-full pt-3 pb-5' : 'pt-3 pb-5'}>
                <div className="container flex justify-between h-10 mx-auto sm:justify-center sm:space-x-20 lg:justify-center lg:space-x-20">
                    <ul className="items-stretch hidden sm:space-x-16 md:space-x-20 lg:space-x-24 md:flex text-center">
                        <li className="flex justify-center pt-2 hover:text-neutral">
                            <NavLink to='/club/1' className="text-4xl hover:tooltip-accent hover:tooltip hover:tooltip-bottom" data-tip="Home"><AiOutlineHome /></NavLink>
                        </li>
                        <li className="flex justify-center pt-2 hover:text-neutral">
                            <NavLink to='/club/newsfeed' className="text-4xl hover:tooltip-accent hover:tooltip hover:tooltip-bottom" data-tip="Feed"><BiNews /></NavLink>
                        </li>
                        <li className="flex justify-center pt-2 hover:text-neutral">
                            <NavLink to='/club/gallery' className="text-4xl hover:tooltip-accent hover:tooltip hover:tooltip-bottom" data-tip="Gallery"><MdOutlinePhotoSizeSelectActual /></NavLink>
                        </li>
                        <li className="flex justify-center pt-2 hover:text-neutral">
                            <NavLink to='/club/activities' className="text-4xl hover:tooltip-accent hover:tooltip hover:tooltip-bottom" data-tip="Activities"><BsListCheck /></NavLink>
                        </li>
                        <li className="flex justify-center pt-2 hover:text-neutral">
                            <NavLink to='/club/myprofile' className="text-4xl hover:tooltip-accent hover:tooltip hover:tooltip-bottom" data-tip="Profile"><CgProfile /></NavLink>
                        </li>
                        <li className="flex justify-center pt-2 hover:text-neutral">
                            <NavLink to='/club/settings' className="text-4xl hover:tooltip-accent hover:tooltip hover:tooltip-bottom" data-tip="Settings"><FiSettings /></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;