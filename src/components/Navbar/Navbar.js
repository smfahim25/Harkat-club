import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex justify-between h-10 mx-auto sm:justify-center sm:space-x-10 lg:justify-center lg:space-x-20">
                    <ul className="items-stretch hidden md:space-x-1 lg:space-x-16 md:flex text-center">
                        <li className="flex bg-primary w-40 rounded-full hover:bg-secondary hover:text-white">
                            <NavLink to='/' className="w-40 pt-2">HOME</NavLink>
                        </li>
                        <li className="flex bg-primary w-40 rounded-full hover:bg-secondary hover:text-white">
                            <NavLink to='/newsfeed' className="w-40 pt-2">FEED</NavLink>
                        </li>
                        <li className="flex bg-primary w-40 rounded-full hover:bg-secondary hover:text-white">
                            <NavLink to='/gallery' className="w-40 pt-2">GALLERY</NavLink>
                        </li>
                        <li className="flex bg-primary w-40 rounded-full hover:bg-secondary hover:text-white">
                            <NavLink to='/activities' className="w-40 pt-2">ACTIVITIES</NavLink>
                        </li>
                        <li className="flex bg-primary w-40 rounded-full hover:bg-secondary hover:text-white">
                            <NavLink to='/myprofile' className="w-40 pt-2">MY PROFILE</NavLink>
                        </li>
                        <li className="flex bg-primary w-40 rounded-full hover:bg-secondary hover:text-white">
                            <NavLink to='/settings' className="w-40 pt-2">SETTINGS</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Navbar;