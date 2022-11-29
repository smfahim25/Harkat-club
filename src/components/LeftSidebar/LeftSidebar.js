import React from 'react';
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
                        <li><a className='hover:bg-primary'>Club Details</a></li>
                        <li><a className='hover:bg-primary'>Acchomplishment</a></li>
                        <li><a className='hover:bg-primary'>Contact Govering Body</a></li>
                        <li><a className='hover:bg-primary'>Message Box</a></li>
                        <li><a className='hover:bg-primary'>Members Requests</a></li>
                        <li><a className='hover:bg-primary'>Members</a></li>
                        <li><a className='hover:bg-primary'>Skills Available</a></li>
                        <li><a className='hover:bg-primary'>Skills Looking For</a></li>
                        <li><a className='hover:bg-primary'>Post Activites</a></li>
                        <li><a className='hover:bg-primary'>Current Activities</a></li>
                        <li><a className='hover:bg-primary'>Future Activity</a></li>
                        <li><a className='hover:bg-primary'>Propose an Activity</a></li>
                        <li><a className='hover:bg-primary'>Pictures</a></li>
                        <li><a className='hover:bg-primary'>Videos</a></li>
                        <li><a className='hover:bg-primary'>Annoucements</a></li>
                        <li><a className='hover:bg-primary'>News</a></li>
                        <li><a className='hover:bg-primary'>Promote Club</a></li>
                        <li><a className='hover:bg-primary'>Upload Post</a></li>
                        <li><a className='text-red-500 hover:bg-red-500 hover:text-white'>Leave Club</a></li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default LeftSidebar;