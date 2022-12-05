import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "../CSS/LeftSidebar.module.css"

const LeftSidebar = () => {
    return (
        <div>
            <div className="drawer drawer-mobile h-[720px] 2xl:mr-5">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className={`${styles.keep_scrolling}`}>
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu w-[250px] text-base-content text-[17px]">
                        <li><NavLink to='/club/clubdetails' className='bg-accent h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center rounded-[20px]'>Club Details</NavLink></li>
                        <li><NavLink to='/club/acchomplishment' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Acchomplishment</NavLink></li>
                        <li><NavLink to='/club/contactgoverningbody' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Contact Governing Body</NavLink></li>
                        <li><NavLink to='/club/messagebox' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center' >Message Box</NavLink></li>
                        <li><NavLink to='/club/membersrequest' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Members Requests</NavLink></li>
                        <li><NavLink to='/club/members' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Members</NavLink></li>
                        <li><NavLink to='/club/skillavailable' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Skills Available</NavLink></li>
                        <li><NavLink to='/club/skillfor' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Skills Looking For</NavLink></li>
                        <li><NavLink to='/club/pastactivities' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Past Activites</NavLink></li>
                        <li><NavLink to='/club/currentactivities' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Current Activities</NavLink></li>
                        <li><NavLink to='/club/futureactivity' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Future Activity</NavLink></li>
                        <li><NavLink to='/club/proposeactivity' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Propose an Activity</NavLink></li>
                        <li><NavLink to='/club/gallery' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Pictures</NavLink></li>
                        <li><NavLink to='/club/videos' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Videos</NavLink></li>
                        <li><NavLink to='/club/announcement' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Annoucements</NavLink></li>
                        <li><NavLink to='/club/news' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>News</NavLink></li>
                        <li><NavLink to='/club/promoteclub' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Promote Club</NavLink></li>
                        <li><NavLink to='/club/uploadpost' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Upload Post</NavLink></li>
                        <li><NavLink to='/club/leaveclub' className='bg-accent text-red-600 rounded-[20px] h-[30px] hover:bg-neutral hover:text-white justify-center'>Leave Club</NavLink></li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default LeftSidebar;