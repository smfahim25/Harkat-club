import React from 'react';
import { toast } from 'react-toastify';
import { useDeleteClubImagesMutation, useDeleteClubVideosMutation } from '../../app/EndPoints/baseEndpoints';
const DeleteFeed = ({ img, video, deleting }) => {
    const { HarkatImages_id, HarkatVideos_id } = deleting;
    const [deleteClubImages, resInfo] = useDeleteClubImagesMutation();
    const [deleteClubVideos, resInfo1] = useDeleteClubVideosMutation();
    const handleDelete = (id) => {
        if (img) {
            deleteClubImages(id);
            // toast.success("Your post deleted successfully.", {
            //     position: toast.POSITION.BOTTOM_CENTER
            // });
        }
        else if (video) {
            deleteClubVideos(id);
            toast.success("Your post deleted successfully.", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
    }
    return (
        <div>
           
        </div>
    );
};

export default DeleteFeed;