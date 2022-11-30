import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../CSS/LeftSidebar.module.css"

const LeftSidebar = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className={`${styles.keep_scrolling}`}>
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 text-base-content">
                        <li><Link to='/clubdetails' className='hover:bg-primary'>Club Details</Link></li>
                        <li><Link to='/acchomplishment' className='hover:bg-primary'>Acchomplishment</Link></li>
                        <li><Link to='/contactgoveringbody' className='hover:bg-primary'>Contact Govering Body</Link></li>
                        <li><Link to='/messagebox' className='hover:bg-primary'>Message Box</Link></li>
                        <li><Link to='/membersrequest' className='hover:bg-primary'>Members Requests</Link></li>
                        <li><Link to='/members' className='hover:bg-primary'>Members</Link></li>
                        <li><Link to='/skillavailable' className='hover:bg-primary'>Skills Available</Link></li>
                        <li><Link to='/skillfor' className='hover:bg-primary'>Skills Looking For</Link></li>
                        <li><Link to='/postactivities' className='hover:bg-primary'>Post Activites</Link></li>
                        <li><Link to='/currentactivities' className='hover:bg-primary'>Current Activities</Link></li>
                        <li><Link to='/futureactivity' className='hover:bg-primary'>Future Activity</Link></li>
                        <li><Link to='/proposeactivity' className='hover:bg-primary'>Propose an Activity</Link></li>
                        <li><Link to='/gallery' className='hover:bg-primary'>Pictures</Link></li>
                        <li><Link to='/videos' className='hover:bg-primary'>Videos</Link></li>
                        <li><Link to='/announcement' className='hover:bg-primary'>Annoucements</Link></li>
                        <li><Link to='/news' className='hover:bg-primary'>News</Link></li>
                        <li><Link to='/promoteclub' className='hover:bg-primary'>Promote Club</Link></li>
                        <li><Link to='/uploadpost' className='hover:bg-primary'>Upload Post</Link></li>
                        <li><Link to='/leaveclub' className='text-red-500 hover:bg-red-500 hover:text-white'>Leave Club</Link></li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default LeftSidebar;