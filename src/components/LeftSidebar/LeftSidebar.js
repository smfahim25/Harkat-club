import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "../CSS/LeftSidebar.module.css"

const LeftSidebar = () => {
    return (
        <div>
            <div className="drawer drawer-mobile h-[720px] border-r-2">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className={`${styles.keep_scrolling}`}>
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu w-[250px] text-base-content text-[17px]">
                        <li><NavLink to='/clubdetails' className='bg-accent h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center rounded-[20px]'>Club Details</NavLink></li>
                        <li><NavLink to='/acchomplishment' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Acchomplishment</NavLink></li>
                        <li><NavLink to='/contactgoverningbody' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Contact Governing Body</NavLink></li>
                        <li><NavLink to='/messagebox' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center' >Message Box</NavLink></li>
                        <li><NavLink to='/membersrequest' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Members Requests</NavLink></li>
                        <li><NavLink to='/members' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Members</NavLink></li>
                        <li><NavLink to='/skillavailable' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Skills Available</NavLink></li>
                        <li><NavLink to='/skillfor' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Skills Looking For</NavLink></li>
                        <li><NavLink to='/pastactivities' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Past Activites</NavLink></li>
                        <li><NavLink to='/currentactivities' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Current Activities</NavLink></li>
                        <li><NavLink to='/futureactivity' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Future Activity</NavLink></li>
                        <li><NavLink to='/proposeactivity' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Propose an Activity</NavLink></li>
                        <li><NavLink to='/gallery' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Pictures</NavLink></li>
                        <li><NavLink to='/videos' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Videos</NavLink></li>
                        <li><NavLink to='/announcement' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Annoucements</NavLink></li>
                        <li><NavLink to='/news' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>News</NavLink></li>
                        <li><NavLink to='/promoteclub' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Promote Club</NavLink></li>
                        <li><NavLink to='/uploadpost' className='bg-accent rounded-[20px] h-[30px] hover:bg-neutral hover:text-white mb-2 justify-center'>Upload Post</NavLink></li>
                        <li><NavLink to='/leaveclub' className='bg-accent rounded-[20px] h-[30px] hover:bg-red-400 hover:text-white justify-center'>Leave Club</NavLink></li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default LeftSidebar;