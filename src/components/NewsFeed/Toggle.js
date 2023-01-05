import React, { useState } from 'react';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

const Toggle = ({ post }) => {
    const [edit, setEdit] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const { img, video } = post;
    return (
        <div>
            <div className='bg-white shadow-2xl rounded-xl w-48 p-3'>
                {
                    img && <div className='p-1 mb-1  text-lg cursor-pointer rounded hover:bg-gray-200 hover:text-[#ee3c4d] font-semibold'>
                        <label className='pr-32 mt-2' onClick={() => setEdit(true)} htmlFor="edit-modal">Edit</label>
                    </div>
                }
                {
                    video && <div className='p-1 mb-1 text-lg cursor-pointer rounded hover:bg-gray-200 hover:text-[#ee3c4d] font-semibold'>
                        <label className='pr-32 mt-2' onClick={() => setEdit(true)} htmlFor="edit-modal">Edit</label>
                    </div>
                }

                {
                    img && <div className='p-1 text-lg cursor-pointer rounded hover:bg-gray-200 hover:text-[#ee3c4d] font-semibold'>
                        <label className='pr-32 mt-2' htmlFor="delete-modal" onClick={() => setDeleting(true)}>Delete</label>
                    </div>
                }
                {
                    video && <div className='p-1 text-lg cursor-pointer rounded hover:bg-gray-200 hover:text-[#ee3c4d] font-semibold'>
                        <label className='pr-32 mt-2' htmlFor="delete-modal" onClick={() => setDeleting(true)}>Delete</label>
                    </div>
                }
            </div>
            {
                edit && <EditModal edit={edit} post={post} setEdit={setEdit}></EditModal>
            }
            {
                deleting && <DeleteModal deleting={deleting} post={post} setDeleting={setDeleting}></DeleteModal>
            }
        </div>
    );
};

export default Toggle;