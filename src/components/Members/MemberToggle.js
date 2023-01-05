import React from 'react';

const MemberToggle = ({ setOpen }) => {
    return (
        <div>
            <div className='bg-white shadow-2xl rounded-xl w-60 p-3'>
                <div className='p-1 mb-1  text-lg cursor-pointer rounded hover:bg-slate-100 hover:text-[#ee3c4d] font-semibold'>
                    <label className='mt-2 pr-[4rem] flex items-center cursor-pointer' htmlFor="moderator-modal">Make moderator</label>
                </div>
                <div className='p-1 text-lg cursor-pointer rounded hover:bg-slate-100 hover:text-[#ee3c4d] font-semibold'>
                    <label className='mt-2 pr-20 flex items-center cursor-pointer' htmlFor="block-modal">Block member</label>
                </div>
            </div>
            <div>
                <input type="checkbox" id="moderator-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Are you sure want to make moderator?</h3>
                        <div className="modal-action">
                            <button className='primary-bg px-5 h-[32px] rounded-lg text-white font-semibold'>Yes</button>
                            <label htmlFor="moderator-modal" className="bg-neutral px-5 py-2 rounded-lg text-white font-semibold cursor-pointer">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <input type="checkbox" id="block-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Are you sure want to block the member?</h3>
                        <div className="modal-action">
                            <button className='primary-bg px-5 h-[32px] rounded-lg text-white font-semibold'>Yes</button>
                            <label htmlFor="block-modal" className="bg-neutral px-5 py-2 rounded-lg text-white font-semibold cursor-pointer">No</label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MemberToggle;