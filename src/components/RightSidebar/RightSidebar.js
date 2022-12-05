import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS/RightSidebar.module.css'

const RightSidebar = () => {
    return (
        <div>
            <div className={`${styles.keep_scrolling} h-[720px] pt-4 ml-5`}>
                <nav className="space-y-5 text-sm w-76 ml-2">
                    <div className="space-y-2">
                        <Link to='/club/announcement' className="text-2xl font-extrabold tracking-widest uppercase hover:bg-accent  p-3 rounded-lg">Annoucements</Link>
                        <div className="flex flex-col space-y-1">
                            <Link className='mt-3 p-3 font-medium  hover:bg-accent text-xl rounded-lg ml-1'>Announcement 1</Link>
                            <Link className='mt-3  p-3 font-medium hover:bg-accent text-xl rounded-lg ml-1'>Annoucements 2</Link>
                            <Link className='mt-3  p-3 font-medium hover:bg-accent text-xl rounded-lg ml-1'>See More</Link>
                        </div>
                        <p className='border-b-2 ml-3'></p>
                    </div>
                    <div className="space-y-1">
                        <Link to='/club/news' className="text-2xl font-extrabold uppercase hover:bg-accent hover:text-white   p-3 rounded-lg">News</Link>
                        <div className="flex flex-col space-y-1">
                            <Link className='mt-3 font-medium hover:text-white hover:bg-accent p-3 text-xl rounded-lg ml-1'>News 1</Link>
                            <Link className='mt-3 font-medium hover:text-white hover:bg-accent p-3 text-xl rounded-lg ml-1'>News 2</Link>
                            <Link className='mt-3 font-medium p-3 hover:text-white  hover:bg-accent text-xl rounded-lg ml-1'>See More</Link>
                        </div>
                        <p className='border-b-2 ml-3'></p>
                    </div>
                    <div className="space-y-2">
                        <Link to='/club/gallery' className="text-2xl hover:text-white font-extrabold tracking-widest hover:bg-accent   uppercase p-3 rounded-lg">Pictures</Link>
                        <div className="flex flex-col space-y-1">
                            <Link className='mt-3 hover:text-white font-medium hover:bg-accent p-3 text-xl rounded-lg ml-1'>Pictures 1</Link>
                            <Link className='mt-3 hover:text-white font-medium hover:bg-accent p-3 text-xl rounded-lg ml-1'>Pictures 1</Link>
                            <Link className='mt-3 hover:text-white font-medium p-3  hover:bg-accent text-xl rounded-lg ml-1'>See More</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default RightSidebar;