import React from 'react';
import { Link } from 'react-router-dom';

const RightSidebar = () => {
    return (
        <div>
            <div className="w-full p-6">
                <nav className="space-y-8 text-sm w-76">
                    <div className="space-y-2">
                        <Link className="text-2xl font-semibold tracking-widest uppercase hover:bg-primary  p-3 rounded-xl">Annoucements</Link>
                        <div className="flex flex-col space-y-1">
                            <Link className='mt-5 p-3  hover:bg-primary text-lg rounded-xl ml-1'>Announcement 1</Link>
                            <Link className='mt-5  p-3  hover:bg-primary text-lg rounded-xl ml-1'>Annoucements 2</Link>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Link href='#' className="text-2xl font-semibold uppercase hover:bg-primary    p-3 rounded-xl">News</Link>
                        <div className="flex flex-col space-y-1">
                            <Link className='mt-5 hover:bg-primary p-3 text-lg rounded-xl ml-1'>News 1</Link>
                            <Link className='mt-5 hover:bg-primary p-3 text-lg rounded-xl ml-1'>News 2</Link>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Link href='#' className="text-2xl font-semibold tracking-widest hover:bg-primary   uppercase p-3 rounded-xl">Pictures</Link>
                        <div className="flex flex-col space-y-1">
                            <Link className='mt-5 hover:bg-primary p-3 text-lg rounded-xl ml-1'>Pictures 1</Link>
                            <Link className='mt-5 hover:bg-primary p-3 text-lg rounded-xl ml-1'>Pictures 1</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default RightSidebar;