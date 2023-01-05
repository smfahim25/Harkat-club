import React from 'react';
import { toast } from 'react-toastify';
import { useDeleteClubImagesMutation, useDeleteClubVideosMutation } from '../../app/EndPoints/baseEndpoints';

const DeleteModal = ({ post, setDeleting, deleting }) => {
    const { img, video, HarkatImages_id, HarkatVideos_id } = post;
    const [deleteClubImages] = useDeleteClubImagesMutation();
    const [deleteClubVideos] = useDeleteClubVideosMutation();
    // delete post
    const handleDelete = (id) => {
        if (img) {
            deleteClubImages(id);
            setDeleting(false);
            toast.info("Image is deleting now.", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        else if (video) {
            deleteClubVideos(id);
            toast.info("Video is deleting now.", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            setDeleting(false);
        }
    }
    return (
        <div>
            {
                deleting && <div>
                    <input type="checkbox" id="delete-modal" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Are you sure want to delete?</h3>
                            <div className="modal-action">
                                {img && <button onClick={() => { handleDelete(HarkatImages_id); setDeleting(false); }} className='primary-bg px-5 h-[32px]  rounded-lg text-white font-semibold'>Delete</button>}
                                {video && <button onClick={() => { handleDelete(HarkatVideos_id); setDeleting(false); }} className='primary-bg px-5 h-[32px] rounded-lg text-white font-semibold'>Delete</button>}
                                <label htmlFor="delete-modal" className="bg-neutral px-5 py-2 rounded-lg text-white font-semibold cursor-pointer">Cancel</label>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default DeleteModal;