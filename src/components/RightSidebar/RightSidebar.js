import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../CSS/RightSidebar.module.css'

const RightSidebar = () => {
    const admin = useSelector((state) => state.admin.value);
    const clubMemberCheck = useSelector(state => state.clubcurrentmember.member_status);
    return (
        <div>
            {admin || clubMemberCheck === 'active' || clubMemberCheck === 'moderator' ? <div className={`${styles.keep_scrolling} h-[720px] pt-4 mt-5 border-l-2`}>
                <nav className="space-y-5 text-sm w-76">
                    <div className="space-y-2">
                        <Link to='announcement' className="text-2xl font-extrabold tracking-widest uppercase hover:bg-accent  p-3 rounded-lg">Annoucements</Link>
                        <div className="flex flex-col space-y-1">
                            <Link className='mt-3 p-3 font-medium  hover:bg-accent text-xl rounded-lg ml-1'>Announcement 1</Link>
                            <Link className='mt-3  p-3 font-medium hover:bg-accent text-xl rounded-lg ml-1'>Annoucements 2</Link>
                            <Link className='mt-3  p-3 font-medium hover:bg-accent text-xl rounded-lg ml-1'>See More</Link>
                        </div>
                        <p className='border-b-2 ml-3'></p>
                    </div>
                    <div className="space-y-1">
                        <Link to='news' className="text-2xl font-extrabold uppercase hover:bg-accent   p-3 rounded-lg">News</Link>
                        <div className="flex flex-col space-y-1">
                            <Link className='mt-3 font-medium  hover:bg-accent p-3 text-xl rounded-lg ml-1'>News 1</Link>
                            <Link className='mt-3 font-medium hover:bg-accent p-3 text-xl rounded-lg ml-1'>News 2</Link>
                            <Link className='mt-3 font-medium p-3   hover:bg-accent text-xl rounded-lg ml-1'>See More</Link>
                        </div>
                        <p className='border-b-2 ml-3'></p>
                    </div>
                    <div className="space-y-2">
                        <Link to='gallery' className="text-2xl h font-extrabold tracking-widest hover:bg-accent   uppercase p-3 rounded-lg">Pictures</Link>
                        <div className="flex flex-col space-y-1">
                            <Link className='mt-3  font-medium hover:bg-accent p-3 text-xl rounded-lg ml-1'>Pictures 1</Link>
                            <Link className='mt-3  font-medium hover:bg-accent p-3 text-xl rounded-lg ml-1'>Pictures 1</Link>
                            <Link className='mt-3 font-medium p-3  hover:bg-accent text-xl rounded-lg ml-1'>See More</Link>
                        </div>
                    </div>
                </nav>
            </div> : ''}
        </div>
    );
};

export default RightSidebar;