import React from 'react';

const MyclubLoading = () => {
    return (
        <div className='flex justify-center items-center mt-64'>
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse bg-neutral"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-neutral"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-neutral"></div>
            </div>
        </div>
    );
};

export default MyclubLoading;