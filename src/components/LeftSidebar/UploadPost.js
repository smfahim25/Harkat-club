import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { useUploadImageMutation, useUploadVideoMutation } from '../../app/EndPoints/baseEndpoints';
import uploadImg from '../../assets/uploader.png';
import '../CSS/UploadPost.css';

const UploadPost = () => {
    const user = useSelector((state) => state.user.id);
    const [fileList, setFileList] = useState([]);
    const fileName = (e) => {
        const fileL = e.target.files[0].name.length;
        if (fileL > 90) {
            toast.error("Your file name should be less than 90 character.", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            e.target.reset();
        }
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
        }
    }
    const { id } = useParams();
    const [uploadImage, resInfo] = useUploadImageMutation();
    const [uploadVideo, resInfo1] = useUploadVideoMutation()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.uploadFile.files[0].name.match(/\.(jpg|jpeg|png|gif)$/) && imageActive) {
            const file = e.target.uploadFile.files[0];
            const title = e.target.title.value;
            const club_id = id;
            const user_id = user;
            const body = new FormData();
            body.append('img', file);
            body.append('title', title);
            body.append('club_id', club_id);
            body.append('user_id', user_id);
            uploadImage(body);
            if (!resInfo.isSuccess) {
                toast.info("Image is uploading now.", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
            e.target.reset();
            setFileList([]);
        }
        else if (e.target.uploadFile.files[0].name.match(/\.(mp4|mov|avi|3gp)$/) && videoActive) {
            const file = e.target.uploadFile.files[0];
            const title = e.target.title.value;
            const club_id = id;
            const user_id = user;
            const body = new FormData();
            body.append('video', file);
            body.append('title', title);
            body.append('club_id', club_id);
            body.append('user_id', user_id);
            uploadVideo(body);
            if (!resInfo1.isSuccess) {
                toast.info("Video is uploading now.", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
            e.target.reset();
            setFileList([]);
        }
        else {
            toast.error("Please select correct file and select correct upload button.", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
    }
    if (resInfo.isSuccess) {
        toast.success("Image uploaded successfully.", {
            position: toast.POSITION.BOTTOM_CENTER
        });
    }
    if (resInfo1.isSuccess) {
        toast.success("Video uploaded successfully.", {
            position: toast.POSITION.BOTTOM_CENTER
        });
    }
    console.log(resInfo);
    const wrapperRef = useRef(null);
    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');
    const [imageActive, setImageActive] = useState(true);
    const uploadImageClick = () => {
        setImageActive(!imageActive);
        setVideoActive(false);
    }
    const [videoActive, setVideoActive] = useState(false);
    const uploadVideoClick = () => {
        setVideoActive(!videoActive);
        setImageActive(false);
    }
    return (
        <div>
            <div className='flex justify-between items-center mt-10 text-2xl px-5'>
                <h1 onClick={uploadImageClick} className={imageActive ? 'w[250px] primary-bg p-2 px-16 cursor-pointer rounded-md text-white font-semibold' : 'w[250px] bg-accent p-2 px-16 cursor-pointer rounded-md'}>Upload Image</h1>
                <h1 onClick={uploadVideoClick} className={videoActive ? 'w[250px] primary-bg p-2 px-16 cursor-pointer rounded-md text-white font-semibold' : 'w[250px] bg-accent p-2 px-16 cursor-pointer rounded-md'}>Upload Videos</h1>
            </div>
            <div className='flex flex-col justify-center items-center mt-4'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col justify-center items-center mt-5 mb-2'>
                        <div
                            ref={wrapperRef}
                            className="drop-file-input border-dashed"
                            onDragEnter={onDragEnter}
                            onDragLeave={onDragLeave}
                            onDrop={onDrop}
                        >
                            <div className="drop-file-input__label">
                                <img src={uploadImg} alt="" />
                                <p>Drag & Drop your files here</p>
                                {
                                    fileList.map((item, index) => (
                                        <p key={index}>({item.name.slice(0, 20)}...)</p>
                                    ))
                                }
                            </div>
                            <input type="file" name='uploadFile' accept="image/*,video/*" onChange={fileName} />
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-xs">
                        <label className='ml-2'>
                            <span className='text-xl font-semibold'>Description</span>
                        </label>
                        <input type="text" name='title' placeholder="Type your description" className="input input-bordered w-[500px] h-16" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <input className='uppercase font-semibold px-8 rounded-xl cursor-pointer py-2 mt-4 text-white' style={{ backgroundColor: "#ee3c4d" }} type="submit" value='Upload' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadPost;