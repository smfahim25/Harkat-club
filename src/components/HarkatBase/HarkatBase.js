import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';

const HarkatBase = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <div className='ml-2 grid grid-cols-12 gap-5 lg:justify-items-stretch 2xl:justify-items-center xl:justify-items-center'>
                <div className='col-span-3 2xl:col-span-4 3xl:col-span-4 xl:col-span-3'>
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className='col-span-6 2xl:col-span-4 3xl:col-span-4 xl:col-span-6'>
                    <Outlet></Outlet>
                </div>
                <div className='col-span-3 2xl:col-span-4 3xl:col-span-4 xl:col-span-3'>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default HarkatBase;