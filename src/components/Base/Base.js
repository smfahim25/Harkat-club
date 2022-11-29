import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import Navbar from '../Navbar/Navbar';
import NewsFeed from '../NewsFeed/NewsFeed';
import RightSidebar from '../RightSidebar/RightSidebar';
import Home from './Home';

const Base = () => {
    return (
        <div>
            <Home></Home>
            <Navbar></Navbar>
            <div className='grid grid-cols-11 gap-5 lg:justify-items-stretch 2xl:justify-items-center'>
                <div className='col-span-3'>
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className='col-span-5'>
                    <NewsFeed></NewsFeed>
                </div>
                <div className='col-span-3'>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default Base;