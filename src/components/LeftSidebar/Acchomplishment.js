import React from 'react';

const Acchomplishment = () => {
    return (
        <div>
            <h1 className='text-center mb-3 mt-10 bg-accent p-3 rounded-full text-xl font-extrabold'>Acchomplishments</h1>
            <h1 className='mt-4 mb-3 pl-4 bg-accent p-2 text-center rounded-full text-lg font-semibold'>Event Organized (2)</h1>
            <div className='grid grid-cols-2 gap-5'>
                <div className="p-5 rounded-md shadow-md bg-slate-50 dark:text-gray-50">
                    <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-64 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Film</span>
                        <h2 className="text-xl font-semibold tracking-wide">Delhi,India</h2>
                    </div>
                </div>
                <div className="p-5 rounded-md shadow-md bg-slate-50 dark:text-gray-50">
                    <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-64 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Event</span>
                        <h2 className="text-xl font-semibold tracking-wide">Mumbai,India</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Acchomplishment;