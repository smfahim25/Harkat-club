import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';

const HarkatBase = () => {
    return (
        <div>
            <div className='grid grid-cols-11 gap-5 lg:justify-items-stretch 2xl:justify-items-center'>
                <div className='col-span-3'>
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className='col-span-5'>
                    <Outlet></Outlet>
                </div>
                <div className='col-span-3'>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default HarkatBase;