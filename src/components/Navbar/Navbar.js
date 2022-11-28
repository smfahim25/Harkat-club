import React from 'react';

const Navbar = () => {
    return (
        <div>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex justify-between h-10 mx-auto md:justify-center md:space-x-20">
                    <ul className="items-stretch hidden space-x-16 md:flex">
                        <li className="flex bg-primary w-40 rounded-full">
                            <a rel="noopener noreferrer" href="#" className="w-40 pt-2">HOME</a>
                        </li>
                        <li className="flex bg-primary w-40 rounded-full">
                            <a rel="noopener noreferrer" href="#" className="w-40 pt-2">FEED</a>
                        </li>
                        <li className="flex bg-primary w-40 rounded-full">
                            <a rel="noopener noreferrer" href="#" className="w-40 pt-2">GALLERY</a>
                        </li>
                        <li className="flex bg-primary w-40 rounded-full">
                            <a rel="noopener noreferrer" href="#" className="w-40 pt-2">ACTIVITIES</a>
                        </li>
                        <li className="flex bg-primary w-40 rounded-full">
                            <a rel="noopener noreferrer" href="#" className="w-40 pt-2">MY PROFILE</a>
                        </li>
                        <li className="flex bg-primary w-40 rounded-full">
                            <a rel="noopener noreferrer" href="#" className="w-40 pt-2">SETTINGS</a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Navbar;