import React from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { useUploadImageMutation } from '../../app/EndPoints/baseEndpoints';

const UploadPost = () => {
    const { id } = useParams();
    const [uploadImage, resInfo] = useUploadImageMutation();
    const handleSubmit = (e) => {
        e.preventDefault();
        const file = e.target.uploadImage.files[0];
        const title = e.target.title.value;
        const club_id = id;
        const user_id = '16';
        const body = new FormData();
        body.append('img', file);
        body.append('title', title);
        body.append('club_id', club_id);
        body.append('user_id', user_id);
        uploadImage(body);
        toast.success("Image uploaded successfully.");
        e.target.reset();
    }
    const fileName = (e) => {
        const fileL = e.target.files[0].name.length;
        if (fileL > 90) {
            alert("Your file name should be less than 90 character.");
        }
    }
    console.log(resInfo);
    return (
        <div>
            <h1 className='text-center text-xl mt-10 font-bold'>Upload Post</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center items-center'>
                    <div className="w-full max-w-xs">
                        <label>
                            <span>Title</span>
                        </label>
                        <input type="text" name='title' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="w-full max-w-xs mt-2">
                        <label>
                            <span>Choose images</span>
                        </label>
                        <input type="file" onChange={fileName} name='uploadImage' accept="image/*" className="file-input file-input-bordered w-full max-w-xs p-0" />
                    </div>
                    <input className='btn mt-4 text-white bg-neutral' type="submit" value='Upload' />
                </div>
            </form>
        </div>
    );
};

export default UploadPost;