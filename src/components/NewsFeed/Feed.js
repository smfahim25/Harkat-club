import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useDeleteClubImagesMutation, useDeleteClubVideosMutation, useUpdateClubImagesMutation, useUpdateClubVideosMutation } from '../../app/EndPoints/baseEndpoints';
import uploadImg from '../../assets/uploader.png';

const Feed = (props) => {
    const user = useSelector(state => state.user.id);
    const userName = useSelector(state => state.user.username)
    const { HarkatImages_id, HarkatVideos_id, title, user_id, img_upload_date, club_id, img, video } = props.post;
    const [deleteClubImages, resInfo] = useDeleteClubImagesMutation();
    const [deleteClubVideos, resInfo1] = useDeleteClubVideosMutation();
    const [updateClubImages, resImg] = useUpdateClubImagesMutation();
    const [updateClubVideos, resVideo] = useUpdateClubVideosMutation();
    // delete post
    const handleDelete = (id) => {
        if (img) {
            deleteClubImages(id);
            setDeleting(false);
        }
        else if (video) {
            deleteClubVideos(id);
        }
    }
    if (resInfo.isSuccess) {
        toast.success("Your post deleted successfully.", {
            position: toast.POSITION.BOTTOM_CENTER
        });
    }
    if (resInfo1.isSuccess) {
        toast.success("Your video deleted successfully.", {
            position: toast.POSITION.BOTTOM_CENTER
        });
    }
    const [edit, setEdit] = useState(false);
    // edit post
    const handleEdit = (e) => {
        e.preventDefault();
        if (e.target.uploadFile.files[0].name.match(/\.(jpg|jpeg|png|gif)$/)) {
            let id = HarkatImages_id;
            const file = e.target.uploadFile.files[0];
            const title = e.target.title.value;
            const body = new FormData();
            body.append('img', file);
            body.append('title', title);
            body.append('club_id', club_id);
            body.append('user_id', user);
            updateClubImages({ body, id });
            if (!resImg.isSuccess) {
                toast.info("Image is updating now.", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
            e.target.reset();
            setFileList([]);
        }
        else if (e.target.uploadFile.files[0].name.match(/\.(mp4|mov|avi|3gp)$/)) {
            let id = HarkatVideos_id;
            const file = e.target.uploadFile.files[0];
            const title = e.target.title.value;
            const body = new FormData();
            body.append('video', file);
            body.append('title', title);
            body.append('club_id', club_id);
            body.append('user_id', user_id);
            updateClubVideos(body, id);
            if (!resVideo.isSuccess) {
                toast.info("Video is updating now.", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
            e.target.reset();
            setFileList([]);
        }
        setEdit(false);
    }
    // if (resImg.isSuccess) {
    //     toast.success("Image is updated successfully.", {
    //         position: toast.POSITION.BOTTOM_CENTER
    //     });
    // }
    // if (resVideo.isSuccess) {
    //     toast.success("Video is updated successfully.", {
    //         position: toast.POSITION.BOTTOM_CENTER
    //     });
    // }
    // edit post modal
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
    const wrapperRef = useRef(null);
    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');
    // open modal 
    const [open, setOpen] = useState(false);
    const btnRef = useRef();
    useEffect(() => {
        const closeMenu = (e) => { if (!btnRef.current.contains(e.target)) { setOpen(false); } };

        document.body.addEventListener("mousedown", closeMenu);

        return () => document.body.removeEventListener("mousedown", closeMenu);
    }, []);
    const [deleting, setDeleting] = useState(false);
    return (
        <div>
            <div className="rounded-md shadow-md w-full 2xl:w-[800px] mb-10 bg-slate-50">
                <div className="flex items-center justify-between p-3 cursor-pointer">
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <img src="https://images.ctfassets.net/hrltx12pl8hq/4ekcWeXQuA7uD5C1fcnlNJ/b22f0c5de296d041904bc00f441af9cc/thumb_july22_15.jpg?fit=fill&w=480&h=270" alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm" />
                        <div className="-space-y-1 cursor-pointer">
                            <h2 className="text-xl font-semibold leading-none mb-2">{userName}</h2>
                            <span className="inline-block text-xs leading-none mt-2">{img_upload_date}</span>
                        </div>
                    </div>
                    {user === user_id?.id && <div className='relative'>
                        <button onClick={() => setOpen(true)} ref={btnRef} title="Open option" type="button" className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                                <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                                <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                            </svg>
                            {
                                open && (<div className='bg-white p-2 w-32 shadow-2xl absolute -left-32 rounded-md'>
                                    <ul className='text-left'>
                                        {
                                            img && <li>
                                                <label onClick={() => setEdit(true)} className='p-1 pr-16 text-lg cursor-pointer rounded hover:bg-[#ee3c4d] hover:text-white font-semibold' htmlFor="edit-modal">Edit</label>
                                            </li>
                                        }
                                        {
                                            video && <li >
                                                <label onClick={() => setEdit(true)} className='p-1 pr-16 text-lg cursor-pointer rounded hover:bg-[#ee3c4d] hover:text-white font-semibold' htmlFor="edit-modal">Edit</label>
                                            </li>
                                        }

                                        {
                                            img && <li >
                                                <label className='p-1 pr-10 text-lg cursor-pointer rounded hover:bg-[#ee3c4d] hover:text-white font-semibold' htmlFor="delete-modal" onClick={() => setDeleting(true)}>Delete</label>
                                            </li>
                                        }
                                        {
                                            video && <li>
                                                <label className='p-1 pr-10 text-lg cursor-pointer rounded hover:bg-[#ee3c4d] hover:text-white font-semibold' onClick={() => setDeleting(true)}>Delete</label>
                                            </li>
                                        }
                                    </ul>
                                </div>)
                            }
                        </button>
                    </div>}
                </div>
                <p className='ml-7 px-2 text-lg'>{title}</p>
                {
                    img && <img src={img} alt="" className="object-cover object-center w-full h-[400px]" />
                }
                {
                    video && <ReactPlayer
                        style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                        playing={true}
                        volume={1}
                        loop
                        muted
                        controls
                        alt="All the devices"
                        url={video}
                    />
                }
                <div className="p-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <button type="button" title="Like post" className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Add a comment" className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Share post" className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                                </svg>
                            </button>
                        </div>
                        <button type="button" title="Bookmark post" className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-wrap items-center pt-3 pb-1">
                        <div className="flex items-center space-x-2">
                            <div className="flex -space-x-1">
                                <img alt="" className="w-5 h-5 border rounded-full" src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" />
                                <img alt="" className="w-5 h-5 border rounded-full" src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" />
                                <img alt="" className="w-5 h-5 border rounded-full" src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" />
                            </div>
                            {/* <span className="text-sm">Liked by
                                <span className="font-semibold">Good</span>and
                                <span className="font-semibold">others</span>
                            </span> */}
                        </div>
                    </div>
                    <div className="space-y-3">
                        {/* <p className="text-sm">
                            <span className="text-base font-semibold">leroy_jenkins72</span>Nemo ea quasi debitis impedit!
                        </p> */}
                        <input type="text" placeholder="Add a comment..." className="w-full py-0.5 dark:bg-transparent border-none text-sm pl-0 text-gray-100" />
                    </div>
                </div>
            </div>
            {
                deleting && <div>
                    <input type="checkbox" id="delete-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Are you sure want to delete?</h3>
                            <div className="modal-action">
                                {img && <button onClick={() => { handleDelete(HarkatImages_id); setDeleting(false); }} className='primary-bg px-5 py-2 rounded-lg text-white font-semibold'>Delete</button>}
                                {video && <button onClick={() => { handleDelete(HarkatVideos_id); setDeleting(false); }} className='primary-bg px-5 py-1 rounded-lg text-white font-semibold'>Delete</button>}
                                <label htmlFor="delete-modal" className="bg-neutral px-5 py-2 rounded-lg text-white font-semibold">Cancel</label>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {edit && <div>
                <input type="checkbox" id="edit-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={handleEdit}>
                            <div className='flex flex-col justify-center items-center mt-5 mb-2'>
                                <div
                                    ref={wrapperRef}
                                    className="drop-file-input w-full h-72 border-dashed"
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
                                <input type="text" name='title' placeholder="Type your description" className="input input-bordered w-[460px] h-16" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <input className='uppercase font-semibold px-8 rounded-xl cursor-pointer py-2 mt-4 text-white' style={{ backgroundColor: "#ee3c4d" }} type="submit" value='Update' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Feed;