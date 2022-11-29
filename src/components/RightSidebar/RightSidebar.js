import React from 'react';

const RightSidebar = () => {
    return (
        <div>
            <div className="w-full p-6">
                <nav className="space-y-8 text-sm w-76">
                    <div className="space-y-2">
                        <a href="#" className="text-2xl font-semibold tracking-widest uppercase hover:bg-primary  p-3 rounded-xl">Annoucements</a>
                        <div className="flex flex-col space-y-1">
                            <a href="#" className='mt-5 p-3  hover:bg-primary text-lg rounded-xl ml-1'>Announcement 1</a>
                            <a href="#" className='mt-5  p-3  hover:bg-primary text-lg rounded-xl ml-1'>Plugins</a>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <a href='#' className="text-2xl font-semibold uppercase hover:bg-primary    p-3 rounded-xl">News</a>
                        <div className="flex flex-col space-y-1">
                            <a href="#" className='mt-5 hover:bg-primary p-3 text-lg rounded-xl ml-1'>Header</a>
                            <a href="#" className='mt-5 hover:bg-primary p-3 text-lg rounded-xl ml-1'>Drawer</a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a href='#' className="text-2xl font-semibold tracking-widest hover:bg-primary   uppercase p-3 rounded-xl">Pictures</a>
                        <div className="flex flex-col space-y-1">
                            <a href="#" className='mt-5 hover:bg-primary p-3 text-lg rounded-xl ml-1'>Homepage</a>
                            <a href="#" className='mt-5 hover:bg-primary p-3 text-lg rounded-xl ml-1'>Users</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default RightSidebar;